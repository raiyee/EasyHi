import Vue from 'vue';
import VueRouter from 'vue-router';

import store from 'store';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['views/MemberIndex'], resolve)
    }, {
      path: '/login',
      name: 'login',
      component: resolve => require(['views/Login'], resolve)
    }, {
      path: '/member-center',
      name: 'memberCenter',
      component: resolve => require(['views/MemberCenter'], resolve),
      meta: {
        auth: true
      }
    }, {
      path: '/member-subscribe',
      name: 'memberSubscribe',
      component: resolve => require(['views/MemberSubscribe'], resolve),
      meta: {
        bg: false,
        init: {
          url: '/get-schedules',
          actions: {
            addStatuses: 'calendarStatus'
          }
        }
      }
    }, {
      path: '/website',
      name: 'website',
      component: resolve => require(['views/MerchantWebsite/edit-index'], resolve),
      meta: {
        init: {
          url: '/get-website-edit'
        }
      }

    }, {
      path: '*',
      redirect: '/'
    }
  ]
});

const body = document.getElementsByTagName('body')[0];

router.beforeEach((route, redirect, next) => {
  store.dispatch('setProgress', 50);

  const meta = route.meta;

  body.className = meta.bg || meta.bg == null ? 'bg' : '';

  let init;

  // 首先判断是否需要登录权限, 后期需要新增馆主、教练、客服等多种权限
  if (meta.auth && !store.getters.authorized) return redirect({name: 'login', query: {from: route.fullPath}});

  // 如果不需要先初始化数据或者已经拉取过数据则直接进入, 后期可能考虑新增过期时间字段
  if (!(init = meta.init) || meta.fetched) return next();

  if (typeof init === 'function') return init(route, redirect, next);

  // 需要预先拉取数据
  Vue.http[init.type || 'get'](init.url, {
    body: {
      ...route.params,
      ...route.query
    },
    ...init.options
  }).then(res => {
    const data = res.json();
    const actions = init.actions;

    if (!actions) {
      // 未定义 actions 表示将 data 存入 meta 然后在组件初始化前通过 route 获取
      meta.data = data;
    } else if (typeof actions === 'string') {
      // 完成后如果是字符串表示直接将所有数据导入 action
      store.dispatch(actions, data);
    } else {
      // 否则应该是对象类型, 遍历将对应数据导入对应 action
      for (const [key, value] of Object.entries(actions)) {
        store.dispatch(key, data[value]);
      }
    }
    meta.fetched = true;
    // 数据导入 store 成功后进入组件
    next();
  });
});

router.afterEach((/* route, redirect, next */) => {
  store.dispatch('setProgress', 100);
  window.scrollTo(0, 0);
});

export default router;

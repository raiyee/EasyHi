webpackJsonp([48],{520:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e(668),o=function(t){return t&&t.__esModule?t:{default:t}}(i);a.default={name:"login",render:function(){var t=this;return(0,arguments[0])(o.default,{attrs:{confirm:function(){return t.$router.replace(t.$route.query.from||"/")}}},[])}},t.exports=a.default},668:function(t,a,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(a,"__esModule",{value:!0});var o=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},r=e(48),s=e(1),n=e(671),c=i(n),l=e(32),p=i(l);a.default=e(672)({name:"hi-login",props:{confirmText:{type:String,default:"登录"},confirm:Function,inviter:null},data:function(){return{classes:c.default,limit:0,imgCaptcha:null,captchaSrc:null,loginMobile:"",captcha:"",showImgCaptcha:!1}},computed:o({},(0,r.mapGetters)(["mobile","tcode","merchantLogo"])),created:function(){this.loginMobile=this.mobile},methods:o({},(0,r.mapActions)(["setEnv","resetRole"]),{getImgCaptcha:function(){var t=this,a="/get-captcha?t="+ +new Date;this.$http.post(a).then(function(a){var e=a.data;t.captchaSrc=e})},clearMobile:function(){this.loginMobile=null,this.$refs.mobile.focus()},getVerificationCode:function(){var t=this,a=this.$v,e=a.loginMobile,i=a.imgCaptcha;e.$touch(),this.limit||e.$error||i.$error||this.$http.post("/send-authc-captcha/"+this.loginMobile,null,{headers:{"Submit-Captcha":this.imgCaptcha}}).then(function(a){var e=a.data,i=+e;if(t.getImgCaptcha(),-1===i)return(0,s.alert)("操作太频繁，休息一下吧！");t.limit=i;var o=setInterval(function(){--t.limit||clearInterval(o)},1e3)}).catch(function(a){402===a.status&&(t.getImgCaptcha(),t.showImgCaptcha=!0)})},submit:function(){var t=this,a=this.$v.loginMobile,i=this.$v.captcha;if(a.$touch(),i.$touch(),!a.$error&&!i.$error){var o=this.loginMobile;this.$http.post("/login",p.default.stringify({loginType:"captcha",username:o,password:this.captcha,inviter:this.inviter})).then(function(a){if("success"!==a.data.code)return(0,s.alert)("手机号/验证码错误");e(108).setItems({mobile:o}),t.$http.post("/center/"+t.tcode+"/initialize/get-base-data").then(function(a){var e=a.data;t.resetRole(Object.assign({mobile:o},e)),t.confirm&&t.confirm()})})}}}),validator:{loginMobile:{mobile:!0},captcha:{integer:[4,!1]},imgCaptcha:{length:4}}}),t.exports=a.default},669:function(t,a,e){a=t.exports=e(60)(!1),a.push([t.i,"._3aHgG0pizNBNW_T7ELBe55 form{padding:0 .625rem;margin:0 auto}@media (min-width:768px){._3aHgG0pizNBNW_T7ELBe55 form{width:50%}}._2r3U2zyxfCd3yGLjwRvrl-{width:5.9375rem;height:5.9375rem;margin-top:2.5rem;margin-bottom:2.5rem;position:relative;background-color:#e5e5e5}._2r3U2zyxfCd3yGLjwRvrl->img{width:5.625rem;height:5.625rem;position:absolute;left:50%;top:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.ud3vOW23iR0QH7uCwlskk{margin-bottom:1.5625rem}.ud3vOW23iR0QH7uCwlskk .form-control-static{padding-left:3.125rem;padding-bottom:0}",""]),a.locals={container:"_3aHgG0pizNBNW_T7ELBe55",yoga:"_2r3U2zyxfCd3yGLjwRvrl-","form-group":"ud3vOW23iR0QH7uCwlskk",formGroup:"ud3vOW23iR0QH7uCwlskk"}},671:function(t,a,e){var i=e(669);"string"==typeof i&&(i=[[t.i,i,""]]);var o={};o.transform=void 0;e(153)(i,o);i.locals&&(t.exports=i.locals)},672:function(t,a,e){var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:t.classes.container},[t._t("default",[e("div",{staticClass:"center-block img-circle",class:t.classes.yoga},[e("img",{staticClass:"img-circle",attrs:{src:t.merchantLogo,alt:"瑜伽"}})])]),e("form",{attrs:{action:"javascript:;"},on:{submit:function(a){a.preventDefault(),t.submit(a)}}},[e("div",{class:[t.classes.formGroup,t.$v.loginMobile.$error&&"has-error"]},[e("div",{staticClass:"input-group input-group-primary"},[t._m(0),e("input",{directives:[{name:"model",rawName:"v-model",value:t.loginMobile,expression:"loginMobile"}],ref:"mobile",staticClass:"form-control",attrs:{type:"tel",placeholder:"请输入手机号"},domProps:{value:t.loginMobile},on:{focus:t.$v.loginMobile.$reset,blur:t.$v.loginMobile.$touch,input:function(a){a.target.composing||(t.loginMobile=a.target.value)}}}),t.loginMobile?e("span",{staticClass:"input-group-addon",on:{click:t.clearMobile}},[e("span",{staticClass:"glyphicon glyphicon-remove-sign"})]):t._e()]),t.$v.loginMobile.$error?e("p",{staticClass:"form-control-static"},[t._v("请输入正确的手机号码")]):t._e()]),t.showImgCaptcha?e("div",{class:[t.classes.formGroup,t.$v.imgCaptcha.$error&&"has-error"]},[e("div",{staticClass:"input-group input-group-primary"},[t._m(1),e("input",{directives:[{name:"model",rawName:"v-model",value:t.imgCaptcha,expression:"imgCaptcha"}],staticClass:"form-control",attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:t.imgCaptcha},on:{focus:t.$v.imgCaptcha.$reset,blur:t.$v.imgCaptcha.$touch,input:function(a){a.target.composing||(t.imgCaptcha=a.target.value)}}}),e("span",{staticClass:"input-group-addon",on:{click:t.getImgCaptcha}},[t.captchaSrc?e("img",{attrs:{src:t.captchaSrc}}):t._e()])]),t.$v.imgCaptcha.$error?e("p",{staticClass:"form-control-static"},[t._v("请输入正确的验证码")]):t._e()]):t._e(),e("div",{class:[t.classes.formGroup,t.$v.captcha.$error&&"has-error"]},[e("div",{staticClass:"input-group input-group-primary"},[t._m(2),e("input",{directives:[{name:"model",rawName:"v-model",value:t.captcha,expression:"captcha"}],staticClass:"form-control",attrs:{type:"tel",placeholder:"请输入验证码"},domProps:{value:t.captcha},on:{focus:t.$v.captcha.$reset,blur:t.$v.captcha.$touch,input:function(a){a.target.composing||(t.captcha=a.target.value)}}}),e("span",{staticClass:"input-group-addon theme-color",on:{click:t.getVerificationCode}},[t._v(t._s(this.limit?this.limit+"s":"获取验证码"))])]),t.$v.captcha.$error?e("p",{staticClass:"form-control-static"},[t._v("请输入正确的验证码")]):t._e()]),e("button",{staticClass:"btn btn-theme-primary btn-block btn-hg",attrs:{type:"submit"}},[t._v(t._s(t.confirmText))])])],2)},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"input-group-addon"},[e("span",{staticClass:"glyphicon glyphicon-phone"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"input-group-addon"},[e("span",{staticClass:"glyphicon glyphicon-lock"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"input-group-addon"},[e("span",{staticClass:"glyphicon glyphicon-lock"})])}];t.exports=function(t){return t=t||{},t.render=i,t.staticRenderFns=o,t}}});
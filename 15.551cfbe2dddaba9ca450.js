webpackJsonp([15],{541:function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=n(11),a=void 0;o.default=n(627)({data:function(){return{options:{backdrop:!1,show:!0,destroy:!0},promptText:""}},methods:{addModal:function(){a=this.$modal.open({id:a,component:n.e(17).then(n.bind(null,553)),options:this.options,props:{bodyMsg:"Just test body",transition:!0}})},clearModal:function(){this.$modal.clear()},confirmModal:function(){(0,e.confirm)({tipText:"测试confirm 模态框",confirmText:"蓝瘦,香菇",confirm:function(){console.log("It is after confirm btn"),(0,e.closeModal)()},close:function(){console.log("It is after cancel modal"),(0,e.closeModal)()}})},alertModal:function(){(0,e.alert)('I am  an alert <span style="color: red">red</span> modal Text')},toastModal:function(){(0,e.toast)({tipText:"I am  a confirm modal tip Text",close:function(){console.log("It is a toast"),(0,e.closeModal)()}})},promptModal:function(){var t=this;(0,e.prompt)({tipText:"还不赶紧写原因？",promptText:this.promptText,placeholder:'在此填写原因(50字以内)，或者直接点击"确定"',confirm:function(o){t.promptText=o,(0,e.closeModal)()}})}}}),t.exports=o.default},627:function(t,o,n){var e=function(){var t=this,o=(t.$createElement,t._c);return o("div",[o("button",{staticClass:"btn btn-theme-primary",on:{click:t.addModal}},[t._v("Add modal")]),o("button",{staticClass:"btn btn-theme-default",on:{click:t.clearModal}},[t._v("Clear modal")]),o("br"),o("button",{staticClass:"btn btn-theme-default",on:{click:t.alertModal}},[t._v("Alert modal")]),o("button",{staticClass:"btn btn-theme-default",on:{click:t.confirmModal}},[t._v("Confirm modal")]),o("button",{staticClass:"btn btn-theme-default",on:{click:t.toastModal}},[t._v("Toast modal")]),o("button",{staticClass:"btn btn-theme-default",on:{click:t.promptModal}},[t._v("Prompt modal")]),o("div",{staticClass:"theme-color",domProps:{innerHTML:t._s(t.promptText)}})])},a=[];t.exports=function(t){return t.render=e,t.staticRenderFns=a,t},e._withStripped=!0}});
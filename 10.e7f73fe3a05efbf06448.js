webpackJsonp([10],{552:function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var s=t(603),r=i(s),a={data:function(){return{text:"",classes:r.default}},template:'<div class="container">For example: (Just the part of js)\n<a href="https://jsfiddle.net/JounQin/87sv5beu/embedded/">JsFiddle</a><br>\nMore complex:\n<a href="https://jsfiddle.net/JounQin/aq0yjj7L/embedded">JsFiddle</a>\n<textarea :class="classes.text" v-model="text"/></div>'};n.default=t(625)({name:"website-edit",data:function(){return{built:!1,comps:null,emptyView:a,classes:r.default}},created:function(){this.comps=this.$route.meta.data},methods:{rebuild:function(){if(this.built)return this.comps=null;try{var e=this.$refs.component.$children[0].text,n=Function.call(null,"return "+e);n&&(this.comps=n())}catch(e){this.$util.error(e),alert("请确认输入的内容是合法的模版数组")}},compBuilt:function(e){this.built=!e}}}),e.exports=n.default},585:function(e,n,t){n=e.exports=t(177)(),n.push([e.i,".U7XntStLGFwUJDyX04GQ0,._37IfmKMqkIM7ok_xJbW_IX{margin-top:.625rem}._37IfmKMqkIM7ok_xJbW_IX{width:100%;height:31.25rem}","",{version:3,sources:["/../../src/views/_Dynamic/src/views/_Dynamic/index.styl","/../../src/views/_Dynamic/node_modules/stylus-pxtorem/lib/stylus-px2rem/mixins.styl","/../../src/views/_Dynamic/index.styl"],names:[],mappings:"AAGA,gDC4BS,kBAAA,CD5BT,yBC4BS,WAAA,eAAA,CCdR",file:"index.styl",sourcesContent:[".btn\n  margin-top 10px\n\n.text\n  width 100%\n  height 500px\n  margin-top 10px\n",'/**\n    px2rem 自动将 px 转换成 rem\n    兼容报告： http://caniuse.com/#feat=rem\n\n    设置html的字体大小 font-size =10px 那么此时 1rem = 10px\n*/\nhtml-font-size ?= 10px;\n// style-names ?= width height min-height max-height min-width max-width border margin margin-top margin-bottom margin-left margin-right padding padding-left padding-right padding-bottom padding-top line-height;\nstyle-names ?= "min-height" "max-height" "min-width" "max-width" "width" "height" "border" "margin" "margin-top" "margin-bottom" "margin-left" "margin-right" "padding" "padding-left" "padding-right" "padding-bottom" "padding-top" "line-height"\n// value less then ignore_limit will be ignored and return the original value\npx2rem_ignore_limit ?= 1\n\npx2rem(prop,values){\n    values-px = null;\n    values-rem = null;\n    need_normalize = !prop in style-names\n    for value in values {\n        //match(\'-gradient\\(\', \'\'+arguments)\n        if (typeof(value) == \'unit\' && value != 0 && match(\'px$\',\'\'+value)) {\n            if(abs(value) <= px2rem_ignore_limit){\n                value-rem = value;\n            }else if(!need_normalize){\n                value-rem = unit(value / 16,\'rem\');\n            }else{\n                value-rem = unit(value / html-font-size,\'rem\');\n            }\n            push(values-rem,value-rem)\n        } else {\n            push(values-rem,value)\n        }\n    }\n    {prop} : values-rem;\n}',"/*\n *  Fonts.css -- Cross-platform Chinese fonts solution\n *\n *  Copyright (C) 2013-2015 Zeno Zeng\n *  Released under the MIT license\n *\n *  Github: https://github.com/zenozeng/fonts.css\n */\n@media (min-resolution: 2dppx) {\n}\n.btn {\n  margin-top: 0.625rem;\n}\n.text {\n  width: 100%;\n  height: 31.25rem;\n  margin-top: 0.625rem;\n}\n/*# sourceMappingURL=src/views/_Dynamic/index.css.map */"],sourceRoot:"webpack://"}]),n.locals={btn:"U7XntStLGFwUJDyX04GQ0",btn:"U7XntStLGFwUJDyX04GQ0",text:"_37IfmKMqkIM7ok_xJbW_IX",text:"_37IfmKMqkIM7ok_xJbW_IX"}},603:function(e,n,t){var i=t(585);"string"==typeof i&&(i=[[e.i,i,""]]);t(178)(i,{});i.locals&&(e.exports=i.locals)},625:function(e,n,t){var i=function(){var e=this,n=(e.$createElement,e._c);return n("div",[n("div",{staticClass:"text-center"},[n("button",{staticClass:"btn",class:e.classes.btn,on:{click:e.rebuild}},[e._v(e._s(e.built?"Clear":"Rebuild")+" your own view")])]),n("hr"),n("dynamic",{ref:"component",attrs:{comps:e.comps,emptyView:e.emptyView},on:{built:e.compBuilt}})])},s=[];e.exports=function(e){return e.render=i,e.staticRenderFns=s,e},i._withStripped=!0}});
webpackJsonp([49],{1047:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=n(1),o=function(t){var e=[],n=!0,o=!1,a=void 0;try{for(var s,u=Object.entries(t)[Symbol.iterator]();!(n=(s=u.next()).done);n=!0){var c=s.value,l=r(c,2),d=l[0],f=l[1];(0,i.isObject)(f)&&e.push(Object.assign(f,{name:d}))}}catch(t){o=!0,a=t}finally{try{!n&&u.return&&u.return()}finally{if(o)throw a}}return e},a=function(t){return(0,i.warn)("invalid "+t+" will be ignored!")},s=function(t){return(0,i.warn)("no "+t+" found thus it will be ignored!")},u=function t(e,n){if(e){if((0,i.isObject)(e))e=o(e);else if(!(0,i.isArray)(e))return a("components");if(!e.length)return s("components");var u="",c={},l=0;if(e.forEach(function(e,n){var o=e.name,d=void 0===o?"_"+n:o,f=e.template,m=e.data,p=e.methods,h=e.components;if(!f)return s("template");u+="<"+d+"/>";var v=c[d]={template:f};if((0,i.isObject)(p)){var y={},b=!0,w=!1,_=void 0;try{for(var j,g=Object.entries(p)[Symbol.iterator]();!(b=(j=g.next()).done);b=!0){var x=j.value,O=r(x,2),F=O[0],V=O[1];y[F]=(0,i.isFunction)(V)?V:Function[(0,i.isArray)(V)?"apply":"call"](null,V)}}catch(t){w=!0,_=t}finally{try{!b&&g.return&&g.return()}finally{if(w)throw _}}v.methods=y}else if(p)return a("methods");m&&(v.data=(0,i.isFunction)(m)?m:function(){return m}),h&&(v.components=t(h,!0)),l++}),l)return n?c:{name:"Dynamic--Root",template:1===l?u:"<div>"+u+"</div>",components:c}}};e.default={name:"dynamic",template:'<comment :is="view"/>',props:{comps:{validator:function(t){return!t||(0,i.isArray)(t)||(0,i.isObject)(t)}},emptyView:{required:!0,validator:function(t){return(0,i.isObject)(t)}}},data:function(){return{view:this.emptyView}},created:function(){this.reBuild()},watch:{comps:function(){this.reBuild()}},methods:{reBuild:function(){var t=u(this.comps);this.view=t||this.emptyView,this.$emit("built",this.view===this.emptyView)}}},t.exports=e.default},1048:function(t,e,n){var r=n(1049);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0};i.transform=void 0;n(160)(r,i);r.locals&&(t.exports=r.locals)},1049:function(t,e,n){e=t.exports=n(61)(!1),e.push([t.i,"._2om7VI0y001KfGJk3cnNdT a{color:#add8e6}._3Ggu39_3jbYI9fpoCHshOH{margin-top:.625rem}._1qOyahz1ofSP6C-Ggg0Fho{width:100%;height:31.25rem;margin-top:.625rem}",""]),e.locals={container:"_2om7VI0y001KfGJk3cnNdT",btn:"_3Ggu39_3jbYI9fpoCHshOH",text:"_1qOyahz1ofSP6C-Ggg0Fho"}},1050:function(t,e,n){var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.classes.container},[n("div",{staticClass:"text-center"},[n("button",{staticClass:"btn",class:t.classes.btn,on:{click:t.rebuild}},[t._v(t._s(t.built?"Clear":"Rebuild")+" your own view")])]),n("hr"),n("dynamic",{ref:"component",attrs:{comps:t.comps,emptyView:t.emptyView},on:{built:t.compBuilt}})],1)},i=[];t.exports=function(t){return t=t||{},t.render=r,t.staticRenderFns=i,t}},577:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1047),o=r(i),a=n(1048),s=r(a),u={data:function(){return{text:"",classes:s.default}},template:'<div class="container">For example: (Just the part of js)\n<a href="https://jsfiddle.net/JounQin/87sv5beu/embedded/" target="_blank">JsFiddle</a><br>\nMore complex:\n<a href="https://jsfiddle.net/JounQin/aq0yjj7L/embedded" target="_blank">JsFiddle</a>\n<textarea :class="classes.text" v-model="text"/></div>'};e.default=n(1050)({name:"website-edit",data:function(){return{built:!1,comps:null,emptyView:u,classes:s.default}},created:function(){this.comps=this.$route.meta.data},methods:{rebuild:function(){if(this.built)return this.comps=null;try{var t=this.$refs.component.$children[0].text,e=Function.call(null,"return "+t);e&&(this.comps=e())}catch(t){this.$util.error(t),alert("请确认输入的内容是合法的模版数组")}},compBuilt:function(t){this.built=!t}},components:{Dynamic:o.default}}),t.exports=e.default}});
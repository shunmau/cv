"use strict";(self["webpackChunkonlinecv"]=self["webpackChunkonlinecv"]||[]).push([[355],{5972:function(e,t,i){i(8582);var n=i(5109);t["Z"]=(0,n.Z)("flex")},6355:function(e,t,i){i.r(t),i.d(t,{default:function(){return S}});var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("content-section",[i("v-container",{staticClass:"center",attrs:{"fill-height":""}},[e._l(e.items,(function(t,n){return[i("v-flex",{key:n,attrs:{md3:"",sm4:"",xs6:""}},[t.isOverlap?i("v-chip",{attrs:{large:"",color:"blue lighten-3"},on:{mouseleave:function(e){t.isOverlap=!1}}},[i("v-avatar",[i("v-icon",[e._v(" "+e._s(t.icon)+" ")])],1),e._v(" "+e._s(t.text)+" ")],1):i("v-chip",{on:{mouseenter:function(e){t.isOverlap=!0}}},[i("v-avatar",[i("v-icon",[e._v(" "+e._s(t.icon)+" ")])],1),e._v(" "+e._s(t.text)+" ")],1)],1)]}))],2)],1)},s=[],a=(i(9653),{name:"HobbiesView",props:{size:Number},data:function(){return{items:[{icon:"mdi-biohazard",text:"Challenges",isOverlap:!1},{icon:"mdi-bike",text:"Cycling",isOverlap:!1},{icon:"mdi-snowboard",text:"Snowboarding",isOverlap:!1},{icon:"mdi-diving-snorkel",text:"Scuba Diving",isOverlap:!1},{icon:"mdi-image-filter-hdr",text:"Nature",isOverlap:!1},{icon:"mdi-car",text:"Driving",isOverlap:!1},{icon:"mdi-hiking",text:"Traveling",isOverlap:!1},{icon:"mdi-camera",text:"Photography",isOverlap:!1},{icon:"mdi-movie",text:"Movie",isOverlap:!1},{icon:"mdi-music",text:"Music",isOverlap:!1},{icon:"mdi-book-open-page-variant",text:"Books",isOverlap:!1},{icon:"mdi-gamepad-square-outline",text:"Games",isOverlap:!1}]}},components:{},mounted:function(){document.title="My Interests"}}),l=a,o=i(1001),c=i(3453),r=i.n(c),h=i(6370),u=i(5200),p=i(4367),v=(i(1539),i(7327),i(3325)),d=i(5827),f=i(172),g=i(6952),m=i(7352),b=i(8085),C=i(2936),x=i(6505),Z=i(9131),k=i(1824),_=(0,v.Z)(g.Z,Z.Z,x.Z,b.Z,(0,m.d)("chipGroup"),(0,C.d)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return(0,p.Z)((0,p.Z)((0,p.Z)((0,p.Z)({"v-chip":!0},x.Z.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(x.Z.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var e=this,t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach((function(t){var i=(0,u.Z)(t,2),n=i[0],s=i[1];e.$attrs.hasOwnProperty(n)&&(0,k.fK)(n,s,e)}))},methods:{click:function(e){this.$emit("click",e),this.chipGroup&&this.toggle()},genFilter:function(){var e=[];return this.isActive&&e.push(this.$createElement(f.Z,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(d.Zq,e)},genClose:function(){var e=this;return this.$createElement(f.Z,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.$emit("click:close"),e.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(e){var t=[this.genContent()],i=this.generateRouteLink(),n=i.tag,s=i.data;s.attrs=(0,p.Z)((0,p.Z)({},s.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:s.attrs.tabindex}),s.directives.push({name:"show",value:this.active}),s=this.setBackgroundColor(this.color,s);var a=this.textColor||this.outlined&&this.color;return e(n,this.setTextColor(a,s),t)}}),O=i(4228),y=i(5972),$=i(6428),B=(0,o.Z)(l,n,s,!1,null,null,null),S=B.exports;r()(B,{VAvatar:h.Z,VChip:_,VContainer:O.Z,VFlex:y.Z,VIcon:$.Z})}}]);
//# sourceMappingURL=355-legacy.be823159.js.map
webpackJsonp([7],{BT10:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={name:"portal",data:function(){return{restaurants:[],search:"",timeout:null,tabs:[],active:0,bid:"",article:[],userInfo:{},recom:[],dialog:!1,dialog1:!0,dialog2:!1,querySearch:"",textarea:""}},mounted:function(){this.getdata(),this.getarticle(0)},methods:{islike:function(t){this.getArt(this.bid)},isrubbish:function(t){this.getArt(this.bid)},getdata:function(){var t=this;this.$post("index/data/question_type").then(function(i){t.bid=i.data[0].bid,t.tabs=i.data}).catch(function(t){console.log(t)})},getarticle:function(t){var i=this;this.active=t,this.$post("index/data/question_answer").then(function(t){i.article=t.data,i.article.map(function(t,a,e){t.head=i.$httpUrl+"/uc_server/avatar.php?uid="+t.uid+"&amp;size=big"}),i.article=i.article.slice()}).catch(function(t){console.log(t)})},getArt:function(t){var i=this;this.$post("index/data/label_question",{bid:t}).then(function(t){i.article=t.data.data,i.article.map(function(t,a,e){t.head=i.$httpUrl+"/uc_server/avatar.php?uid="+t.uid+"&amp;size=big"}),i.article=i.article.slice()}).catch(function(t){console.log(t)})},tochange:function(t,i){this.active=t,this.getArt(i)}}},n={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"portal"},[a("nav",{attrs:{id:"main-nav"}},[a("ul",{staticClass:"m"},[a("li",{class:0===t.active?"active":"",on:{click:function(i){return t.getarticle(0)}}},[t._v("\n        热门\n      ")]),t._v(" "),t._l(t.tabs,function(i,e){return a("li",{key:e,class:t.active===e+1?"active":"",on:{click:function(a){return t.tochange(e+1,i.bid)}}},[t._v("\n        "+t._s(i.name)+"\n      ")])})],2)]),t._v(" "),a("div",{staticClass:"main m"},[a("div",{staticClass:"main-left"},[a("articles",{attrs:{article:t.article},on:{islike:t.islike,isrubbish:t.isrubbish}})],1),t._v(" "),a("div",{staticClass:"main-right"},[a("div",{staticClass:"user",staticStyle:{"margin-bottom":"20px"}},[a("userinfo")],1),t._v(" "),a("recommend"),t._v(" "),a("answer")],1)])])},staticRenderFns:[]};var s=a("C7Lr")(e,n,!1,function(t){a("QScH")},"data-v-6036b67c",null);i.default=s.exports},QScH:function(t,i){}});
//# sourceMappingURL=7.ec584a91e53db60320f3.js.map
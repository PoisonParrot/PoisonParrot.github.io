webpackJsonp([0],{"2nlY":function(t,s){},"6/yg":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAkCAYAAADo6zjiAAABnUlEQVRYR+2XsUoDQRBA3yjWYmEnam0jdjY2/ohgIcmiQTsRiRBFsTIoniKiWPktVmJjbcBGRNRWya1swpm7xMvtmdsEJdPt7uzM25md2xshLJ5eQNhBMxaZTzdYQ0mZY72HYgMR3W67fC+e6ml8boHGXDrHgXYdwNNvwDVK8nYAnl4BDn/nM7IrDDAM7KNkPc5u47SeXgUOHAAYk7EQ3QKIhXABUELJFp6uAONNEW2JhAuAG5TM4ukccNKSUqFIXraDeRcAxvYiSi7x9BzCPH5TZVU5pyCPRtEVgA/s4lNmWV5syzCrKgj7MyBPwEcEQiiRlwuXEUiq5vq3wmEK/gfAK1BKOorlehEYCelapaCCkklLB+3VPP0ATKQFqAK1Ws1AzPM+mBYgA7+xJqxS0Afo+SV8BpYyysMZMNq/hH8uAu9oai9WxyKYp978IQdi9R3oeRV8Avcdn75uYAoYShuBjHz/aMYqBV0HyKo1swEvoOTIKLpoTpMANAPMkJO7KIAZZdOexwMIj2g2UXIVKHXaiiedNnG9D9DzCHwB9IbGJRF064sAAAAASUVORK5CYII="},KlaK:function(t,s){},MJPa:function(t,s){},RAbb:function(t,s){},VS1s:function(t,s){},WMdR:function(t,s){},Xo06:function(t,s){},Y1OT:function(t,s){},YirU:function(t,s){},bxMG:function(t,s){},dqQd:function(t,s){},fjrQ:function(t,s,e){"use strict";var i={name:"fansnumber",data:function(){return{fansNum:0,attentionNum:0,userInfo:{},uid:""}},props:["otheruid"],mounted:function(){var t=this,s=this.$route.query.otheruid;this.uid=s||this.$store.state.userInfo.uid,setTimeout(function(){t.getuser(),t.getnumber()},1e3)},watch:{$route:function(){var t=this.$route.query.otheruid;this.uid=t||this.$store.state.userInfo.uid,this.getuser(),this.getnumber()}},methods:{getuser:function(){var t=this;this.$post("index/data/member_info",{uid:this.uid}).then(function(s){t.userInfo=s.data}).catch(function(t){console.log(t)})},getnumber:function(){var t=this;this.$post("index/data/question_user_count",{uid:this.uid}).then(function(s){t.fansNum=s.data.fans,t.attentionNum=s.data.attention}).catch(function(t){console.log(t)})}}},n={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"fansnumber"},[i("div",{staticClass:"person"},[i("div",{staticClass:"lis"},[i("img",{staticClass:"page",attrs:{src:e("6/yg"),alt:""}}),t._v(" "),i("span",[t._v("发布"+t._s(t.userInfo.question)+"篇文章")])]),t._v(" "),i("div",{staticClass:"lis"},[i("img",{staticClass:"write",attrs:{src:e("xBBE"),alt:""}}),t._v(" "),i("span",[t._v("参与"+t._s(t.userInfo.attention)+"次回答")])])]),t._v(" "),i("div",{staticClass:"atten"},[i("div",{staticClass:"att"},[i("div",{staticClass:"r-top"},[t._v("关注")]),t._v(" "),i("div",{staticClass:"num"},[t._v(t._s(t.fansNum))])]),t._v(" "),i("div",{staticClass:"follower"},[i("div",{staticClass:"r-top"},[t._v("粉丝")]),t._v(" "),i("div",{staticClass:"num"},[t._v(t._s(t.attentionNum))])])])])},staticRenderFns:[]};var a=e("C7Lr")(i,n,!1,function(t){e("MJPa")},"data-v-28d90e85",null);s.a=a.exports},fmSW:function(t,s){},iVWq:function(t,s){},krBF:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={name:"doubt",props:{doubt:Array},methods:{toessay:function(t){this.$router.push({path:"/essay",query:{aid:t}})}}},n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"doubt"},[e("ul",t._l(t.doubt,function(s,i){return e("li",{key:i,on:{click:function(e){return t.toessay(s.aid)}}},[e("div",{staticClass:"title"},[t._v(t._s(s.title))]),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"ans"},[t._v(t._s(s.commentnum)+"回答")]),t._v(" "),e("div",{staticClass:"col"},[t._v(t._s(s.favtimes)+"收藏")])]),t._v(" "),t._m(0,!0)])}),0)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"toans"},[s("img",{attrs:{src:e("xBBE"),alt:""}}),this._v(" 回答")])}]};var a=e("C7Lr")(i,n,!1,function(t){e("KlaK")},"data-v-52ab5790",null).exports,r=e("m/VA"),o=e.n(r),c={name:"answ",data:function(){return{isLogin:!1,userInfo:{}}},props:{article:Array},watch:{article:{handler:function(t,s){this.setqr()},deep:!0}},computed:{},mounted:function(){this.init(),this.setqr()},active:function(){this.setqr()},methods:{init:function(){var t=this;this.isLogin=this.$store.state.isLogin,this.userInfo=this.$store.state.userInfo,this.article.map(function(s,e,i){s.head=t.$httpUrl+"/uc_server/avatar.php?uid="+s.uid+"&amp;size=big"}),this.article.slice()},touser:function(t){this.$router.push({name:"user",query:{otheruid:t}})},torubbish:function(t,s,e,i){var n=this;this.isLogin||this.userInfo?this.$post("index/data/rubbish",{aid:t,title:s,uid:e,username:i}).then(function(t){200===t.data.result?(n.$emit("isrubbish",!0),n.$message.success(t.data.msg)):201===t.data.result?n.$message.warning(t.data.msg):n.$message.error(t.data.msg)}):(this.$message("请登录后再操作"),setTimeout(function(){n.$router.push("/loginmima")},1e3))},setqr:function(){var t=this;setTimeout(function(){t.article.map(function(s,e,i){var n=s.aid,a=document.domain+"/essay?aid="+s.aid;t.qr(a,n)})},500)},qr:function(t,s){var e=document.getElementById(s);o.a.toCanvas(e,t,function(t){})},toessay:function(t){this.$router.push({path:"/essay",query:{aid:t}})},tolike:function(t,s,e,i){var n=this;this.isLogin||this.userInfo?this.$post("index/data/like",{aid:t,title:s,uid:e,username:i}).then(function(t){200===t.data.result?(n.$emit("islike",!0),n.$message({type:"success",message:t.data.msg})):n.$message({type:"warning",message:t.data.msg})}).catch(function(t){console.log(t)}):(this.$message("请登录后再评论"),setTimeout(function(){n.$router.push("/loginmima")},1e3))},toweibo:function(t,s){var e=this.$httpUrl+"/template/quater_10_qkl/src/logo.png",i="http://v.t.sina.com.cn/share/share.php?title="+t+"&url="+e+"&content=utf-8&sourceUrl="+e+"&pic="+(this.$httpUrl+"/template/quater_10_qkl/src/logo.png");window.open(i,"newwindow","height=600,width=800,top=100,left=100")}}},u={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"articles"},[i("ul",t._l(t.article,function(s,n){return i("li",{key:n,staticClass:"art-item"},[i("div",{staticClass:"title",on:{click:function(e){return t.toessay(s.aid)}}},[t._v(t._s(s.subject))]),t._v(" "),i("div",{staticClass:"art-box"},[i("div",{staticClass:"art-left"},[i("div",{staticClass:"info"},[t._v(t._s(s.commentnum)+"回答   "+t._s(s.favtimes)+"收藏")]),t._v(" "),i("div",{staticClass:"user",on:{click:function(e){return t.touser(s.uid)}}},[i("div",{staticClass:"head"},[i("img",{attrs:{src:s.head,alt:"用户头像"}})]),t._v(" "),i("div",{staticClass:"username"},[t._v(t._s(s.username))]),t._v("\n            "+t._s(s.label)+"\n            ")]),t._v(" "),i("div",{staticClass:"describe",domProps:{innerHTML:t._s(s.content)}})]),t._v(" "),s.pic?i("div",{staticClass:"art-right"},[i("img",{attrs:{src:s.pic,alt:""}})]):t._e()]),t._v(" "),i("div",{staticClass:"operate"},[1==s.islike?i("span",{staticClass:"exist"},[i("i",{staticClass:"iconfont icondianzan",staticStyle:{"margin-right":"5px"}}),t._v(t._s(s.likenum)+"赞")]):i("span",{staticClass:"praise",on:{click:function(e){return t.tolike(s.id,s.subject,s.uid,s.username)}}},[i("i",{staticClass:"iconfont icondianzan",staticStyle:{"margin-right":"5px"}}),t._v(t._s(s.likenum)+"赞")]),t._v(" "),i("span",{staticClass:"tread",on:{click:function(e){return t.torubbish(s.id,s.subject,s.uid,s.username)}}},[i("i",{staticClass:"iconfont iconyijin14-cai",staticStyle:{"margin-right":"5px"}}),t._v(" 踩")]),t._v(" "),i("span",{staticClass:"comment",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.toessay(s.aid)}}},[i("img",{attrs:{src:e("v3dy"),alt:""}}),t._v(t._s(s.commentnum)+"评价")]),t._v(" "),i("div",{staticClass:"share"},[t._m(0,!0),t._v(" "),i("div",{staticClass:"share-way"},[i("span",{staticClass:"weixin"},[i("img",{attrs:{src:e("B+Rd"),alt:""}}),t._v(" "),i("span",{staticClass:"qr-box"},[i("div",{staticClass:"qr"},[i("canvas",{attrs:{id:s.aid}})])])]),t._v(" "),i("span",{staticClass:"weibo",on:{click:function(e){return t.toweibo(s.title,s.aid)}}},[i("img",{attrs:{src:e("wvFO"),alt:""}})])])])])])}),0)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"share-word"},[s("img",{attrs:{src:e("4XEq"),alt:""}}),this._v("分享\n          ")])}]};var l=e("C7Lr")(c,u,!1,function(t){e("YirU")},"data-v-50ed6965",null).exports,d={name:"draft",props:{draft:Array},data:function(){return{}},mounted:function(){},methods:{touser:function(t){this.$router.push({name:"user",query:{otheruid:t}})},toessay:function(t){this.$router.push({path:"/essay",query:{aid:t}})},todelete:function(t,s,e,i){var n=this;this.$post("index/data/draft_edit",{aid:s,uid:e,content:i}).then(function(t){200==t.data.result?(n.$emit("delect","true"),n.$message.success(t.data.msg)):n.$message.warning(t.data.msg)}).catch(function(t){console.log(t)})}}},f={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"draft"},[i("ul",t._l(t.draft,function(s,n){return i("li",{key:n},[i("div",{staticClass:"title",on:{click:function(e){return t.toessay(s.aid)}}},[t._v(t._s(s.title))]),t._v(" "),i("div",{staticClass:"user",on:{click:function(e){return t.touser(s.uid)}}},[i("div",{staticClass:"img"},[i("img",{attrs:{src:s.head,alt:""}})]),t._v("\n        "+t._s(s.username)+"\n      ")]),t._v(" "),i("div",{staticClass:"word",domProps:{innerHTML:t._s(s.content)}}),t._v(" "),i("div",{staticClass:"opt"},[i("div",{staticClass:"continue",on:{click:function(e){return t.toessay(s.aid)}}},[i("img",{attrs:{src:e("xBBE"),alt:""}}),t._v("继续回答")]),t._v(" "),i("div",{staticClass:"time"},[t._v("保存于 "+t._s(t._f("dayFmt")(s.dateline)))])])])}),0)])},staticRenderFns:[]};var h=e("C7Lr")(d,f,!1,function(t){e("x7f5")},"data-v-7eccd833",null).exports,m={name:"fans",props:{users:Array},data:function(){return{userData:[]}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.userData=this.users.slice(),setTimeout(function(){t.userData.map(function(s,e,i){s.head=t.$httpUrl+"/uc_server/avatar.php?uid="+s.fuid+"&amp;size=big"})},500)},touser:function(t){this.$router.push({name:"user",query:{otheruid:t}})},toattention:function(t,s){var e=this;this.$post("index/data/attention_index",{uid:1}).then(function(t){1===e.userData[s].is_attention?e.userData[s].is_attention=0:e.userData[s].is_attention=1,e.userData=e.userData.slice(),200==t.data.result?e.$message.success(t.data.msg):e.$message.warning(t.data.msg)}).catch(function(t){console.log(t)})}}},v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"fans"},[e("ul",t._l(t.userData,function(s,i){return e("li",{key:i},[e("div",{staticClass:"left"},[e("div",{staticClass:"img",on:{click:function(e){return t.touser(s.uid)}}},[e("img",{attrs:{src:s.head,alt:""}})]),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"title",on:{click:function(e){return t.touser(s.uid)}}},[t._v(t._s(s.username||s.fusername))]),t._v(" "),e("div",{staticClass:"dec"},[t._v(t._s(s.bio))])])]),t._v(" "),e("div",{staticClass:"right"},[0==s.is_attention?e("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(e){return t.toattention(s.fuid,i)}}},[t._v("关注\n        ")]):e("el-button",{attrs:{size:"small"},on:{click:function(e){return t.toattention(s.fuid,i)}}},[t._v("已关注")])],1)])}),0)])},staticRenderFns:[]};var p=e("C7Lr")(m,v,!1,function(t){e("bxMG")},"data-v-39be2d38",null).exports,_={name:"collects",props:{collect:Array},data:function(){return{lists:[]}},mounted:function(){},methods:{toessay:function(t){this.$router.push({path:"/essay",query:{aid:t}})}}},g={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"collect"},t._l(t.collect,function(s,i){return e("div",{key:i,staticClass:"all-item",on:{click:function(e){return t.toessay(s.aid)}}},[e("div",{staticClass:"all-top"},[e("div",{staticClass:"all-left"},[e("div",{staticClass:"titlebar"},[e("div",{staticClass:"title"},[t._v("\n            "+t._s(s.title))])])]),t._v(" "),s.img?e("div",{staticClass:"all-img"},[e("img",{attrs:{src:s.head,alt:""}})]):t._e()]),t._v(" "),t._m(0,!0)])}),0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"all-bottom"},[s("div",{staticClass:"img"},[s("img",{attrs:{src:e("xBBE"),alt:""}})]),this._v("\n      回答\n    ")])}]};var C=e("C7Lr")(_,g,!1,function(t){e("fmSW")},"data-v-3fd62f6c",null).exports,y={name:"attention",data:function(){return{currentView:"collects",attUser:[],collect:[]}},components:{fans:p,collects:C},mounted:function(){this.getUser(),this.getCollect()},methods:{toactive:function(t){this.currentView=t},getUser:function(){var t=this,s=this.$route.query.otheruid;this.$post("index/data/attention",{uid:s}).then(function(s){t.attUser=s.data,t.attUser.map(function(s,e,i){s.head=t.$httpUrl+"/uc_server/avatar.php?uid="+s.fuid+"&amp;size=big"})}).catch(function(t){console.log(t)})},getCollect:function(){var t=this,s=this.$route.query.otheruid;this.$post("index/data/personal_collect",{uid:s}).then(function(s){t.collect=s.data.data}).catch(function(t){console.log(t)})}}},$={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"attention"},[e("div",{staticClass:"tab"},[e("ul",[e("li",{staticClass:"question",class:"collects"===t.currentView?"active":"",on:{click:function(s){return t.toactive("collects")}}},[t._v("关注问题")]),t._v(" "),e("li",{staticClass:"followee",class:"fans"===t.currentView?"active":"",on:{click:function(s){return t.toactive("fans")}}},[t._v("关注的人")])])]),t._v(" "),e("div",{staticClass:"contain"},[e(t.currentView,{tag:"component",attrs:{users:t.attUser,collect:t.collect}})],1)])},staticRenderFns:[]};var b=e("C7Lr")(y,$,!1,function(t){e("WMdR")},"data-v-7a2c7c90",null).exports,k={name:"inform",data:function(){return{}},props:{inform:Array},mounted:function(){},methods:{toessay:function(t){this.$router.push({path:"/essay",query:{aid:t}})}}},w={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"inform"},[e("ul",t._l(t.inform,function(s,i){return e("li",{key:i,staticClass:"info",on:{click:function(e){return t.toessay(s.aid)}}},[e("div",{staticClass:"title",domProps:{innerHTML:t._s(s.msg)}})])}),0)])},staticRenderFns:[]};var A=e("C7Lr")(k,w,!1,function(t){e("dqQd")},"data-v-2b4cb4a3",null).exports,x={name:"invite",data:function(){return{}},props:{invite:Array},mounted:function(){},methods:{toessay:function(t){this.$router.push({path:"/essay",query:{aid:t}})}}},q={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"invite"},[e("ul",t._l(t.invite,function(s,i){return e("li",{key:i,staticClass:"item",on:{click:function(e){return t.toessay(s.aid)}}},[e("div",{staticClass:"info"},[e("div",{staticClass:"tips",domProps:{innerHTML:t._s(s.msg)}})])])}),0)])},staticRenderFns:[]};var D=e("C7Lr")(x,q,!1,function(t){e("Y1OT")},"data-v-02d67c69",null).exports,I={name:"like",data:function(){return{}},props:{like:Array},mounted:function(){},methods:{toessay:function(t){this.$router.push({path:"/essay",query:{aid:t}})}}},E={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"like"},[e("ul",t._l(t.like,function(s,i){return e("li",{key:i,staticClass:"item",on:{click:function(e){return t.toessay(s.aid)}}},[e("div",{staticClass:"info"},[e("div",{staticClass:"tips"},[t._v(t._s(s.msg))])])])}),0)])},staticRenderFns:[]};var V=e("C7Lr")(I,E,!1,function(t){e("RAbb")},"data-v-bf7a900e",null).exports,R={name:"comment",data:function(){return{}},props:{comment:Array},mounted:function(){},methods:{toessay:function(t){this.$router.push({path:"/essay",query:{aid:t}})}}},U={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"comment"},[e("ul",t._l(t.comment,function(s,i){return e("li",{key:i,staticClass:"item",on:{click:function(e){return t.toessay(s.aid)}}},[e("div",{staticClass:"info"},[e("div",{staticClass:"tips"},[t._v(t._s(s.msg))])])])}),0)])},staticRenderFns:[]};var B=e("C7Lr")(R,U,!1,function(t){e("VS1s")},"data-v-1aba36ab",null).exports,L={name:"atten",props:{attention:Array},data:function(){return{}},mounted:function(){},methods:{toattention:function(t,s){var e=this;this.$post("index/data/attention_index",{uid:t}).then(function(t){1===e.userData[s].is_attention?e.userData[s].is_attention=0:e.userData[s].is_attention=1,e.userData=e.userData.slice(),200==t.data.result?e.$message.success(t.data.msg):e.$message.warning(t.data.msg)}).catch(function(t){console.log(t)})}}},M={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"fans"},[e("ul",t._l(t.attention,function(s,i){return e("li",{key:i},[e("div",{staticClass:"left"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:s.head,alt:""}})]),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"title"},[t._v(t._s(s.msg))])])])])}),0)])},staticRenderFns:[]};var Y=e("C7Lr")(L,M,!1,function(t){e("2nlY")},"data-v-80a131fe",null).exports,F={name:"message",data:function(){return{tablist:[{name:"inform",title:"通知"},{name:"invite",title:"邀请"},{name:"like",title:"点赞"},{name:"comment",title:"评论"},{name:"atten",title:"关注"}],active:"inform",currentView:"inform",informData:[],likedata:[],attentionData:[],commentData:[],inviteData:[]}},props:{command:String},components:{inform:A,invite:D,like:V,comment:B,atten:Y},watch:{$route:function(){var t=this.$route.query.message;t&&this.toactive(t)},command:function(t){this.active=t,this.currentView=t}},mounted:function(){this.active=this.command,this.currentView=this.command;var t=this.$route.query.message;this.toactive(t),this.getInform()},methods:{toactive:function(t){this.active=t;var s=this.$store.state.userInfo.uid;this.$router.push({path:"/user",query:{otheruid:s,type:"message",message:t}}),this.currentView=t},getInform:function(){var t=this,s=this.$store.state.userInfo.uid;this.$post("index/data/message",{uid:s}).then(function(s){t.informData=s.data,t.informData.map(function(s,e,i){1===s.type?t.likedata.push(s):3===s.type?t.commentData.push(s):5===s.type?t.attentionData.push(s):6===s.type&&t.inviteData.push(s)})}).catch(function(t){console.log(t)})}}},K={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"message"},[e("div",{staticClass:"tab"},[e("ul",t._l(t.tablist,function(s,i){return e("li",{key:i,class:t.active===s.name?"active":"",on:{click:function(e){return t.toactive(s.name)}}},[t._v(t._s(s.title)+"\n      ")])}),0)]),t._v(" "),e("div",{staticClass:"contain"},[e(t.currentView,{tag:"component",attrs:{invite:t.inviteData,inform:t.informData,attention:t.attentionData,like:t.likedata,comment:t.commentData}})],1)])},staticRenderFns:[]};var T={name:"user",components:{answ:l,doubt:a,draft:h,fans:p,attention:b,message:e("C7Lr")(F,K,!1,function(t){e("Xo06")},"data-v-5f315bd1",null).exports,collects:C,fansnumber:e("fjrQ").a},data:function(){return{uid:"",tablist:[],selected:"dynamic",userInfo:{},currentView:"answ",collect:[],doubt:[],draft:[],command:"inform",answers:[],fans:[],otheruid:"",other:!1}},watch:{otheruid:function(t){var s=this.$store.state.userInfo.uid;this.other=t!=s},$route:function(){this.init()}},create:function(){},mounted:function(){this.init(),this.getdata(),this.getnav()},methods:{init:function(){var t=this.$route.query.type;t&&this.toselect(t),this.$route.query.message},islike:function(t){1==t&&this.getAnswers()},isrubbish:function(t){1==t&&this.getAnswers()},successDel:function(t){"true"==t&&(this.getnav(),this.getdraft())},getuser:function(){var t=this;this.$post("index/data/member_info",{uid:this.otheruid}).then(function(s){t.userInfo=s.data,t.userInfo.head=t.$httpUrl+"/uc_server/avatar.php?uid="+t.userInfo.uid+"&amp;size=big"}).catch(function(t){console.log(t)})},getnav:function(){var t=this;setTimeout(function(){t.$post("index/data/card_nav",{uid:t.otheruid}).then(function(s){t.tablist=s.data}).catch(function(t){console.log(t)})},500)},toattention:function(t){var s=this;this.$post("index/data/attention_index",{uid:t}).then(function(t){200==t.data.result?(s.getuser(),s.$message.success(t.data.msg)):s.$message.warning(t.data.msg)}).catch(function(t){console.log(t)})},getdata:function(){var t=this;this.$route.query.otheruid?(this.otheruid=this.$route.query.otheruid,this.uid=this.otheruid):(this.uid=this.$store.state.userInfo.uid,this.otheruid=this.uid),setTimeout(function(){t.getuser(),t.getcollect(),t.getdoubt(),t.getdraft(),t.getAnswers(),t.getfans()},500)},getAnswers:function(){var t=this;this.$post("index/data/personal_answer",{uid:this.otheruid}).then(function(s){t.answers=s.data.data,t.answers.map(function(s,e,i){s.head=t.$httpUrl+"/uc_server/avatar.php?uid="+s.uid+"&amp;size=big"}),t.answers=t.answers.slice()}).catch(function(t){console.log(t)})},getcollect:function(){var t=this;this.$post("index/data/personal_collect",{uid:this.otheruid}).then(function(s){t.collect=s.data.data}).catch(function(t){console.log(t)})},getdoubt:function(){var t=this;this.$post("index/data/personal_question",{uid:this.otheruid}).then(function(s){t.doubt=s.data.data}).catch(function(t){console.log(t)})},getfans:function(){var t=this;this.$post("index/data/fuser",{uid:this.otheruid}).then(function(s){t.fans=s.data}).catch(function(t){console.log(t)})},getdraft:function(){var t=this;this.$post("index/data/personal_draft",{uid:this.otheruid}).then(function(s){t.draft=s.data.data,t.draft.map(function(s,e,i){s.head=t.$httpUrl+"/uc_server/avatar.php?uid="+s.uid+"&amp;size=big"}),t.draft.slice()}).catch(function(t){console.log(t)})},toselect:function(t){this.selected=t;var s=this.$route.query.otheruid,e=this.$route.query.message;switch(e?this.$router.push({path:"/user",query:{otheruid:s,type:t,message:e}}):this.$router.push({path:"/user",query:{otheruid:s,type:t}}),t){case"fans":this.currentView="fans";break;case"dynamic":case"answer":this.currentView="answ";break;case"doubt":this.currentView="doubt";break;case"attention":this.currentView="attention";break;case"draft":this.currentView="draft";break;case"message":this.currentView="message"}}}},N={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:t.$route.meta.title,expression:"$route.meta.title"}],staticClass:"user"},[e("div",{staticClass:"operation"},[e("div",{staticClass:"left"},[e("div",{staticClass:"tab-head"},[e("ul",t._l(t.tablist,function(s,i){return e("li",{key:i,class:t.selected==s.name?"selected":"",on:{click:function(e){return t.toselect(s.name)}}},[t._v(t._s(s.title)+" "),e("span",[t._v(t._s(s.num))])])}),0)]),t._v(" "),e(t.currentView,{tag:"component",attrs:{article:t.answers,users:t.fans,command:t.command,collect:t.collect,draft:t.draft,doubt:t.doubt},on:{islike:t.islike,isrubbish:t.isrubbish,"update:collect":function(s){t.collect=s},"update:draft":function(s){t.draft=s},"update:doubt":function(s){t.doubt=s},delect:t.successDel}}),t._v(" "),e("div",{staticClass:"empty"},[t._v("\n        没有更多数据了\n      ")])],1),t._v(" "),e("div",{staticClass:"right"},[e("div",{staticClass:"userinfo"},[e("div",{staticClass:"header"},[e("img",{attrs:{src:t.userInfo.head,alt:""}})]),t._v(" "),e("div",{staticClass:"name"},[t._v(t._s(t.userInfo.username))]),t._v(" "),e("div",{staticClass:"dec"},[t._v(t._s(t.userInfo.bio))]),t._v(" "),t.other?e("div",{staticClass:"edit"},[1==t.userInfo.is_attention?e("el-button",{on:{click:function(s){return t.toattention(t.otheruid)}}},[t._v("取消关注")]):e("el-button",{attrs:{type:"danger"},on:{click:function(s){return t.toattention(t.otheruid)}}},[t._v("关注")])],1):e("div",{staticClass:"edit"},[e("el-button",{staticClass:"editbtn",attrs:{type:"primary"},on:{click:function(s){return t.$router.push("editUser")}}},[t._v("编辑个人资料")])],1)]),t._v(" "),e("keep-alive",[e("fansnumber",{attrs:{otheruid:t.otheruid}})],1)],1)])])},staticRenderFns:[]};var z=e("C7Lr")(T,N,!1,function(t){e("iVWq")},"data-v-043bc824",null);s.default=z.exports},x7f5:function(t,s){}});
//# sourceMappingURL=0.d774b1e86366d85e4b84.js.map
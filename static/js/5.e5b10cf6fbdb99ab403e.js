webpackJsonp([5],{"8Eay":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"loginmima",data:function(){return{phone:"",password:""}},mounted:function(){},methods:{tologin:function(){var e=this;if(this.phone)if(/^(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/.test(this.phone)){if(""===this.password)return this.$message("请填写账号密码"),!1;this.$post("index/data/login",{phone:this.phone,password:this.password}).then(function(t){if(200===t.data.result){e.$message({message:"登录成功",type:"success"});var s=t.data.user;s.head=e.$httpUrl+"/uc_server/avatar.php?uid="+s.uid+"&amp;size=big",e.$store.commit("setLogin",s),setTimeout(function(){e.$route.query.redirect?e.$router.push(e.$route.query.redirect):e.$router.push("/")},1e3)}else e.$message.error(t.data.msg)})}else this.$message("请填写有效的手机号！");else this.$message("请输入手机号码")}}},i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:e.$route.meta.title,expression:"$route.meta.title"}],staticClass:"loginmima"},[s("div",{staticClass:"login-box"},[s("div",{staticClass:"box"},[s("div",{staticClass:"title"},[e._v("登录")]),e._v(" "),s("div",{staticClass:"form"},[s("div",{staticClass:"faster"}),e._v(" "),s("el-input",{attrs:{placeholder:"手机号"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),e._v(" "),s("el-input",{staticClass:"password",attrs:{placeholder:"密码","show-password":""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.tologin(t)}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),e._m(0),e._v(" "),s("el-button",{staticClass:"login",attrs:{type:"primary"},on:{click:e.tologin}},[e._v("登录")]),e._v(" "),s("router-link",{staticClass:"register",attrs:{to:"register"}},[e._v("注册")])],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"forget"},[t("div",{staticClass:"agree"},[this._v("登录即表示你同意 用户协议 和 隐私条款")])])}]};var r=s("C7Lr")(a,i,!1,function(e){s("xW/B")},"data-v-7f5d9f03",null);t.default=r.exports},"xW/B":function(e,t){}});
//# sourceMappingURL=5.e5b10cf6fbdb99ab403e.js.map
webpackJsonp([1],{"2ZEU":function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s=t("mvHQ"),o=t.n(s),a=t("zL8q"),n={data:function(){return{ruleForm:{username:"",password:""},rules:{username:[{validator:function(e,r,t){if(!r)return t(new Error("用户名不能为空"));t()},trigger:"blur"}],password:[{validator:function(e,r,t){if(!r)return t(new Error("密码不能为空"));t()},trigger:"blur"}]}}},methods:{submit:function(e){var r=this;this.$refs[e].validate(function(e){e&&r.$http({url:"http://127.0.0.1:8100/user/login",method:"POST",body:o()({username:r.ruleForm.username,password:r.ruleForm.password}),headers:{"Content-Type":"application/json"},withCredentials:!0}).then(function(e){0===e.data.code?(a.Message.success("登陆成功"),this.$router.push({name:"list"})):a.Message.warning(e.data.msg)})})},redirect:function(){this.$router.push({name:"register"})}}},u={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticStyle:{width:"50%","margin-left":"25%"}},[t("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules}},[t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{ref:"username",attrs:{type:"text",placeholder:"用户名","auto-complete":"off"},model:{value:e.ruleForm.username,callback:function(r){e.$set(e.ruleForm,"username",r)},expression:"ruleForm.username"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{ref:"password",attrs:{type:"password",placeholder:"密码","auto-complete":"off"},model:{value:e.ruleForm.password,callback:function(r){e.$set(e.ruleForm,"password",r)},expression:"ruleForm.password"}})],1),e._v(" "),t("el-button",{on:{click:e.redirect}},[e._v("注册")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submit("ruleForm")}}},[e._v("登录")])],1)],1)},staticRenderFns:[]},l=t("VU/8")(n,u,!1,null,null,null);r.default=l.exports}});
//# sourceMappingURL=1.6c4f80cb38ee86e5da74.js.map
<template>
    <div class="login-content">
        <div>
            <p class="login-header">
               <img src="../../assets/image/KFlogo.png"><span>商家中心</span>
            </p>
           <div class="login-main" :class="forgetAccount?'forget':''">
             <!--登陆部分-->
             <div class="content-main" v-if="!showRegisterFrom&&!forgetAccount&&!firstLogin">
               <div class="login-choose">
                 <a href="javascript:;" :class="accountLogin?'active':''" @click="showAccountLogin()">账号密码登陆</a><a href="javascript:;" :class="telLogin?'active':''" @click="showTelLogin()">手机验证登陆</a>
               </div>
               <!--账号密码登陆-->
               <div class="form-content" v-if="accountLogin">
                 <Form ref="formInline" :model="formInline"  inline  class="from">
                   <div class="tip-content" v-if="errorTip">
                     <i class="tip-icon"></i>
                     <input class="tip" readonly value="请输入账号和密码" v-model="tip"/>
                   </div>
                   <FormItem prop="user">
                     <div class="ivu-input-wrapper ivu-input-type">
                       <i class="user-icon"></i>
                       <input autocomplete="off" type="text" v-model="user" placeholder="账号" class="ivu-input" @blur="checkUserValue()" @focus="handleFocusUser">
                       <i class="user-clear" v-show="userClear"></i>
                     </div>
                   </FormItem>
                   <FormItem prop="password">
                     <div class="ivu-input-wrapper ivu-input-type">
                       <i class="password-icon"></i>
                       <input ref="passW" :readonly='false' autocomplete="off" v-model="password" type="password" placeholder="密码" class="ivu-input" @blur="checkPasswordValue()" @focus="handleFocusPassword">
                       <i class="password-clear" v-show="passwordClear"></i>
                     </div>
                   </FormItem>
                   <FormItem>
                     <Button type="primary" @click="handleSubmit('formInline')" >登录</Button>
                   </FormItem>
                 </Form>
               </div>
               <!--手机号登陆-->
               <div class="form-content" v-if="telLogin">
                 <Form ref="formInline" :model="formInline"  inline  class="from">
                   <div class="tip-content" v-if="errorTip">
                     <i class="tip-icon"></i>
                     <input class="tip" readonly value="请输入已绑定的手机号" v-model="tip"/>
                   </div>
                   <FormItem prop="tel">
                     <div class="ivu-input-wrapper ivu-input-type">
                       <i class="tel-icon"></i>
                       <input autocomplete="off" type="text" v-model="tel" placeholder="手机号" class="ivu-input tel-input" @blur="checkTelValue()" @focus="handleFocusTel()">
                       <i class="tel-clear" v-show="telClear"></i>
                     </div>
                   </FormItem>
                   <FormItem prop="code">
                     <div class="ivu-input-wrapper ivu-input-type">
                       <input placeholder="验证码" class="code-input" >
                       <i class="code-clear"></i>
                       <button class="sendSmsBtn" :class="disabled?'dissendSmsBtn':''" type="button" @click="start" :disabled="disabled ||time > 0">{{ text }}</button>
                     </div>
                   </FormItem>
                   <FormItem>
                     <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
                   </FormItem>
                 </Form>
               </div>
               <div class="login-footer">
                 <a href="javascript:;" @click="showRegister()">注册账号，免费入驻</a>
                 <a href="javascript:;" @click="showForgetAccount()">忘记账号</a>
               </div>
             </div>
             <!--注册部分-->
             <div class="content-main" :class="showRegisterFrom&&!forgetAccount?'bot':''" v-if="showRegisterFrom&&!forgetAccount">
               <p class="register-title">注册</p>
                <div class="from-content">
                  <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                    <FormItem prop="user">
                      <div class="ivu-input-wrapper ivu-input-type">
                        <i class="user-icon"></i>
                        <input autocomplete="off" type="text" v-model="user" placeholder="账号" class="ivu-input" @blur="checkUserValue()" @focus="handleFocusUser">
                        <i class="user-clear" v-show="userClear"></i>
                      </div>
                    </FormItem>
                    <FormItem prop="password">
                      <div class="ivu-input-wrapper ivu-input-type">
                        <i class="password-icon"></i>
                        <input ref="passW" :readonly='false' autocomplete="off" v-model="password" type="password" placeholder="密码" class="ivu-input" @blur="checkPasswordValue()" @focus="handleFocusPassword">
                        <i class="password-clear" v-show="passwordClear"></i>
                      </div>
                    </FormItem>
                    <FormItem prop="confirm-password">
                      <div class="ivu-input-wrapper ivu-input-type">
                        <i class="password-icon"></i>
                        <input autocomplete="off" v-model="cPassword" type="password" placeholder="再次填写上面的密码" class="ivu-input" @blur="checkConfirmPasswordValue()" @focus="handleFocusConfirmPassword()">
                        <i class="password-clear" v-show="cPasswordClear"></i>
                      </div>
                    </FormItem>
                    <FormItem prop="location">
                      <div class="ivu-input-wrapper ivu-input-type">
                        <i class="location-icon"></i>
                        <input  :readonly='true' autocomplete="off" type="text" value="+86(中国)"  class="ivu-input">
                      </div>
                    </FormItem>
                    <FormItem prop="tel">
                      <div class="ivu-input-wrapper ivu-input-type">
                        <i class="tel-icon"></i>
                        <input autocomplete="off" type="text" v-model="tel" placeholder="账号使用者手机" class="ivu-input" @blur="checkTelValue()" @focus="handleFocusTel()">
                        <i class="tel-clear" v-show="telClear"></i>
                      </div>
                    </FormItem>
                    <FormItem prop="code">
                      <div class="ivu-input-wrapper ivu-input-type">
                        <input placeholder="验证码" class="code-input" >
                        <i class="code-clear"></i>
                        <button class="sendSmsBtn" :class="disabled?'dissendSmsBtn':''" type="button" @click="start" :disabled="disabled ||time > 0">{{ text }}</button>
                      </div>
                    </FormItem>
                    <FormItem>
                      <Button type="primary" @click="handleSubmit('formInline')">注册</Button>
                    </FormItem>
                  </Form>
                </div>
             </div >
             <!--忘记账号部分-->
             <div class="content-main" :class="forgetAccount?'bor':''" v-if="forgetAccount">
               <ul class="reset-steps" v-if="!stepComplete">
                 <li class="active">1</li>
                 <li :class="stepTel || stepReset?'active':''"></li>
                 <li :class="stepTel || stepReset?'active':''">2</li>
                 <li :class="stepReset?'active':''"></li>
                 <li :class="stepReset?'active':''">3</li>
                 <li></li>
                 <li>4</li>
               </ul>
               <ul class="reset-process" v-if="!stepComplete">
                 <li>1.输入账号</li>
                 <li>2.验证手机号</li>
                 <li>3.重设密码</li>
                 <li>4.完成</li>
               </ul>
               <!--第一步-->
               <div class="step-account" v-if="stepAccount">
                 <Form>
                   <div class="ivu-form-item">
                     <label class="ivu-form-item-label">账号</label>
                     <div class="ivu-form-item-content">
                       <div class="ivu-input-wrapper ivu-input-type ivu-input-wrapper-repeat">
                         <input autocomplete="off" type="text" placeholder="账号" class="ivu-input ivu-input-repeat">
                       </div>
                     </div>
                   </div>
                   <div class="ivu-form-item">
                     <label class="ivu-form-item-label">验证码</label>
                     <div class="ivu-form-item-content">
                       <div class="ivu-input-wrapper ivu-input-type ivu-input-wrapper-repeat">
                         <input autocomplete="off" type="text" placeholder="验证码" class="ivu-input ivu-input-repeat ivu-input-w">
                         <img src="../../assets/image/login_yanzhengma.png">
                       </div>
                     </div>
                   </div>
                   <FormItem>
                     <Button type="primary" class="but-w" @click="nextTel()">下一步</Button>
                   </FormItem>
                 </Form>
               </div>
               <!--第二步-->
               <div class="step-tel" v-if="stepTel">
                 <p>我们已向您的手机188****3322发送了短信验证码，请在下方输入</p>
                  <Form>
                     <div class="ivu-form-item">
                       <label class="ivu-form-item-label">短信验证码</label>
                       <div class="ivu-form-item-content">
                         <div class="ivu-input-wrapper ivu-input-type ivu-input-wrapper-repeat">
                           <input placeholder="6位短信验证码" class="code-input" >
                           <i class="code-clear code-clear-s"></i>
                           <button class="sendSmsBtn" :class="disabled?'dissendSmsBtn':''" type="button" @click="start" :disabled="disabled ||time > 0">{{ text }}</button>
                         </div>
                       </div>
                     </div>
                    <FormItem>
                      <Button type="primary" class="but-w" @click="nextReset()">下一步</Button>
                    </FormItem>
                  </Form>
               </div>
               <!--第三步-->
               <div class="step-reset" v-if="stepReset">
                 <Form>
                   <div class="ivu-form-item">
                     <label class="ivu-form-item-label">新密码</label>
                     <div class="ivu-form-item-content">
                       <div class="ivu-input-wrapper ivu-input-type ivu-input-wrapper-repeat">
                         <input autocomplete="off" type="text" placeholder="6-12位，必须包含数字和字母" class="ivu-input ivu-input-repeat">
                       </div>
                     </div>
                   </div>
                   <div class="ivu-form-item">
                     <label class="ivu-form-item-label">确认密码</label>
                     <div class="ivu-form-item-content">
                       <div class="ivu-input-wrapper ivu-input-type ivu-input-wrapper-repeat">
                         <input autocomplete="off" type="text" placeholder="再次填写上面的密码" class="ivu-input ivu-input-repeat">
                       </div>
                     </div>
                   </div>
                   <FormItem>
                     <Button type="primary" class="but-w" @click="nextComplete()">下一步</Button>
                   </FormItem>
                 </Form>
               </div>
               <!--第四步-->
               <div class="step-complete" v-if="stepComplete">
                 <img src="../../assets/image/set_succeed_icon.png">
                 <span>重设密码成功</span>
                 <a href="javascript:;" @click="loginCheck()">去登陆 >></a>
               </div>
             </div>
             <!--新设备首次登陆部分-->
             <div class="content-main" v-if="firstLogin">
               <p class="first-title">首次登陆新设备验证</p>
               <div class="first-login-instruction">
                 <p>
                   您正在尝试在一台新的设备上登录，为了保证您的账号和密码安全，避免非相关人员使用该账号
                   密码登录，需要验证该账号联系人手机，以便确认您使用该账号获得了账号联系人的授权。</p>
               </div>
               <div class="first-login-information">
                 <p>账号 : <span>wmlxgd5124</span></p>
                 <p>联系人 : <span>wmlxgd5124</span></p>
                 <p>绑定手机号 : <span>18801564236</span><button class="sendSmsBtnF" :class="disabled?'dissendSmsBtnF':''" type="button" @click="start" :disabled="disabled ||time > 0">{{ text }}</button></p>
                 <input class="dynamic-code" type="text" placeholder="动态码"/>
               </div>
               <Button type="primary" class="first-validation">立即验证</Button>
             </div>
           </div>
           <div class="login-bottom">
             <p>Copyright@2011-2015dianyinbao.net All Rights Reserved</p>
             <p>协购(上海)电子商务有限公司版权所有    沪ICP备16007970号-1-2</p>
             <p>为了更好地使用效果请使用Chrome浏览器</p>
           </div>
        </div>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            { required: true, message: '请填写用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请填写密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
          ]
        },
        errorTip:false,//是否出现错误提示
        userClear:false,//是否清除用户名
        passwordClear:false,//是否清除用户名
        tip:'',//错误提示框内容
        user:'',//账号值
        password:'',//密码值
        accountLogin:true,//是否使用账号密码登陆
        telLogin:false,//是否使用手机号登陆
        telClear:false,//是否清除手机号
        tel:'',//手机号值
        time: 0,
        disabled:false,//获取倒计时按钮是否可用
        second:60,//默认倒计时
        showRegisterFrom:false,//是否显示注册框
        cPassword:'',//确认密码值
        cPasswordClear:false,//是否清除确认密码
        forgetAccount:false,//是否忘记密码
        stepAccount:true,// 输入账号验证
        stepTel:false,//输入手机号验证码验证
        stepReset:false,//输入重置密码
        stepComplete:false,//完成找回账号
        firstLogin:false,// 设备第一次登陆时出现
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$router.push({'path':'/home'});
//            this.$Message.success('提交成功!');
          } else {
            this.$Message.error('表单验证失败!');
          }
        });
      },
//      账号输入框失去焦点时
      checkUserValue(){
        if(this.user==''){
          this.errorTip=true;
          this.tip="账号不能为空";
          this.userClear=false;
//          console.log(this.$refs);
          this.$refs.passW.readonly=true;
          console.log(this.$refs.passW);
          console.log(this.$refs.passW.readonly);
        }
        else{
          this.errorTip=false;
          this.tip='';
        }
      },
//      密码输入框失去焦点时
      checkPasswordValue(){
        if(this.password==''){
          this.errorTip=true;
          this.tip="密码不能为空";
          this.passwordClear=false;
        }
        else{
          this.errorTip=false;
          this.tip='';
        }
      },
//      手机号输入框失去焦点时
      checkTelValue(){
        if(this.tel==''){
          this.errorTip=true;
          this.tip="请输入已绑定手机号";
          this.telClear=false;
        }
        else{
          this.errorTip=false;
          this.tip='';
        }
      },
//      确认密码输入框失去焦点时
      checkConfirmPasswordValue(){
        if(this.cPassword==''){
          this.cPasswordClear=false;
        }
      },
//      账号输入框获取焦点时
      handleFocusUser() {
          this.userClear=true;
      },
//      密码输入框获取焦点时
      handleFocusPassword() {
          this.passwordClear=true;
      },
//      手机号输入框获取焦点时
      handleFocusTel(){
        this.telClear=true;
      },
//      确认密码输入框获取焦点时
      handleFocusConfirmPassword(){
        this.cPasswordClear=true;
      },
//       显示账号密码登陆
      showAccountLogin(){
        this.accountLogin=true;
        this.telLogin=false;
      },
//      显示手机号登陆
      showTelLogin(){
        this.accountLogin=false;
        this.telLogin=true;
//        this.$router.go(-1);
      },
//      显示注册框
      showRegister(){
        this.showRegisterFrom=true;
      },
//      跳转到找回账号第二步
      nextTel(){
        this.stepAccount=false;
        this.stepTel=true;
      },
//      跳转到找回账号第三步
      nextReset(){
        this.stepTel=false;
        this.stepReset=true;
      },
//      跳转到完成找回账号
      nextComplete(){
        this.stepReset=false;
        this.stepComplete=true;
      },
//第四步去登陆跳转
      loginCheck(){
        this.firstLogin=true;
        this.forgetAccount=false;
      },
//      显示忘记密码
      showForgetAccount(){
        this.forgetAccount=true;
      },
//      验证码倒计时
      start(){
        this.time = this.second;
        this.timer();
        this.disabled=true;
      },
      timer() {
        if (this.time > 0) {
          this.time--;
          setTimeout(this.timer, 1000);
        }else{
          this.disabled = false;
        }
      }
    },
    computed: {
      text: function () {
        return this.time > 0 ? this.time + 's 后重获取' : '获取验证码';
      }
    }
  }
</script>
<style  lang="scss">
  .login-content{
    .ivu-form-inline .ivu-form-item {
      display: block;
      vertical-align: top;
    }
    .form-content{
      padding-top: 6px;
    }
    .ivu-input {
      display: block;
      height:40px ;
      border-radius: 0;
      padding-left: 41px;
      padding-right: 26px;
      @include sc(14px,#333);
      border:1px solid #ccc;
    }
    .ivu-input:focus{
      box-shadow:none;
    }
    .tel-input{
      padding-left: 34px !important;
    }
    .code-input{
      @include wh(164px,40px);
      /*height:40px;*/
      padding-left: 12px;
      border:1px solid #ccc;
      @include sc(14px,#333);
    }
    .code-input::placeholder{
      @include sc(14px,#a9a9a9);
    }
    .tip-content{
      position: relative;
      .tip{
        @include wh(340px,40px);
        @include sc(14px,#666);
        margin:12px 30px 0 30px;
        background-color: rgba(255, 246, 236, 1);
        border: solid 1px rgba(255, 200, 178, 1);
        line-height: 40px;
        padding-left: 41px;
      }
      .tip-icon{
        @include pos(absolute,26px,0,0,42px,auto);
        @include icon(inline-block,12px,12px);
        @include bis(url('../../assets/image/login_mistake.png'),no-repeat,12px,12px);
      }
    }
    .ivu-form-inline .ivu-form-item {
      margin-right: 30px;
    }
    .user-icon{
      @include icon(inline-block,17px,16px);
      @include bis(url('../../assets/image/login_user name_icon.png'),no-repeat,17px,16px);
      @include pos(absolute,11px,0,0,12px,1);
    }
    .password-icon{
      @include icon(inline-block,13px,16px);
      @include bis(url('../../assets/image/login_password_icon.png'),no-repeat,13px,16px);
      @include pos(absolute,11px,0,0,12px,1);
    }
    .user-clear,.password-clear,.tel-clear{
      @include icon(inline-block,12px,12px);
      @include bis(url('../../assets/image/login_clear.png'),no-repeat,12px,12px);
      @include pos(absolute,14px,14px,auto,auto,1);
    }
    .code-clear{
      @include icon(inline-block,12px,12px);
      @include bis(url('../../assets/image/login_clear.png'),no-repeat,12px,12px);
      @include pos(absolute,14px,auto,auto,137px,1);
    }
    .code-clear-s{
      left:127px;
    }
    .tel-icon{
      @include icon(inline-block,10px,16px);
      @include bis(url('../../assets/image/login_phone nomber_icon.png'),no-repeat,10px,16px);
      @include pos(absolute,11px,0,0,12px,1);
    }
    .location-icon{
      @include icon(inline-block,14px,18px);
      @include bis(url('../../assets/image/login_adress_icon.png'),no-repeat,14px,18px);
      @include pos(absolute,11px,0,0,12px,1);
    }
    .ivu-form-item{
      margin: 12px 30px;
    }
    .ivu-input-wrapper {
      display: block;
      @include  wh(340px,40px);
    }
    .login-header{
      height:80px;
      >img{
        display: inline-block;
        vertical-align: top;
        margin-left: 20%;
        @include wh(92px,43px);
        margin-top: 14px;
      }
      >span{
        @include sc(24px,#0086ff);
        line-height: 80px;
        margin-left: 16px;
      }
    }
    .login-main{
      @include wh(100%,calc((100vh - 80px)/3.6*2.6));
      min-width: 700px !important;
      background: url('../../assets/image/login_bg .png') no-repeat center;
      background-size: cover;
      text-align: center;
      &.forget{
        background: url('../../assets/image/login_forget_bg.png') no-repeat center;
        background-size: cover;
      }
      &:before {
        content: '';
        display: inline-block;
        height: 100%;
        vertical-align: middle;
      }
      .content-main{
        display: inline-block;
        vertical-align: middle;
        margin: auto;
        background: #fff;
        text-align: left;
        box-shadow:0 0 32px rgba(0,128,255,.2);
        border-radius: 4px;
        &.bor{
          border-radius: 0 0 4px 4px;
        }
        &.bot{
          padding-bottom: 53px;
        }
        .login-choose{
          /*text-align: center;*/
          margin-top: 22px;
          padding-bottom: 22px;
          border-bottom: 1px solid #e3e3e3;
          >a{
            display: inline-block;
            width:50%;
            @include sc(18px,#666);
            line-height: 16px;
            &.active{
              color:#0086ff;
            }
            &:nth-child(1){
              border-right: 1px solid #e3e3e3;
              text-align: right;
              padding-right: 30px;
              box-sizing: border-box;
            }
            &:nth-child(2){
              padding-left: 30px;
            }
          }
        }
        .login-footer{
          padding: 6px 30px 43px 30px;
          >a{
            color:#0086ff;
            &:nth-child(2){
              float: right;
            }
            &:hover{
              text-decoration: underline;
            }
          }
        }
      }
    }
    .login-bottom{
      >p{
        text-align: center;
        @include sc(12px,#acacac);
        line-height: 12px;
        &:nth-child(1){
          margin-top: 30px;
        }
        &:nth-child(2){
          margin: 8px auto;
        }
      }
    }
    .ivu-input::-webkit-input-placeholder{
      @include sc(14px,#999);
    }
    .ivu-btn {
      padding: 8.5px 155px;
      font-size: 14px;
      border-radius: 0;
    }
    .sendSmsBtn{
      float: right;
      line-height: 40px;
      background: #e5e5e5;
      border: 1px solid #d9d9d9;
      display: inline-block;
      @include sc(14px,#666);
      @include wh(164px,40px);
      &.dissendSmsBtn{
        /*background: #d9d9d9;*/
        color:#a9a9a9;
      }
    }
    .sendSmsBtnF{
      /*float: right;*/
      line-height: 22px;
      background: #fff;
      border: 1px solid #0086ff;
      display: inline-block;
      border-radius: 2px;
      @include sc(12px,#0086ff);
      @include wh(72px,22px);
      margin-left: 12px;
      &.dissendSmsBtn{
        color:#0086ff;
        opacity: 0.8;
        width:77px !important;
      }
    }
    .register-title{
      @include wh(100%,50px);
      line-height: 50px;
      @include sc(18px,#0086ff);
      text-align: center;
      border-bottom: 1px solid #e3e3e3;
    }
    .reset-steps{
      display: block;
      height:38px;
      padding: 60px 0 30px 0;
      margin: 0 100px;
      >li{
        float: left;
        &:nth-child(odd){
          @include wh(38px,38px);
          line-height: 38px;
          background-color: #f4f4f4;
          border:1px solid #dbdbdb;
          box-sizing: border-box;
          &.active{
            background-image: linear-gradient(-90deg,
              rgba(0, 137, 255, 1) 0%,
              rgba(0, 128, 255, 1) 100%),
            linear-gradient(
                rgba(255, 255, 255, 1),
                rgba(255, 255, 255, 1));
            background-blend-mode: normal,
            normal;
            @include sc(18px,#fff);
            border:none;
          }
          @include sc(18px,#a9a9a9);
          border-radius: 50%;
          text-align: center;
        }
        &:nth-child(even){
          @include wh(110px,1px);
          background: #dbdbdb;
          margin-top: 18.5px;
          &.active{
            background: #0086ff;
          }
        }
      }
    }
    .reset-process{
      clear: both;
      display: block;
      height:12px;
      margin-top: 35px;
      >li{
        float:left;
        @include sc(12px,#666);
        &:nth-child(1){
          margin-left: 88px;
        }
        &:nth-child(2),&:nth-child(3){
          margin-left: 85px;
        }
        &:nth-child(4){
          margin-left: 100px;
        }
      }
    }
    .step-account, .step-tel,.step-reset{
      width:682px;
      box-sizing: border-box;
      text-align: right;
      .ivu-form-item{
        margin: 0 0 24px 0;
      }
    }
    .step-account{
      padding-right: 151px;
      margin-top: 53px;
    }
    .step-tel{
      padding-right: 175px;
      margin-top: 64px;
      .ivu-input-wrapper{
        width:315px;
      }
      >p{
        width:315px;
        display: inline-block;
        @include sc(14px,#666);
        text-align: left;
        margin-bottom: 12px;
      }
      .code-input{
        width:150px;
      }
      .sendSmsBtn{
        width:150px;
        margin-left: 15px;
      }
      .but-w{
        margin: 0 174px 46px auto;
      }
    }
    .step-reset{
      padding-right: 144px;
      margin-top: 53px;
    }
    .step-complete{
      padding: 133px 146px 133px 196px;
      >img{
        @include wh(54px,54px);
      }
      >span{
        display: inline-block;
        vertical-align: top;
        line-height: 24px;
        @include sc(24px,#34cd64);
        margin: 15px 29px 0 25px;
      }
      >a{
        display: inline-block;
        vertical-align: top;
        line-height: 18px;
        @include sc(18px,#0086ff);
        margin-top: 18px;
      }
    }
    .ivu-input-wrapper-repeat{
      display: inline-block;
      >img{
        position: absolute;
        top:0;
        right:0;
      }
    }
    .ivu-input-repeat{
      padding-left: 12px;
    }
    .ivu-form-item .ivu-form-item-label{
      @include sc(14px,#666);
      width:190px;
      padding: 13px 12px 13px 0;
      text-align: right;
    }
    .ivu-input-w{
      width:249px;
    }
    .but-w{
      width:141px;
      text-align: center;
      padding: 8.5px 0;
      border-radius:2px;
      margin: -3px 199px 46px auto;
    }
    .first-title{
      @include sc(14px,#666);
      margin: 15px auto 15px 20px;
    }
    .first-login-instruction{
      background-color: rgba(255, 255, 0, 0.1);
      padding: 14px 21px 21px 20px;
      >p{
        @include sc(14px,#666);
        line-height: 20px;
        width:589px;
      }
    }
    .first-login-information{
      text-align: center;
      padding-top: 20px;
      >p{
        @include sc(14px,#333);
        &:nth-child(2){
          margin: 10px auto 6px auto;
        }
      }
      border-bottom:1px solid #e3e3e3;
    }
    .dynamic-code{
      line-height: 34px;
      @include wh(270px,34px);
      border:1px solid #d2d2d2;
      margin: 14px auto 34px auto;
      padding-left: 8px;
    }
    .dynamic-code::placeholder{
      @include sc(14px,#a9a9a9);
    }
    .first-validation{
      display:block;
      border-radius: 2px;
      padding: 5.5px 16px;
      margin: 12px auto;
    }
  }
</style>

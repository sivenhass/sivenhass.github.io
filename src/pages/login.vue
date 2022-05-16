<template>
  <div class="login">
    <div class="header"></div>
    <div class="content login-content">
      <div class="login-content_box">
        <div class="login-li login-username">
          <input v-model="userName" class="login-input" type="text" placeholder="请输入用户名" @focus="change">
        </div>
        <div class="login-li login-password">
          <input v-model="password" class="login-input" type="password" placeholder="请输入密码" @focus="change">
          <span class="login-tip">{{loginTip}}</span>
        </div>
        <div class="login-li login-btn" @click="login">
          <span v-show="!loadingVisible">登录</span>
          <loading v-show="loadingVisible"></loading>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Loading from '../components/Loading.vue';
  export default {
    components: {
      Loading
    },
    data() {
      return {
        userName: '',
        password: '',
        loginTip: '',
        loadingVisible: false
      }
    },
    methods: {
      change() {
        this.loginTip = '';
      },
      login() {
        this.loginTip = '';
        this.loadingVisible = true;
        setTimeout(() => {
          if(this.userName === 'admin' && this.password === '123456') {
            //登录成功，跳转到index页
            this.$router.push('/index');
          } else {
            this.loadingVisible = false;
            this.loginTip = '用户名或密码错误！';
          }
          
        }, 2000)
        
      }
    }
  }
</script>
<style scoped>
.login {
  height: 100%;
}
.login-content {
  align-items: center;
}
.login-content_box {
  width: 596px;
  height: 360px;
  padding-top: 30px;
  background-image: url(../assets/img/bg_login.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login-li {
  height: 50px;
  width: 350px;
  line-height: 50px;
  margin-top: 30px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  box-sizing: border-box;
  position: relative;
}
.login-input {
  width: 300px;
  font-size: 16px;
  color: #6A7A98;
  background-color: transparent;
  border: none;
  outline: none;
  appearance: none;
}
.login-li input:-internal-autofill-selected {
  transition-delay: 99999s;
  transition: color 99999s ease-out,  background-color 99999s ease-out;
}
.login-username {
  padding-left: 50px;
  background-image: url('../assets/img/bg_login_username.png');
}
.login-password {
  padding-left: 50px;
  background-image: url('../assets/img/bg_login_password.png');
}
.login-btn {
  font-size: 18px;
  background-image: url('../assets/img/bg_login_input.png');
  cursor: pointer;
}
.login-tip {
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  color: #e38b8b;
  position: absolute;
  bottom: -30px;
  left: 0;
}
</style>
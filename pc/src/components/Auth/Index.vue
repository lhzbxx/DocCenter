<template>
  <div id="login">
    <div id="login-logo">
      <img src="../../assets/img/login/icon.png">
      <h4>Welcome to <small>DocCenter App</small></h4>
    </div>
    <div id="login-form">
      <Log-In v-show="check(1)"></Log-In>
      <Sign-Up v-show="check(2)"></Sign-Up>
      <Forget-Password v-show="check(3)"></Forget-Password>
    </div>
  </div>
</template>
<script>
  import LogIn from './LogIn.vue'
  import SignUp from './SignUp.vue'
  import ForgetPassword from './ForgetPassword.vue'
  export default {
    components: {
      LogIn,
      SignUp,
      ForgetPassword
    },
    data () {
      return {
        state: 1
      }
    },
    methods: {
      check: function (state) {
        return this.state === state
      }
    },
    events: {
      'state': function (state) {
        this.state = state
      }
    }
  }
</script>
<style>
  body {
    background-color: #1abc9c;
  }
  #login-logo img {
    width: 150px;
  }
  #login {
    text-align: center;
    position: absolute;
    height: 487px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  #login-form {
    position: absolute;
    width: 317px;
    padding: 20px;
    background-color: #edeff1;
    border-radius: 6px;
    left: 0;
    right: 0;
    margin: auto;
  }
  #login-form:before {
    content: "";
    border: 12px solid;
    border-color: transparent transparent #eceff1 transparent;
    position: absolute;
    margin: 0 auto;
    left: 50%;
    transform: translate(-50%, -50%);
    top: -12px;
  }
  .control-group {
    margin-bottom: 6px;
    position: relative;
  }
  .login-link {
    display: inline-block;
    font-size: 13px;
    margin-top: 15px;
    text-align: center;
  }
  .login-link.left {
    text-align: left;
    width: 50%;
  }
  .login-link.right {
    text-align: right;
    width: 35%;
  }
  #login h4 {
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    line-height: 34px;
    opacity: .95;
    user-select: none;
  }
  #login small {
    font-size: inherit;
    font-weight: 700;
    color: inherit;
    user-select: none;
  }
  .login-field {
    font-size: 17px;
    padding-bottom: 11px;
    padding-top: 11px;
    text-indent: 3px;
    width: 302px;
  }
  .v-transition {
    overflow: hidden;
    transition: all .3s;
  }
  .v-enter, .v-leave {
    height: 0;
    opacity: 0;
    transition: all .3s;
  }
</style>

<template>
  <div id="login">
    <div id="login-logo">
      <img src="../assets/img/login/icon.png">
      <h4>Welcome to <small>DocCenter App</small></h4>
    </div>
    <div id="login-form">
      <div class="control-group">
        <input type="text" class="login-field" value="" placeholder="Nickname" id="login-nickname">
        <label class="login-field-icon fui-lock-16" for="login-nickname"><icon name="user" scale="1.6"></icon></label>
      </div>
      <div class="control-group">
        <input type="email" class="login-field" value="" placeholder="Enter your mail" id="login-name">
        <label class="login-field-icon fui-man-16" for="login-name"><icon name="at" scale="1.6"></icon></label>
      </div>
      <div class="control-group">
        <input type="password" class="login-field" value="" placeholder="Password" id="login-pass">
        <label class="login-field-icon fui-lock-16" for="login-pass"><icon name="lock" scale="1.6"></icon></label>
      </div>
      <a class="btn btn-primary btn-block" href="#">Sign up</a>
      <a class="login-link left" v-link="{ path: '/login' }">← Log in</a>
      <a class="login-link right"> </a>
    </div>
  </div>
</template>
<script>
  import Icon from 'vue-awesome'
  export default {
    components: {
      Icon
    }
  }
</script>
<style scoped>
  img {
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
  h4 {
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    line-height: 34px;
    opacity: .95;
  }
  small {
    font-size: inherit;
    font-weight: 700;
    color: inherit;
  }
  .login-field {
    font-size: 17px;
    padding-bottom: 11px;
    padding-top: 11px;
    text-indent: 3px;
    width: 302px;
  }
</style>

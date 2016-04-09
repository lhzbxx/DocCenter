<template>
  <div id="login">
    <div id="login-logo">
      <img src="../assets/img/login/icon.png" alt="Welcome to Mail App">
      <h4>Welcome to <small>DocCenter App</small></h4>
    </div>
    <div id="login-form">
      <div class="form-group">
        <input type="text" class="form-control login-field" value="" placeholder="Enter your mail" id="login-mail">
        <label class="login-field-icon fui-user" for="login-mail"></label>
      </div>
      <div class="form-group">
        <input type="password" class="form-control login-field" value="" placeholder="Password" id="login-pass">
        <label class="login-field-icon fui-lock" for="login-pass"></label>
      </div>
      <a class="btn btn-primary btn-lg btn-block" href="#">Log in</a>
      <a class="login-link" href="#">Lost your password?</a>
    </div>
  </div>
</template>
<script>
</script>
<style>
  body {
    background-color: #1abc9c;
  }
  #login {
    position: absolute;
    width: 550px;
    padding: 20px;
    background-color: #edeff1;
    border-radius: 6px;
  }
  #login-logo {
    
  }
</style>

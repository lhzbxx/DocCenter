<template>
  <div>
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
    <a class="btn btn-primary btn-block">Sign up</a>
    <a class="login-link left" v-on:click="notify(1)">← Log in</a>
    <a class="login-link right"> </a>
  </div>
</template>
<script>
  import Icon from 'vue-awesome'
  export default {
    components: {
      Icon
    },
    methods: {
      notify: function (state) {
        this.$dispatch('state', state)
      }
    }
  }
</script>

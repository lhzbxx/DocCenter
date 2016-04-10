<template>
  <div>
    <div class="control-group">
      <input type="email" class="login-field" value="" placeholder="Enter your mail">
      <label class="login-field-icon fui-man-16"><icon name="at" scale="1.6"></icon></label>
    </div>
    <div class="control-group">
      <input type="password" class="login-field" value="" placeholder="Password">
      <label class="login-field-icon fui-lock-16"><icon name="lock" scale="1.6"></icon></label>
    </div>
    <a class="btn btn-primary btn-block">Log in</a>
    <a class="login-link left" v-on:click="notify(3)">Forget your password?</a>
    <a class="login-link right" v-on:click="notify(2)">Sign up →</a>
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

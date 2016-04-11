<template>
  <div>
    <div class="control-group">
      <input type="email" class="login-field" value="" placeholder="Enter your mail" id="login-name">
      <label class="login-field-icon fui-man-16" for="login-name"><icon name="at" scale="1.6"></icon></label>
    </div>
    <a class="btn btn-primary btn-block">Reset password</a>
    <a class="login-link left"> </a>
    <a class="login-link right" v-on:click="notify(1)">Log in →</a>
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

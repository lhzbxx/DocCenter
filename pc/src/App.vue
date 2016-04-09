<template>
  <div id="app">
    <router-view
      transition="fade"
      transition-mode="out-in"></router-view>
  </div>
</template>
<style>
  .fade-transition {
    transition: opacity .2s ease;
  }
  .fade-enter, .fade-leave {
    opacity: 0;
  }
</style>

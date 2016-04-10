<template>
  <div id="app">
    <router-view
      transition="fade"
      transition-mode="out-in"></router-view>
  </div>
</template>
<style>
  body {
    font-family: Helvetica, Arial, Verdana, sans-serif;
    font-size: 14px;
    line-height: 1.231;
    margin: 0;
  }
  input {
    outline: none;
    border: 2px solid #dce4ec;
    color: #34495e;
    font-size: 14px;
    padding: 8px 0 9px 10px;
    text-indent: 1px;
    border-radius: 6px;
    box-shadow: none;
    background-color: #fff;
    margin-bottom: 10px;
    transition: border linear .25s,box-shadow linear .25s;
  }
  input:focus {
    border: 2px solid #1abc9c;
    transition: border linear .25s,box-shadow linear .25s;
  }
  a {
    outline: none;
    cursor: pointer;
    color: #bfc9ca;
    transition: color .25s;
    user-select: none;
  }
  a:hover  {
    color: #2ecc71;
    transition: color .25s;
    text-decoration: none;
  }
  .btn {
    font-weight: bold;
    text-decoration: none;
    padding: 10px 15px;
    font-size: 15px;
    vertical-align: middle;
    line-height: 1.4;
    cursor: pointer;
    border-radius: 4px;
    border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
    transition: border .25s linear,color .25s linear,background-color .25s linear;
  }
  .btn-primary {
    color: #fff;
    background-color: #1abc9c;
    padding: 10px 19px;
    font-size: 17px;
    line-height: 1.471;
    border-radius: 6px;
  }
  .btn-block {
    display: block;
    width: 100%;
    padding-right: 0;
    padding-left: 0;
    box-sizing: border-box;
  }
  .btn.btn-primary:hover {
    color: #fff;
    background-color: #2fe2bf;
    transition: border .25s linear,color .25s linear,background-color .25s linear;
  }
  label {
    display: inline-block;
    width: 20px;
    position: absolute;
    top: 9px;
    right: 15px;
    color: #bfc9ca;
    transition: color .25s;
  }
  input:focus + label {
    color: #1abc9c;
    transition: color .25s;
  }
  .fade-transition {
    transition: opacity .2s ease;
  }
  .fade-enter, .fade-leave {
    opacity: 0;
  }
</style>

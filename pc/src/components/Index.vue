<template>
  <div>
    <nav>
      <div id="nav-wrapper">
        <div id="nav-header">
          <a id="nav-brand" href="#">DocCenter</a>
        </div>
        <div id="nav-collapse">
          <ul class="nav nav-nav">
            <li class="active"><a href="#fakelink">TimeLine</a></li>
            <li><a href="#fakelink">Messages</a><span class="nav-unread">1</span></li>
          </ul>
          <form class="nav-form nav-right" action="#" role="search">
            <div class="form-group">
              <div class="input-group">
                <input id="input-group-con" type="search" placeholder="Search">
                <span id="input-group-btn">
                  <button type="submit" class="btn"><span class="fui-search"></span></button>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>
<style scoped>
  nav {
    background-color: #34495e;
    height: 66px;
    line-height: 66px;
    position: fixed;
    width: 100%;
    top: 0;
    border: none;
  }
  a {
    text-decoration: none;
  }
  #nav-wrapper {
    min-width: 700px;
    max-width: 960px;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
  }
  #nav-header {
    float: left;
    display: inline-block;
    margin-right: 60px;
    height: 100%;
  }
  #nav-brand {
    font-size: 30px;
  }
  a:hover {
    color: #1abc9c;
    transition: color .25s;
    background-color: transparent;
  }
  #nav-collapse {
    float: left;
  }
  ul {
    list-style: none;
    margin: 0;
    float: left;
  }
  li {
    list-style: none;
    display: inline-block;
    float: left;
    width: 100px;
    text-align: center;
    font-size: 18px;
    position: relative;
  }
  li.active {
    color: #1abc9c;
  }
  .form-group {
    background-color: #293a4a;
  }
  .input-group {
    display: inline-block;
    background-color: #293a4a;
    color: #536a81;
  }
  .nav-unread {
    position: absolute;
    top: 21px;
    right: 3px;
    z-index: 10;
    width: 6px;
    height: 6px;
    font-size: 0;
    background-color: #1abc9c;
    border-radius: 50%;
  }
  .nav-form {
    float: right;
  }
</style>
<script>
</script>

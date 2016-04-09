<template>
  <div>
    <nav>
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-01">
          <span class="sr-only">Toggle navigation</span>
        </button>
        <a class="navbar-brand" href="#">Flat UI</a>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li class="active"><a href="#fakelink">Products</a></li>
          <li><a href="#fakelink">Features</a></li>
        </ul>
        <form class="navbar-form navbar-right" action="#" role="search">
          <div class="form-group">
            <div class="input-group">
              <input class="form-control" type="search" placeholder="Search">
            <span class="input-group-btn">
              <button type="submit" class="btn"><span class="fui-search"></span></button>
            </span>
            </div>
          </div>
        </form>
      </div>
    </nav>
  </div>
</template>
<style scoped>
  nav {
    background-color: #34495e;
    min-height: 53px;
    margin-bottom: 30px;
    font-size: 16px;
    border: none;
    border-radius: 6px;
  }
  .navbar-brand:hover {
    color: #1abc9c;
    background-color: transparent;
  }
</style>
<script>
</script>

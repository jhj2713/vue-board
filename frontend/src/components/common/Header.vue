<template>
  <header>
    <h1>
      <router-link to="/">
        <img alt="Vue logo" src="../../assets/logo.png" width="100" />
      </router-link>
    </h1>
    <div>
      <ul class="menu">
        <li>
          <router-link to="/board/list" active-class="active"
            >게시판1</router-link
          >
        </li>
        <li>
          <router-link to="/board/list" active-class="active"
            >게시판2</router-link
          >
        </li>
        <li>
          <router-link to="/board/list" active-class="active"
            >게시판3</router-link
          >
        </li>
        <li>
          <router-link to="/board/list" active-class="active"
            >게시판4</router-link
          >
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
  width: 100%;
  border-bottom: 1px solid grey;
  height: 80px;
}
header h1 {
  position: absolute;
  top: 0;
  left: 40px;
}
header ul.menu {
  position: absolute;
  top: 30px;
  right: 30px;
}
header ul.menu li {
  float: left;
  padding: 10px 20px;
  list-style: none;
  cursor: pointer;
}
a {
  text-decoration: none;
  color: black;
}
a:hover {
  color: #42b983;
}
.active {
  color: #42b983;
  text-decoration: none;
}
</style>

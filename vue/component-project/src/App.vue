<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/dataBinding">Databinding</router-link> | <!-- router-link to= 버튼 링크 거는법 -->
    <router-link to="/ListBinding">Listbinding</router-link> |
    <router-link to="/IFBinding">IFbinding</router-link> |
    <router-link to="/OnEvent">OnEvent</router-link> |
    <router-link to="/options">Options</router-link> |
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

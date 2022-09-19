<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> | 
    <router-link to="/form">Form</router-link> |
    <router-link :to="{name: 'jobs'}">Jobs</router-link>
  </nav>
  
  <router-view/>
  

</template>


<script>


  
</script>

<style >
#app  {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #030c01;
}

nav {
  padding: 30px;
  background-color: #031001;
}

nav a {
  font-weight: bold;
  color: #300bd4;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

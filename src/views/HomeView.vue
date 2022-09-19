<template>
  <div class="home">
 
      <HelloWorld/>
    
    
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>this is home page</h1>
    <h2>hii {{name}}</h2>
    <input type="text" ref="name" >
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  // name: 'HomeView',
  components: {
    HelloWorld
},
  data() {
    return {
      name: 'ashutosh'
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    }
  }
}
</script>

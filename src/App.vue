<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>
<script>
import HelloWorld from "./components/HelloWorld.vue";
//  import User from "./components/User.vue";
//  import Categories from "./components/Categories.vue";
// import Products from "./components/Products.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    //  home,
    // User,
    //  Categories,
    // Products,
  },
};
</script> 
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
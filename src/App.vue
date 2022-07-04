<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>
    <unit1/>
    <ex-1/>-->
    <!-- <ex-2/> -->
    <!-- <ex-3/>  -->
    <!-- <handleSAA/> -->
    <!-- <egV/> -->
    <!-- <insertData/> -->
    <cartProduct/>
  </div>
</template>

<script>
// import egV from './components/unit2/egV.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import unit1 from './components/egFrontEnd.vue'
// import ex1 from './components/unit1/exercise1.vue'
// import ex2 from './components/unit1/exercise2.vue'
// import ex3 from './components/unit1/exercise3.vue'
// import handleSAA from './components/unit2/exU2.vue'
// import insertData from './components/unit2/exercise1.vue'
import cartProduct from './components/unit2/exercise2.vue'


export default {
  name: 'App',
  components: {
    // egV
    // HelloWorld,
    // unit1,
    // ex1,
    // ex2,
    // ex3,
    // handleSAA,
    // insertData,
    cartProduct,
  }
}
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

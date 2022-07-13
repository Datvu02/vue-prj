<template>
  <div id="app">
     <!-- <unit1/>  -->
    <!-- <ex-1/>--> 
    <!-- <ex-2/> -->
    <!-- <ex-3/>  -->
    <!-- <handleSAA/> -->
    <!-- <egV/> -->
    <!-- <insertData/> -->
    <!-- <cartProduct/> -->
    <!-- <checkForm/> -->
    <todoComponent/>
    <ExerciseCRUD/>
    <!-- <checkNumber/> -->
  </div>
</template>

<script>
// import egV from './components/unit2/egV.vue'
// import unit1 from './components/login/egFrontEnd.vue'
// import ex1 from './components/unit1/exercise1.vue'
// import ex2 from './components/unit1/exercise2.vue'
// import ex3 from './components/unit1/exercise3.vue'
// import handleSAA from './components/unit2/exU2.vue'
// import insertData from './components/unit2/exercise1.vue'
// import cartProduct from './components/unit2/exercise2.vue'
// import checkForm from './components/unit2/checkForm.vue'
import todoComponent from './components/unit3/todoApp/todoComponent.vue'
import ExerciseCRUD from './components/unit3/CRUD/Exercise.vue'
// import checkNumber from './components/unit4/checkNumber.vue'


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
    // cartProduct,
    // checkForm,
    todoComponent,
    ExerciseCRUD,
    // checkNumber,
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

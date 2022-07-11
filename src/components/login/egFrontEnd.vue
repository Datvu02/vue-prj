<template>
  <div class="container">
    <formLogin @handleEmitLogin="handleEmitLogin"/>
    <returnLogin :name="name" :pass="pass"/>
  </div>
</template>

<script>
import formLogin from './formLogin.vue'
import returnLogin from './returnLogin.vue'

export default {
  name: 'unit-1',
  components: {
    formLogin,
    returnLogin,
  },

  data(){
    return{
      name: '',
      pass: ''
    }
  },

  method:{
    handleEmitLogin(data){
      console.log(data);
      this.name = data.name,
      this.pass = data.pass
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;
  }
</style>

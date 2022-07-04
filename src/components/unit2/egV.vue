<template>
  <div>
      <input type="text" v-model="input">
    <!-- test if else -->
        <h1 v-if="1 > 2"> True </h1>
        <h1 v-else> False </h1>
        <h1 v-show="1 < 2">True </h1>
        <h1 v-show="1 < 2">False </h1>
        <ul id="example-1" v-for="product in products" :key="product.id">
            <div v-if="product.price > 20000000">
                <p>
                    {{ product.id }} <br>
                    {{ product.name }} <br>
                    {{ product.price }} <br>
                    {{ product.quantily }}
                </p>
                    <hr>
            </div>
        </ul>
        <!-- <p> A= {{ addA }}</p> -->
        <!-- <p>B= {{ addB }}</p> -->
        <!-- <button @click="a++">ADD A</button> -->
        <!-- <button @click="b++">ADD B</button> -->

        <div class="testw" style="witdh= 500px; height: 300px;" :style="bgr_color">
            <input type="number" v-model="number">
        </div>
  </div>
</template>

<script>
export default {
  name: 'eg-V',
  data(){
      return{
        // a = 10,
        // b = 50,
        products:[
            {
                id: 1,
                name: 'Iphone 14 promax',
                price: 25000000,
                quantily: 12
            },
            {
                id: 2,
                name: 'Iphone 13 promax',
                price: 55000000,
                quantily: 20
            },
            {
                id: 3,
                name: 'Iphone 6s',
                price: 12000000,
                quantily: 42
            },
            {
                id: 4,
                name: 'Iphone 12',
                price: 1000000,
                quantily: 15
            },
        ],
        number: '',
        bgr_color: ''
      }
  },
  computed:{
    //   addA: function(){
    //       console.log('addA runing');
    //   },
    //   addB: function(){
    //       console.log('addB runing');
    //   }
  },
  watch: {
      number(value){
          if(value >30){
              this.bgr_color = 'background-color: white'
          }else if(value <= 30 && value >20){
              this.bgr_color = 'background-color: yellow'
          }else if(value <= 20 && value >10){
              this.bgr_color = 'background-color: blue'
          }else{
              this.bgr_color = 'background-color: red'
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div>
    <div class="container" ref="message"> 
      <input type="number" v-model="data" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'checkNumber',
  data() {
    return {
      data:''
    }
  },
  methods: {
    
  },
  watch: {
       data (value) {
           if(!value) {
             this.$refs.message.style.backgroundColor = 'white';
           }
           if(value > 0 && value <10) {
              this.$refs.message.style.backgroundColor = 'gray';
           }else if(value >10 && value <=30) {
              this.$refs.message.style.backgroundColor = 'green';
           }else if(value >30 && value <= 50) {
              this.$refs.message.style.backgroundColor = 'blue';
           }else if(value >50 && value <=70) {
              this.$refs.message.style.backgroundColor = 'violet';
           }else if(value >70 && value <=90) {
              this.$refs.message.style.backgroundColor = 'orange';
           }else if(value >90 && value <=100) {
              this.$refs.message.style.backgroundColor = 'red';
           }
       }
   }
}
</script>
<style>
 .container {
  border: 1px solid #333;
  background-color:white;
 }
</style>
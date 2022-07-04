<template>
<div class="container">
    <h1>Xử lý chuỗi và mảng</h1>
</div>
</template>

<script>
export default {
  name: "handle-SAA",
  data() {
      return {
          arr1: [1, 2, 3, 4],
          arr2: [5, 6, 7, 8],
          arr3: [9, 10, 11, 12],


          text: [
              'Đạt',
              'thật',
              'đẹp ',
              'trai'
          ]
      }

  },

  methods: {
    //   Mảng
    handleConcat() {
        let a = this.arr1.concat(this.arr2);
        console.log(a);
    },

    handleFilter(){
        console.log(this.text.filter(a => a == 'now'));
    },

    handleFind(){
        console.log(this.text.find(e => e != 'now'));
    },

    handleInclude(){
        console.log(this.text.includes("datVu"));
    },

    handleJoin(){
        for (let i = 0; i < 1000; i++) {
            console.log(this.text.join(" "));
            
        }
    },

    handlePop(){
        this.text.pop();
        console.log(this.text);
    },

    handleShift(){
        this.text.shift();
        console.log(this.text);
    },
    
    handlePush(){
        this.text.push("vvv");
        console.log(this.text);
    },
    
    handleUnshift(){
        this.text.unshift("Anh");
        console.log(this.text);
    },
    
    handleReverse(){
        this.text.reverse();
        console.log(this.text);
    },

    // Chuỗi
  },

  mounted(){
//   Mảng

    //   this.handleConcat();
    //   this.handleFilter();
    //   this.handleFind();
    //   this.handleInclude();
    //   this.handleJoin();
    //   this.handlePop();
    //   this.handleShift();
    //   this.handlePush();
    //   this.handleUnshift();
    //   this.handleReverse();

    //   Chuỗi

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>

  
</style>

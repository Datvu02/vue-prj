<template>
  <div id="">
    <div id="calWrap">
        <div class="top" id="">
            
            <p :v-model="total">{{ total || 0 }}</p>
        </div>
        <div id="keys">
            <div v-on:click="clear()" class="btn">c</div>
            <div v-on:click="del()" class="btn">del</div>
            <div v-on:click="key('%')" class="btn">%</div>
            <div v-on:click="key('+')" class="btn">+</div>
            <div v-on:click="key('7')">7</div>
            <div v-on:click="key('8')">8</div>
            <div v-on:click="key('9')">9</div>
            <div v-on:click="key('-')" class="btn">-</div>
            <div v-on:click="key('4')">4</div>
            <div v-on:click="key('5')">5</div>
            <div v-on:click="key('6')">6</div>
            <div v-on:click="key('*')" class="btn">*</div>
            <div v-on:click="key('1')">1</div>
            <div v-on:click="key('2')">2</div>
            <div v-on:click="key('3')">3</div>
            <div v-on:click="key('/')" class="btn">/</div>
            <div v-on:click="key('0')" class="zero">0</div>
            <div v-on:click="key('.')">.</div>
            <div v-on:click="equal()" class="btn">=</div>
        </div>
    </div>
</div>  

</template>

<script>
export default {
  name: 'ex-3',
    props: {
    msg: String
  },
  data() {
    return{
      total: ''
    }
  },
  methods: {
    key: function(num) {
      return this.total += num;
    },
    clear: function() {
      return this.total = '';
    },
    del: function() {
      return this.total = this.total.slice(0, -1);
    },
    mod: function(){
      let equal = this.total;
      return this.total = eval(equal + '/100');
    },
    equal: function() {
      let equal = this.total;
      return this.total = eval(equal);
    }
  }
};

</script>

<style lang="scss"  scoped>
  #calWrap {
    border-radius: 23px;
    background-color: rgb(90, 86, 86);
    padding: 10px;
    margin: auto;
    width: 292px;
    clear: both;
    display: table;
    .top{
      text-align: end;
      height: 50px;
      line-height: 50px;
      color: white;
      width: 90%;
      font-size: 20px;
      font-weight: bold;
      border-radius: 4px;
      margin: 0 0 14px 0;
      border: 0;
      padding: 0 1em;
    }
  }
  #keys {
    div {
      cursor: pointer;
      width: 66px;
      height: 60px;
      line-height: 60px !important;
      font-weight: bold;
      text-align: center;
      line-height: 2em;
      background: white;
      border-radius: 3px;
      margin: 0 5px 5px 0;
      float: left;
      transition: all 0.2s ease;
    }

    div:hover {
      background-color: #D6D6D6;
    }
    .zero {
      width: 139px !important;
    }
    .btn {
      background-color: #ffd900 !important;
    }
  }
</style>

<template>
<div class="container">
  <div class="login">
      <div class="inputLogin">
        <div class="label">Họ và tên</div>
        <input type="text" v-model="data.name">
      </div>
      <div class="inputLogin">
        <div class="label">Ngày sinh</div>
        <input type="text"  v-model="data.date">
      </div>
      <div class="inputLogin">
        <div class="label">Số điện thoại</div>
        <input type="text" v-model="data.phone">
      </div>
      <div class="inputLogin">
        <div class="label">Link facebook</div>
        <input type="url" v-model="data.face">
      </div>
      <div class="sub">
        <button @click="save" type="submit" >Save</button>
        <button @click="clear" type="submit">Clear</button>
      </div>
  </div>
  <div class="return">
      <div class="returnLabel">
        Họ tên: {{ dataIp.name }} <br>
        Ngày sinh: {{ dataIp.date }} <br>
        số điện thoại: {{ dataIp.phone }} <br>
        Link facebook: <a :href="dataIp.face">{{ dataIp.name }}.{{ dataIp.message }}</a>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'ex-2',

  data() {
    return {
      data: {
        name: '',
        date: '',
        phone: '',
        face: ''
      },
      dataIp: {
        name: '',
        date: '',
        phone: '',
        face: '',
        message: ''
      },
    }
  },

  methods: {
    save(){
      this.dataIp.name = this.data.name
      this.dataIp.date = this.data.date
      this.dataIp.phone = this.data.phone
      this.dataIp.face = this.data.face
      this.dataIp.message = 'Facebook.com'
    },
    clear(){
      this.dataIp.name = ''
      this.dataIp.date = ''
      this.dataIp.phone = ''
      this.dataIp.face = ''
      this.dataIp.message = ''
      this.data.name = ''
      this.data.date = ''
      this.data.phone = ''
      this.data.face = ''


    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>

  .container {
    display: flex;
    margin-left: 25%;
    height: auto;

    .login{
      background: #f5f5f5;
      border: 1px solid #6E6E6E;
      padding: 24px;
      height: auto;
      width: 300px;

      .inputLogin{
        margin-bottom: 12px;

        .label{
          font-weight: bold;
          margin-bottom: 8px;
          text-align: left;
        }

        input {
          width: 292px;
          height: 30px;
        }
      }
    }
    .sub{
      width: 100%;
      display: flex;
      button {
        width: 50%;
        height: 40px;
        margin: 10px;
        border-radius: 5px;
        margin-top: 20px;
        background: #0080dd;
        color: #fff;
        border: unset;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
      }
    }
    .return {
      background: #fff;
      border: 1px solid #6E6E6E;
      padding: 24px;
      height: 400px;
      width: 400px;
      display: flex;
      margin-left: 24px;

      .returnLabel {
        font-weight: bold;
        text-align: left;
        color: #00AAAA;
      }
    }
  }
</style>

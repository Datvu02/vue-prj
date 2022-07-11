<template>
    <div class="formLogin">
        <div class="inputLogin">
            <div class="label">Tên đăng nhập</div>
            <input type="text" v-model="name">
        </div>
        <div class="inputLogin">
            <div class="label">Mật khẩus</div>
            <input type="password" v-model="pass">
        </div>
        <button type="submit" @click="handleEmitLogin">Đăng nhập</button>
    </div>
</template>

<script>
export default {
  name: 'formLogin',

  data() {
    return{
      name: '',
      pass: ''
    }
  },

  method: {
    handleEmitLogin: function() {
      let dataLogin = {
        name: this.name,
        pass: this.pass
      }
      console.log(dataLogin);
      this.$emit('handleEmitLogin', dataLogin)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>

    .formLogin{
      background: #f5f5f5;
      border: 1px solid #6E6E6E;
      padding: 24px;
      height: 250px;
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
    button {
        width: 100%;
        height: 40px;
        border-radius: 5px;
        margin-top: 20px;
        background: #0080dd;
        color: #fff;
        border: unset;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
      }
</style>

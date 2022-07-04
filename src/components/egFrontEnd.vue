<template>
<div class="container">
  <div class="login">
      <div class="inputLogin">
        <div class="label">Tên đăng nhập</div>
        <input type="text">
      </div>
      <div class="inputLogin">
        <div class="label">Mật khẩus</div>
        <input type="password">
      </div>
      <button type="submit">Đăng nhập</button>
  </div>
  <div class="return">
      <div class="returnLabel">
        Xin chào
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'unit-1',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;

    .login{
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

    .return {
      background: #fff;
      border: 1px solid #6E6E6E;
      padding: 24px;
      height: 250px;
      width: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 24px;

      .returnLabel {
        font-weight: bold;
        color: #00AAAA;
      }
    }
  }
</style>

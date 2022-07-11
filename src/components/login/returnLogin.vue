<template>
  <div class="returnLogin">
      <div class="returnLabel">
        <p>Tên: {{ name }}</p>
        <br>
        <p>mật khẩu: {{ pass }}</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'returnLogin',

  prop: [
    'name',
    'pass'
  ],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>

    .returnLogin {
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
</style>

<template>
<div class="container">
  <div class="getVal">
      <div class="inputImport">
        <div class="label">Nhập tiêu đề</div>
        <input type="text" v-model="title">
      </div>
      <div class="inputImport">
        <div class="label">Nhập nội dung</div>
        <textarea name="" id="" cols="36" rows="10" v-model="content"></textarea>
      </div>
  </div>
  <div class="return">
      <div class="returnInput">
        <h1>{{ title }}</h1>
        <div v-html="content"></div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'ex-1',
    data() {
        return {
            title: 'Zent Coding School',
            content: 'Happy class'
        }
    },
};

</script>

<style lang="scss"  scoped>

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;

    .getVal{
      background: #f5f5f5;
      border: 1px solid #6E6E6E;
      padding: 24px;
      height: 250px;
      width: 300px;

      .inputImport{
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
    .return {
      background: #fff;
      border: 1px dashed #6E6E6E;
      padding: 24px;
      height: 250px;
      width: 450px;
      display: flex;
      margin-left: 24px;

      .returnInput {
        h1{
            font-weight: bold;
        }
        div{
            float: left;
        }
      }
    }
  }
</style>

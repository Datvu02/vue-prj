<template>
    <div class="container">
        <div class="form-data">
            <ProductForm @productItem="handleAddProduct" :product="product"/>
        </div>
        <div class="list-data">
            <ProductList @productItemUpdate="handleFillProduct" :item="item"/>
        </div>
    </div>
</template>

<script>
import ProductForm from '../../components/unit7/7.2/ProductForm.vue'
import ProductList from '../../components/unit7/7.2/ProductList.vue'

export default {
  name: 'ExerciseCRUD',
  components: {
      ProductForm,
      ProductList,
  },
  data() {
      return {
          item: '',
          product: ''
      }
  },
  methods: {
      handleAddProduct(value) {
          this.item = value
          this.product = ''
      },
      handleFillProduct(value) {
          this.product = value
      }
  }
}
</script>

<style scoped lang="scss">
.container {
    display: flex;
    align-items: flex-start;
    justify-content: start;
    .form-data {
        width: 30%;
        margin-right: 30px;
    }
}
</style>
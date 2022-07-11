<template>
  <div class="exercise">
      <ProductForm/>
      <ProductList/>
  </div>
</template>

<script>
import ProductForm from './ProductForm.vue'
import ProductList from './ProductList.vue'

export default {
  name: 'ExerciseCRUD',
  components: {
      ProductForm,
      ProductList,
  },
  props: {
  }
}
</script>

<style scoped>

</style>

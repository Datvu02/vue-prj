<template>
  <AdminLayout  :active="active">
      <template #header>
          <h2>Tồn kho</h2>
      </template>
      <template #content>
          Đây là trang tồn kho
      </template>
  </AdminLayout>
</template>

<script>
import AdminLayout from '../../../layouts/AdminLayout.vue'

export default {
    name: 'inventoryAdmin',
    components: {
        AdminLayout
    },
    data() {
        return {
            ative: '5-4'
        }
    }
}
</script>

<style lang='scss' scoped>
 
</style>
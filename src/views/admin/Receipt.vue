<template>
  <AdminLayout  :active="active">
      <template #header>
          <h2>Quản lý hóa đơn</h2>
      </template>
      <template #content>
          Đây là trang quản lý hóa đơn
      </template>
  </AdminLayout>
</template>

<script>
import AdminLayout from '../../layouts/AdminLayout.vue'

export default {
    name: 'receiptMg',
    components: {
        AdminLayout
    },
    data() {
        return {
            ative: '3'
        }
    }
}
</script>

<style lang='scss' scoped>
 
</style>
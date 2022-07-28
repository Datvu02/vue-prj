<template>
  <AdminLayout  :active="active">
      <template #header>
          <h2>Thống kê</h2>
      </template>
      <template #content>
          Đây là trang Thống kê
      </template>
  </AdminLayout>
</template>

<script>
import AdminLayout from '../../layouts/AdminLayout.vue'

export default {
    name: 'statisticalAdmin',
    components: {
        AdminLayout
    },
    data() {
        return {
            ative: '4'
        }
    }
}
</script>

<style lang='scss' scoped>
 
</style>
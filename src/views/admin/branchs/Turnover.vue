<template>
  <AdminLayout  :active="active">
      <template #header>
          <h2>Danh thu</h2>
      </template>
      <template #content>
          Đây là trang Doanh thu
      </template>
  </AdminLayout>
</template>

<script>
import AdminLayout from '../../../layouts/AdminLayout.vue'

export default {
    name: 'turnoverAdmin',
    components: {
        AdminLayout
    },
    data() {
        return {
            ative: '5-3'
        }
    }
}
</script>

<style lang='scss' scoped>
 
</style>
<template>
  <AdminLayout  :active="active">
      <template #header>
          <h2>Cài đặt hệ thống</h2>
      </template>
      <template #content>
          Đây là trang cài đặt
      </template>
  </AdminLayout>
</template>

<script>
import AdminLayout from '../../layouts/AdminLayout.vue'

export default {
    name: 'settingAdmin',
    components: {
        AdminLayout
    },
    data() {
        return {
            ative: '6'
        }
    }
}
</script>

<style lang='scss' scoped>
 
</style>
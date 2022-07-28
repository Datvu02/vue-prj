<template>
  <AdminLayout  :active="active">
      <template #header>
          <h2>Dashboard</h2>
      </template>
      <template #content>
          Đây là trang Dashboard
      </template>
  </AdminLayout>
</template>

<script>
import AdminLayout from '../../layouts/AdminLayout.vue'

export default {
    name: 'adminHome',
    components: {
        AdminLayout
    },
    data() {
        return {
            ative: '1'
        }
    }
}
</script>

<style lang='scss' scoped>
 
</style>
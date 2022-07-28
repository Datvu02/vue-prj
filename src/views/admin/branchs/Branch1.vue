<template>
  <AdminLayout  :active="active">
      <template #header>
          <h2>Chi nhánh 1</h2>
      </template>
      <template #content>
          Đây là trang chi nhánh 1
      </template>
  </AdminLayout>
</template>

<script>
import AdminLayout from '../../../layouts/AdminLayout.vue'

export default {
    name: 'secondBase',
    components: {
        AdminLayout
    },
    data() {
        return {
            ative: '5-1'
        }
    }
}
</script>

<style lang='scss' scoped>
 
</style>
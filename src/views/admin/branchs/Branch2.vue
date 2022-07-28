<template>
  <AdminLayout  :active="active">
      <template #header>
          <h2>Chi nhánh 2</h2>
      </template>
      <template #content>
          Đây là trang chi nhánh 2
      </template>
  </AdminLayout>
</template>

<script>
import AdminLayout from '../../../layouts/AdminLayout.vue'

export default {
    name: 'firstBase',
    components: {
        AdminLayout
    },
    data() {
        return {
            ative: '5-2'
        }
    }
}
</script>

<style lang='scss' scoped>
 
</style>
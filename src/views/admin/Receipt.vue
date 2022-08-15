<template>
  <AdminLayout  :active="active">
        <template #header>
            <h2>Quản lý hóa đơn</h2>
        </template>
        <template #content>
            <h2>{{ Title }}</h2><button @click="chaneTitle()">chaneTitle</button>
            <el-table :data="products" border style="width: 100%">
                <el-table-column prop="name" label="name" width="180"></el-table-column>
                <el-table-column prop="price" label="price" width="180"></el-table-column>
                <el-table-column prop="quantity" label="quantity"></el-table-column>
            </el-table>
            <div class="paginate">
                <el-pagination
                    background
                    :current-page.sync="currentPage"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, prev, pager, next, jumper"
                    :total="400">
                </el-pagination>
            </div>
      </template>
  </AdminLayout>
</template>

<script>
import AdminLayout from '../../layouts/AdminLayout.vue'
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'receiptMg',
    components: {
        AdminLayout
    },
    computed: {
        ...mapState('order',  [
            'Title',
            'products',
        ]),
    },
    methods: {
        ...mapMutations('order', [
            'editTitle'
        ]),
        chaneTitle () {
            this.editTitle()
        }

    }
    
}
</script>

<style lang='scss' scoped>
    .paginate{
        float: right; 
        margin-top: 30px;
    }
</style>
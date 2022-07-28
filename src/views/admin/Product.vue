<template>
    <AdminLayout  :active="active">
        <template #header>
            <h2>Quản lý sản phẩm</h2>
        </template>
        <template #content>
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="date" label="Date" width="180"></el-table-column>
                <el-table-column prop="name" label="Name" width="180"></el-table-column>
                <el-table-column prop="address" label="Address"></el-table-column>
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

export default {
    name: "productList",
    components: {
        AdminLayout
    },
    data() {
        return {
            tableData: [
                {
                    date: '2016-05-03',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }, {
                    date: '2016-05-02',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }, {
                    date: '2016-05-04',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }, {
                    date: '2016-05-01',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }
            ],
            currentPage: 4,
            ative: '2'
        }
    },
}
</script>

<style scoped lang="scss">
    .paginate{
        float: right; 
        margin-top: 30px;
    }

</style>
<template>
    <div>
         <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
            prop="id"
            label="id"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="Name"
            width="180">
        </el-table-column>
        <el-table-column
            prop="description"
            label="description">
        </el-table-column>
        </el-table>
    </div>
</template>

<script>
import api from '../../api'

export default {
    name: 'ListProduct',
    data() {
        return {
          tableData: []
        }
      },
    mounted() {
        api.getProductList().then((res) => {
            this.tableData = res.data.data.data
        }).catch((err) => {
            console.log(err);
        });
        let data = 
            {
                'name': 'sản phẩm 1',
                'price': '1222399',
                'description': 'hdúhds'
            }
        api.saveProduct(data)

        // axios({
        //     method: 'get',
        //     url: 'http://vuecourse.zent.edu.vn/api/products?q=san pham',
        //     }).then((response) => {
        //         this.tableData = response.data.data.data
        //         console.log(response);
        //     }).catch((error) => {
        //         // handle error
        //         console.log(error);
        // })
    }
}
</script>
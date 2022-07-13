<template>
    <div class="container-list">
        <table>
            <tr>
                <th class="title-code">Mã sản phẩm</th>
                <th class="title-name">Tên sản phẩm</th>
                <th class="title-code">Giá</th>
                <th class="title-code">Số lượng</th>
                <th class="title-code">Trạng thái</th>
                <th class="title-code">Hoạt động</th>
            </tr>
            <tr v-for="(product, index) in drag" :key="index">
                <td class="product-text-left">{{ product.code }}</td>
                <td class="product-text-left">{{ product.name }}</td>
                <td class="product-text-left">
                    {{
                        new Intl.NumberFormat('de-DE', {
                            style: 'currency',
                            currency: 'VND',
                            minimumFractionDigits: 0
                        }).format(product.price)
                    }}
                </td>
                <td>{{ product.quantity }}</td>
                <td>
                    <span v-if="product.quantity > 0" style="color: #39cd74;">Còn hàng</span>
                    <span v-else style="color: red;">Hết hàng</span>
                </td>
                <td>
                    <el-button type="warning" @click="updateItem(index)">Sửa</el-button>
                    <el-button type="danger" @click="destroyItem(index)">Xóa</el-button>
                </td>
            </tr>
            <tr v-if="products.length === 0">
                <td colspan="6">Không có dữ liệu</td>
            </tr>
        </table>
        <div class="pagination-wrap">
            <span>Hiển thị {{ start }} - {{ end }} trên tổng {{ products.length }} ({{ presentPage }} trang)</span>
            <el-pagination background layout="prev, next" :total="products.length"
                           :page-size="5" @prev-click="prev()" @next-click="next()">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductList",
    props: ['item'],
    data() {
        return {
            drag: [],
            products: [],
            start: 0,
            end: 0,
            presentPage: 1,
        }
    },
    methods: {
        destroyItem(value) {
            this.products.splice(value, 1)
            if (this.products.length > 0){
                if (this.products.length < 6) {
                    this.start = 1;
                    this.end = this.products.length;
                    this.drag = this.products.slice(this.start - 1, this.end)
                } else {
                    if (this.end > this.products.length) {
                        this.end = this.products.length
                        if (this.start > this.end) {
                            this.start -= 5
                            alert(this.start)
                        }
                        this.drag = this.products.slice(this.start - 1, this.end)
                    }
                }
            } else {
                this.start = this.end = 0
                this.drag = []
            }
        },
        updateItem(value) {
            this.$emit('productItemUpdate', this.products[value])
        },
        next(){
            this.start += 5;
            (this.end + 5 > this.products.length) ? this.end += this.products.length - this.end : this.end += 5
            this.presentPage += 1;
            this.drag = this.products.slice(this.start - 1, this.end)
        },
        prev(){
            this.start -= 5;
            (this.end === this.products.length) ? this.end -= this.end % 5 : this.end -= 5
            this.presentPage -= 1;
            this.drag = this.products.slice(this.start - 1, this.end)
        }
    },
    watch: {
        item(value) {
            let flag = true
            for (let i = 0; i < this.products.length; i++) {
                if (value.code === this.products[i].code) {
                    this.products[i] = value
                    this.products.push([])
                    this.products.pop()
                    flag = false
                }
            }
            if (flag) {
                this.products.push(value)
            }
            if (this.products.length > 0 && this.products.length < 6){
                this.start = 1;
                this.end = this.products.length;
                this.drag = this.products.slice(this.start - 1, this.end)
            }
        },
    }
}
</script>

<style scoped lang="scss">
.container-list {
    table, th, td {
        border: 1px solid #DCDFE6;
        border-collapse: collapse;
    }
    table {
        width: 100%;
        tr {
            th {
                padding: 15px;
                background-color: #f2f6fe;
            }
            td {
                padding: 10px 15px;
                border-top: none;
                border-bottom: none;
                font-size: 14px;
            }
            .title-code {
                width: 150px;
            }
            .title-name {
                width: 200px;
            }
            .product-text-left {
                text-align: left;
            }
        }
    }
    .pagination-wrap {
        text-align: left;
        margin-top: 20px;
        span {
            float: left;
        }
        .el-pagination {
            float: right;
            padding: 0;
        }
    }
}
</style>
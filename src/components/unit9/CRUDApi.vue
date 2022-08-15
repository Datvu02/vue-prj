<template>
    <div class="container">
        <div class="form-wrap">
            <h4 v-if="check">Thêm mới</h4>
            <h4 v-else>Chỉnh sửa</h4>
            <el-form :model="numberValidateForm" ref="numberValidateForm" class="demo-ruleForm">
                <el-form-item label="name" prop="name"
                    :rules="[
                        { required: true, message: 'Please input Activity name', trigger: 'blur' },
                        { min: 3, message: 'Length should be 3 to 5', trigger: 'blur' }
                    ]"
                >
                    <el-input type='name' v-model.number="numberValidateForm.name" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="price" prop="price"
                    :rules="[
                        { required: true, message: 'price is required'},
                        { type: 'number', message: 'price must be a number'}
                    ]"
                >
                    <el-input type="price" v-model.number="numberValidateForm.price" autocomplete="off"></el-input>
                </el-form-item>
                
                <el-form-item label="description" prop="description"
                    :rules="[
                        { required: true, message: 'Please input activity form', trigger: 'blur' }
                    ]"
                >
                    <el-input type="textarea" v-model.number="numberValidateForm.description" autocomplete="off"></el-input>
                </el-form-item>
                <div class="btn-form">
                    <button type="reset" class="btn-reset" @click="resetValue('numberValidateForm')">Hủy</button>
                    <el-button type="primary" v-if="!check" @click="editProduct(numberValidateForm)">Thay đổi</el-button>
                    <el-button type="primary" v-else @click="createProduct(numberValidateForm)">Tạo mới</el-button>
                </div>
            </el-form>
        </div>
    <div class="container-list">
        <h1>Danh sách sản phẩm</h1>
            <div class="search">
                <el-input placeholder="Nhập tên sản phẩm" v-model="valSearch" ></el-input>
                <el-button type="primary" plain @click="search()">Tìm kiếm</el-button>
            </div>
            <el-table :data="products" style="width: 100%">
                <el-table-column prop="name" label="Name" width="180">
                </el-table-column>
                <el-table-column prop="price" label="price">
                </el-table-column>
                <el-table-column prop="description" label="description">
                </el-table-column>
                <el-table-column label="Operations">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.row)">Edit</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.row)">Delete</el-button>
                    </template>
                </el-table-column>
            </el-table>
                <el-pagination
                    layout="prev, pager, next"
                    :total="page.total"
                    :page-size="page.pageSize"
                    :current-page="page.currentPage"
                    @current-change="handleCurrentChange"
                    background />
        </div>
    </div>
</template>

<script>
import api from '../../api'

export default {
    name: 'Ex9-1',
    
    data() {
        return {
            products: [],
            id: '',
            valSearch: '',
            buttonName: 'Tạo mới',
            
            numberValidateForm: {
                price: '',
                name: '',
                description: ''
            },
            check: true,
            page: {
                currentPage: 1,
                pageSize: 10,
                total: 0,
            },
            url: '/products'
        }
    },

    methods: {

        createProduct(formName) {
            let data = 
            {
                'name': formName.name,
                'price': formName.price,
                'description': formName.description
            }
            this.$refs['numberValidateForm'].validate((valid) => {
                if (valid) {
                    api.saveProduct(data)
                    this.$message({
                        message: 'Thêm mới sản phẩm thành công.',
                        type: 'success'
                    });
                    this.resetValue('numberValidateForm')       
                } else {
                    this.$message.error({
                        message: 'Thêm mới sản phẩm thất bại.',
                    });
                }
            })
        },

        editProduct(formName) {
            let data = {
                'name': formName.name,
                'price': formName.price,
                'description': formName.description,
            }
            api.updateProduct(data, this.id).then(() => {
                this.$message({
                    message: 'Sửa sản phẩm thành công.',
                    type: 'success'
                });
                this.resetValue('numberValidateForm')
                this.check = true
            }).catch(() => {
                this.$message.error({
                    message: 'Sửa sản phẩm thất bại.',
                });
            })
        },

        resetValue(formName) {
            this.$refs[formName].resetFields();
            this.name = this.price = this.description = ''
        },
        
        handleEdit(index) {
            this.id = index.id
            this.numberValidateForm = index
            this.check = false
        },
        handleDelete(index) {
            api.destroyProduct(index.id).then(() => {
                this.$message.success({
                    message: 'Xóa thành công.',
                })
            }).catch(() => {
                this.$message.error({
                    message: 'Xóa thát bại',
                })
            })
        },
        handleCurrentChange(value) {
            this.getListProduct(value)
        },
        search() {
            this.url = '/products/?q=' + this.valSearch
            api.getProductList(this.url).then((res) => {
                this.products = res.data.data.data
                this.page.currentPage = res.data.data.current_page
                this.page.pageSize = res.data.data.per_page
                this.page.total = res.data.data.total
            })
        }
    },

    mounted() {
        api.getProductList(this.url).then((res) => {
            this.products = res.data.data.data
            this.page.currentPage = res.data.data.current_page
            this.page.pageSize = res.data.data.per_page
            this.page.total = res.data.data.total
        })

    }
}
</script>

<style lang='scss' scoped>

.container {
    padding: 50px 20px;
    display: flex;
    align-items: flex-start;
    justify-content: start;
    .form-wrap {
        width: 30%;
        margin-right: 30px;
        padding: 15px;
        text-align: left;
        border: 1px solid #DCDFE6;
        h4 {
            color: #0080dd;
        }
        form {
            text-align: left !important;
            .info {
                margin: 10px 0;
                font-size: 14px;
            }
            .btn-form {
                margin: 40px 0 80px 0;
                .el-button {
                    float: right;
                    margin-left: 10px;
                }
                .btn-reset {
                    float: right;
                    margin-left: 10px;
                    display: inline-block;
                    line-height: 1;
                    white-space: nowrap;
                    cursor: pointer;
                    background: #FFF;
                    border: 1px solid #DCDFE6;
                    color: #606266;
                    -webkit-appearance: none;
                    text-align: center;
                    box-sizing: border-box;
                    outline: 0;
                    transition: .1s;
                    font-weight: 500;
                    padding: 12px 20px;
                    font-size: 14px;
                    border-radius: 4px;
                }
            }
            input {
                -webkit-appearance: none;
                background-color: #FFF;
                background-image: none;
                border-radius: 4px;
                border: 1px solid #DCDFE6;
                box-sizing: border-box;
                color: #606266;
                display: inline-block;
                height: 40px;
                line-height: 40px;
                outline: 0;
                padding: 0 15px;
                transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
                width: 100%;
                font-size: 16px;
                margin-bottom: 5px;
                line-height: 30px;
            }
            input::placeholder {
                font-size: 14px;
                color: #ccc4cc;
            }
            .errorBorder {
                border-color: red;
            }
        }
    }
    .error {
        color: red;
    }
    .error-text {
        font-size: 14px;
    }
    .container-list {
        width: 68%;
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
        .search{
            display:flex;
            width: 50%;
        }
    }
}
</style>
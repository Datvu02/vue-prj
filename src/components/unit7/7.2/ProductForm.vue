<template>
    <div class="form-wrap">
        <h4>Sản phẩm</h4>
        <form action="">
            <div class="info">Tên sản phẩm <span class="error">(*)</span></div>
            <input type="text" placeholder="Nhập tên sản phẩm" v-model="name"
                   :class="{ errorBorder: errorName }">
            <div v-if="errorName" class="error error-text">Tên sản phẩm không được để trống</div>

            <div class="info">Đơn giá <span class="error">(*)</span></div>
            <input type="number" placeholder="Nhập đơn giá sản phẩm" v-model="price"
                   :class="{ errorBorder: errorPrice }">
            <span v-if="errorPrice" class="error error-text">Giá sản phẩm không được để trống</span>

            <div class="info">Số lượng <span class="error">(*)</span></div>
            <input type="number" placeholder="Nhập số lượng sản phẩm" v-model="quantity"
                   :class="{ errorBorder: errorQuantity }">
            <span v-if="errorQuantity" class="error error-text">Số lượng sản phẩm không được để trống</span>

            <div class="btn-form">
                <button type="reset" class="btn-reset" @click="resetValue()">Hủy</button>
                <el-button type="primary" @click="createProduct()">{{ ButtonName }}</el-button>
            </div>
        </form>
    </div>
</template>

<script>
import {mapState ,mapMutations} from 'vuex'
export default {
    name: "ProductForm",
    computed: {
        ...mapState([
            'name',
            'price',
            'quantity',
            'errorName',
            'errorPrice',
            'errorQuantity',
            'data',
            'products',
            'ButtonName'
        ]),
    },
    methods: {
        ...mapMutations([
            'updateName',
            'updatePrice',
            'updateQuantity',
            'updateProducts',
            'updateCodeProduct',
            'updateErrorName',
            'updateErrorPrice',
            'updateErrorQuantity',
        ]),
        createProduct() {
            let flag = false;
            if (this.name === '' || this.name === undefined) {
                this.updateErrorName(true)
                flag = true
            }
            if (this.price === '' || this.price === undefined) {
                this.updateErrorPrice(true)
                flag = true
            }
            if (this.quantity === '' || this.quantity === undefined) {
                this.updateErrorQuantity(true)
                flag = true
            }
            if (!flag) {
                let codeItem = 'PRD' + new Date().getTime();
                if (this.codeProduct !== '') {
                    this.products.forEach((data) => {
                        if (data.code === this.codeProduct) {
                            data.name = this.name
                            data.price = this.price
                            data.quantity = this.quantity
                        }
                    })
                    this.updateCodeProduct('')
                } else {
                    let data = {
                        code: codeItem,
                        name: this.name,
                        price: this.price,
                        quantity: this.quantity,
                    }
                    this.updateProducts(data)

                }
                // this.updateName('')
                // this.updatePrice('')
                // this.updateQuantity('')
                // this.ButtonName = 'Tạo mới'
            }
        },
        resetValue() {
            this.updateName('')
            this.updatePrice('')
            this.updateQuantity('')
            this.ButtonName = 'Tạo mới'
        }
    },
    watch: {
        name(value) {
        (value !== '') ? this.updateErrorName(false) : ''
        },
        price(value) {
        (value !== '') ? this.updateErrorPrice(false) : ''
        },
        quantity(value) {
        (value !== '') ? this.updateErrorQuantity(false) : ''
        },
        product(value) {
            this.name = value.name
            this.price = value.price
            this.quantity = value.quantity
            this.ButtonName = 'Cập nhật'
        }
    }
}
</script>

<style scoped lang="scss">
    .form-wrap {
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
</style>
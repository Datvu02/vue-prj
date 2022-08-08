<template>
    <div id="table-wrap1">
        <table>
            <tr>
                <th style="width: 30px;">STT</th>
                <th style="width: 370px;">Sản phẩm</th>
                <th style="width: 100px;">Giá</th>
                <th style="width: 100px;">Số lượng</th>
                <th style="width: 100px;">Trạng thái</th>
                <th style="width: 100px;">Hành động</th>
            </tr>
            <tr v-for="(product, index) in products" :key="index">
                <td>{{ index + 1 }}</td>
                <td>
                    <div>
                        <img :src="product.image" alt="" v-if="product.image !== ''">
                        <img src="" alt="" v-else>
                        <div>{{ product.name }}</div>
                    </div>
                </td>
                <td>
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
                    <span v-if="product.quantity > 0" class="greenColor">Còn hàng</span>
                    <span v-else class="redColor">Hết hàng</span>
                </td>
                <td>
                    <button @click="addToCart(product)">Thêm vào giỏ</button>
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
  import { mapMutations,mapState } from 'vuex'
export default {
    name: "ProductShop",
    computed: {
        ...mapState([
            'products',
            'carts',
        ]),
    },
    methods: {
        ...mapMutations([
            'increase',
            'updateTotalMoney'
        ]),
        addToCart(value) {
            let flag = false
            this.totalMoney = 0;
            if (value.quantity > 0) {
                if (this.carts.length > 0) {
                    for (let i = 0; i < this.carts.length; i++) {
                        if (value.id === this.carts[i].id) {
                            this.carts[i].quantityCart = parseInt(this.carts[i].quantityCart) + 1
                            flag = false
                            break
                        } else {
                            flag = true
                        }
                    }
                    if (flag) {
                        value.quantityCart = 1;
                        this.increase(value)
                    }
                } else {
                    value.quantityCart = 1;
                    this.carts.push(value)
                }
            } else {
                alert("Sản phẩm hết hàng")
            }
            let money = this.totalMoney
            for (let i = 0; i < this.carts.length; i++) {
                money += this.carts[i].quantityCart * this.carts[i].price
            }
            this.updateTotalMoney(money)
        },
        
    }
}
</script>
<style scoped lang="scss">
    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
        th {
            padding: 20px;
            background-color: #f2f6fe;
        }
        td {
            border-bottom: none;
            border-top: none;
            padding: 5px 10px;
            button{
                background-color: #0080dd;
                padding: 6px;
                border-radius: 3px;
                color: white;
                border: none;
            }
            button:hover{
                cursor: pointer;
            }
            div {
                display: flex;
                align-items: center;
                img {
                    width: 50px;
                    height: 50px;
                    margin-right: 10px;
                    float: left;
                }
            }
            span {
                font-size: 14px;
            }
            .greenColor {
                color: limegreen;
            }
            .redColor {
                color: red;
            }
        }
    }
    .layout-cart {
        border: 1px solid black;
        width: 590px;
        text-align: left;
        margin-left: 20px;
        padding: 0 20px;
        h4 {
            padding-left: 4px;
            margin-left: 8px;
        }
        .cart-item {
            height: 600px;
            table {
                padding-left: 5px;
                width: 100%;
                border: none;
                tr {
                    td {
                        border: none;
                        border-bottom: 1px dotted gray;
                        padding: 10px 0px;
                        p {
                            margin: 0px;
                        }
                        img {
                            width: 30px;
                        }
                        button {
                            background-color: red;
                            color: white;
                            border: none;
                            padding: 6px;
                            border-radius: 3px;
                        }
                        button:hover {
                            background-color: #b42e56;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
        .totalMoney {
            text-align: right;
            margin: 15px;
            b {
                color: red;
            }
        }
    }
</style> 
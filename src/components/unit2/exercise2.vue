<template>
    <div class="container">
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

        <div class="wrap-cart">
            <h4>Giỏ hàng</h4>
            <div class="cart-item">
                <p v-if="!cart">Không có sản phẩm nào trong giỏ hàng</p>
                <table>
                    <tr v-for="(cart,index) in carts" :key="index">
                        <td>
                            <img :src="cart.image" alt="" v-if="cart.image !== ''">
                            <img src="" alt="" v-else>
                        </td>
                        <td>
                            <div style="font-weight: bold;">{{ cart.name }}</div>
                            <span>
                                {{
                                    new Intl.NumberFormat('de-DE', {
                                        style: 'currency',
                                        currency: 'VND',
                                        minimumFractionDigits: 0
                                    }).format(cart.price*cart.quantityCart)
                                }}
                            </span>
                        </td>
                        <td>
                            <input type="number" @change="updateTotalMoney(index)" v-model="cart.quantityCart">
                        </td>
                        <td>
                            <button @click="destroyItem(index)">Xóa</button>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="totalMoney">
                <b>
                    Tổng tiền : {{
                        new Intl.NumberFormat('de-DE', {
                            style: 'currency',
                            currency: 'VND',
                            minimumFractionDigits: 0
                        }).format(totalMoney)
                    }}
                </b>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "cartProduct",
    data() {
        return {
            carts: [],
            products: [
                {
                    id: 1,
                    name: 'iPhone 12 Pro Max Chính Hãng',
                    image: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/8/21/829850/Bat-Cuoi-Truoc-Nhung-07.jpg',
                    price: 32990000,
                    quantity: 566,
                },
                {
                    id: 2,
                    name: 'iPhone 12 Chính Hãng (VN/A)',
                    image: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/8/21/829850/Bat-Cuoi-Truoc-Nhung-07.jpg',
                    price: 21790000,
                    quantity: 123,
                },
                {
                    id: 3,
                    name: 'iPhone 11 Chính hãng',
                    image: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/8/21/829850/Bat-Cuoi-Truoc-Nhung-07.jpg',
                    price: 16690000,
                    quantity: 0,
                },
                {
                    id: 4,
                    name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
                    image: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/8/21/829850/Bat-Cuoi-Truoc-Nhung-07.jpg',
                    price: 12190000,
                    quantity: 1023,
                },
                {
                    id: 5,
                    name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
                    image: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/8/21/829850/Bat-Cuoi-Truoc-Nhung-07.jpg',
                    price: 26500000,
                    quantity: 6,
                }
            ],
            totalMoney: 0
        }
    },
    methods: {
        updateTotalMoney(value){
            if(this.carts[value].quantityCart <= 0){
                this.carts.splice(value, 1);
            }
            this.totalMoney = 0;
            for (let i = 0 ; i < this.carts.length;i++){
                this.totalMoney += this.carts[i].quantityCart*this.carts[i].price
            }
        },
        addToCart(value) {
            let flag = false
            this.totalMoney = 0;
            if (value.quantity > 0) {
                if (this.carts.length > 0) {
                    for (let i = 0; i < this.carts.length; i++) {
                        if (value.id === this.carts[i].id) {
                            this.carts[i].quantityCart = parseInt(this.carts[i].quantityCart) + 1
                            this.carts.push([])
                            this.carts.pop()
                            flag = false
                            break
                        } else {
                            flag = true
                        }
                    }
                    if (flag) {
                        value.quantityCart = 1;
                        this.carts.push(value)
                    }
                } else {
                    value.quantityCart = 1;
                    this.carts.push(value)
                }
            } else {
                alert("Sản phẩm đã hết hàng")
            }
            for (let i = 0; i < this.carts.length; i++) {
                this.totalMoney += this.carts[i].quantityCart * this.carts[i].price
            }
        },
        destroyItem(value){
            this.totalMoney = 0;
            this.carts.splice(value, 1);
            for (let i = 0 ; i < this.carts.length;i++){
                this.totalMoney += this.carts[i].quantityCart * this.carts[i].price
            }
        },
    }
}
</script>

<style scoped lang="scss">
.container {
    width: 90%;
    display: flex;

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
                    object-fit: cover;
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

    .wrap-cart {
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
            height: 500px;

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
}
</style>
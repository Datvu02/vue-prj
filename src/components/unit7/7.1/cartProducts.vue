<template>
    <div class="cart">
        <h2>Giỏ hàng</h2>
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
                        <input type="number" @change="updateMoney(index)" v-model="cart.quantityCart">
                    </td>
                    <td>
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
</template>

<script>
import {mapMutations, mapState} from "vuex";
export default {
  name: "cartProducts",
  computed: {
    ...mapState([
      'carts',
      'totalMoney'
    ]),
  },
  methods: {
    ...mapMutations([
      'updateCart',
      'updateTotalMoney',
      'deleteCart'
    ]),
    updateMoney(value) {
      if (this.carts[value].quantityCart <= 0) {
        this.spliceCart(value)
      }
      this.updateTotalMoney(0)
      for (let i = 0; i < this.carts.length; i++) {
        this.updateTotalMoney(this.totalMoney + (this.carts[i].quantityCart * this.carts[i].price))
      }
    },
    destroyItem(value) {
      this.updateTotalMoney(0)
      this.deleteCart(value)
      let total = 0
      for (let i = 0; i < this.carts.length; i++) {
        total += this.carts[i].quantityCart * this.carts[i].price
      }
      this.updateTotalMoney(total)
    },
  }
}
</script>

<style scoped lang="scss">
.cart-item {
    height: 467px;
    table {
        padding-left: 5px;
        width: 100%;
        border: none;
        tr {
            td {
                border: none;
                border-bottom: 1px dotted gray;
                padding: 10px 0px;
                text-align: left;
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
</style> 

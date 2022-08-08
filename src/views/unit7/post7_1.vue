<template>
    <div class="container">
        <ProductShop/>
        <CartDetail/>
    </div>
</template>
<script>
import CartDetail from '../../components/unit7/7.1/cartProducts.vue'
import ProductShop from '../../components/unit7/7.1/products.vue'

export default {
    name: "cartDetail",
    components: {
        CartDetail,
        ProductShop
    },
}
</script>
<style scoped lang="scss">
.container {
    width: 100%;
    display: flex;
    .cart{
        width: 35%;
        border: 1px solid;
        padding: 10px;
    }
    .table-wrap1{
        width: 65%;
    }
}
</style> 
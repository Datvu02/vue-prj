<template>
   <BaseLayout>
        <template #header>
            <img  class="img" :src="banner"/>
        </template>
        <template #imgaes>
             <el-carousel indicator-position="outside">
                <el-carousel-item v-for="(item, index) in img" :key="index">
                    <el-image :src="item.image" class="image-carousel"></el-image>
                </el-carousel-item>
            </el-carousel>
        </template>
        <template #content>
            <div class="breadcrumb">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item >Trang chủ</el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/">Bim Bim</a></el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/">Khoai tây chiên</a></el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="content">
                    <img class="imgTocchien loaded"
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEgmE4M5PKs-bFqfOrJu8u66ZagPoPFkvkRQ&usqp=CAU"
                         alt="">
                <p style="padding: 20px 89px;" >Trong một ý tưởng bắt nguồn bởi Smiths Potato Crisps Company Ltd, được thành lập vào năm 1920, Frank Smith đóng gói khoai tây chiên kèm một gói muối trong túi giấy không thấm dầu, được bán quanh London. Mặt khác, miếng khoai tây chiên vẫn không có mùa vụ cho đến khi Joe "Spud" Murphy đổi mới, chủ sở hữu của công ty khoai tây chiên giòn Ailen Tayto, người vào những năm 1950 đã phát triển công nghệ thêm gia vị trong quá trình sản xuất. Sau một số thử nghiệm và sai sót, Murphy và nhân viên của mình Seamus Burke đã sản xuất khoai tây chiên tẩm gia vị đầu tiên trên thế giới: Phô mai & Hành tây và Muối & Giấm. Các công ty trên toàn thế giới đã tìm cách mua bản quyền đối với kỹ thuật của Tayto.</p>
            </div>
        </template>
   </BaseLayout>
</template>
<script>
import BaseLayout from './BaseLayout.vue'
export default {
  name: 'NewsDetailPage',
  components: {
    BaseLayout
  },
  data() {
   return {
    banner:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xq24xmAuz0phfkDm3HVixA44RL95PwuJwA&usqp=CAU',
    img : [
        {
            image:'https://haycafe.vn/wp-content/uploads/2022/01/Hinh-anh-cute.jpg'
        },
        {
            image:'https://i.pinimg.com/originals/85/c8/38/85c8384e9082008d1129fc8f73d65954.jpg'
        },
        {
            image:'https://thuthuatnhanh.com/wp-content/uploads/2019/04/anh-cute.jpg'
        }
    ],
   }
  }
}

</script>

<style>
.img {
    height: 200px !important;
    object-fit: cover;
    width: 100%;
}
</style>
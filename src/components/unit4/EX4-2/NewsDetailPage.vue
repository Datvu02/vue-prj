<template>
   <BaseLayout>
        <template #header>
            <div class="block">
                <el-carousel height="250px">
                    <el-carousel-item v-for="(item, index) in banner" :key="index">
                        <el-image :src="item.image" :fit="fit" class="imageCarousel"></el-image>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </template>

        <template #imageLeft>
             <el-image class="imageContent" :fit="fit" :src="imageL"></el-image>
        </template>
        
        <template #content>
            <div class="breadcrumb">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item><a href="">Trang chủ</a></el-breadcrumb-item>
                    <el-breadcrumb-item><a href="">Ẩm thực <i class="el-icon-knife-fork"></i></a></el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/">Khoai tây chiên</a></el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="content">
                <h1><strong>Tổng quan về khoai tây chiên</strong></h1>
                <img class="imgTocchien loaded"
                    width="100%"
                    height="300px"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEgmE4M5PKs-bFqfOrJu8u66ZagPoPFkvkRQ&usqp=CAU"
                    alt="">
                <p>Trong một ý tưởng bắt nguồn bởi Smiths Potato Crisps Company Ltd, được thành lập vào năm 1920, Frank Smith đóng gói khoai tây chiên kèm một gói muối trong túi giấy không thấm dầu, được bán quanh London. Mặt khác, miếng khoai tây chiên vẫn không có mùa vụ cho đến khi Joe "Spud" Murphy đổi mới, chủ sở hữu của công ty khoai tây chiên giòn Ailen Tayto, người vào những năm 1950 đã phát triển công nghệ thêm gia vị trong quá trình sản xuất. Sau một số thử nghiệm và sai sót, Murphy và nhân viên của mình Seamus Burke đã sản xuất khoai tây chiên tẩm gia vị đầu tiên trên thế giới: Phô mai & Hành tây và Muối & Giấm. Các công ty trên toàn thế giới đã tìm cách mua bản quyền đối với kỹ thuật của Tayto.</p>
            </div>
        </template>

        <template #imageRight>
             <el-image class="imageContent" :fit="fit" :src="imageR"></el-image>
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
            fit: 'cover',
            imageL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC9FGcI046Xt2TAbUKWjMEcRT4Lz5BsPSbxg&usqp=CAU',
            imageR:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThZBZyYEOjUr81XVUMW3oVVRLxjYIS7oIaEA&usqp=CAU',
            banner : [
                {
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xq24xmAuz0phfkDm3HVixA44RL95PwuJwA&usqp=CAU'
                },
                {
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZp6VaxAfghdg2noI4X_hoALAIIS7xCUflYw&usqp=CAU'
                },
                {
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ5wzHfAW_pJ6Y79wzGhgG47208dzqhDPu-Q&usqp=CAU'
                }
            ],
        }
    }
}
</script>

<style  scoped lang="scss">
    .el-carousel__item {
        .el-carousel__item:nth-child(2n) {
            background-color: #99a9bf;
        }
        .el-carousel__item:nth-child(2n+1) {
            background-color: #d3dce6;
        }
        .imageCarousel {
            width: 100%;
            height: 250px;
        }
    }
    .imageContent{
        width: 100%;
        height: 90vh;
    }
    .content{
        text-align: left;
        img{
            object-fit: cover;
        }
    }
</style>
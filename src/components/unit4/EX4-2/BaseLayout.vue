<template>
    <el-container>
        <el-header>
            <slot name="header"></slot>
        </el-header>
        <el-main>
            <el-menu :default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">Trang chủ</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">Thể thao</template>
                    <el-menu-item index="2-1">Bóng đá trong nước</el-menu-item>
                    <el-menu-item index="2-2">Bóng đá châu âu</el-menu-item>
                    <el-menu-item index="2-3">Võ thuật</el-menu-item>
                    <el-menu-item index="2-3">Các môn thể thao khác</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">Sức khỏe</template>
                    <el-menu-item index="3-1">Kiến thức giới tính</el-menu-item>
                    <el-menu-item index="3-2">Làm đẹp</el-menu-item>
                    <el-menu-item index="3-3">Đại dịch covid</el-menu-item>
                </el-submenu>
                <el-menu-item index="4">Pháp luật</el-menu-item>
                <el-menu-item index="5">Du lịch</el-menu-item>
                <el-menu-item index="6">Giáo dục</el-menu-item>
                <el-menu-item index="7">Văn hóa</el-menu-item>
                <el-menu-item index="8">Công nghệ</el-menu-item>
                <el-menu-item index="9">Giải trí</el-menu-item>
            </el-menu>
        </el-main>
        <el-row>
            <el-col :span="6">
                    <slot name="imageLeft"></slot>
            </el-col>
            <el-col :span="11">
                    <slot name="content"></slot>
            </el-col>
            <el-col :span="6">
                    <slot name="imageRight"></slot>
            </el-col>
        </el-row>
    </el-container>
</template>

<script>

export default {
  name: 'BaseLayout',
}

</script>

<style scoped lang="scss">
    .el-header {
    height: auto !important;
    padding:0 !important;
    }
    .el-col{
        margin: 0 5px;
    }
</style>
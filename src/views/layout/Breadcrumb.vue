<template>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breakcrumb">
        <el-breadcrumb-item :to="{ path: item.path }" v-for="(item,index) in brreadcrumbList" :key="index">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>

export default {
    data(){
        return {

        }
    },
    created(){
    },
    computed:{
        brreadcrumbList(){
            return this.$route.matched;
        }
    },
}
</script>

<style lang="scss" scoped>
.breakcrumb{
    padding:10px 0;
}
</style>


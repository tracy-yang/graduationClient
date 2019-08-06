<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }" v-for="(item,index) in Router" :key="index">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
import Router from '@/router/index'
export default {
    data(){
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>

</style>


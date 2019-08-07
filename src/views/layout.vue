<template>
    <el-container class="main-wrapper"> 
         <el-aside :class="[isCollapse?'collapse':'','main-side']" width="200px">
            <side-bar />
         </el-aside>
        <el-container>
            <el-header class="main-header">
                <nav-bar />
            </el-header>
            <el-main class="main-container">
                <breadcrumb />
                <router-view class="router-view"/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import sideBar from '@/views/layout/sideBar'
import navBar from '@/views/layout/navBar'
import Breadcrumb from '@/views/layout/Breadcrumb'

export default {
    components:{sideBar , navBar , Breadcrumb},
    data(){
        return {

        }
    },
    computed:{
        isCollapse(){
            return this.$store.state.isCollapse
        }
    }

}
</script>

<style lang="scss" scoped>
$aside-color:#545c64;
.main-wrapper{
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;

    .main-side{
        border-right:none;
        background:$aside-color;
    }

    .main-header{
        background:#fff;
        height: initial !important;
    }
    .main-container{
        background:#f2f2f2;
    }
    .router-view{
        padding:10px;
        background:#fff;
    }
    .footer{
        line-height: 60px;
        text-align: center;
        background:#f2f2f2;
    }
}

</style>

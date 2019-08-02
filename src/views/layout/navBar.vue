<template>
    <div>
        <div class="navbar-header-info">
            <i class="el-icon-bell"></i>
            <div class="navbar-header-img-wrapper">
                <img src="http://n.sinaimg.cn/translate/w402h363/20180213/bg7r-fyrpeie1413753.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.navbar-header-info{
    padding:10px 0;
    display:flex;
    justify-content: flex-end;
    
    .el-icon-bell{
        font-size: 22px;
        margin-right: 10px;
    }
    .navbar-header-img-wrapper{
        width:24px;
        height:24px;
        border-radius: 50%;
        overflow: hidden;

        >img{
            width:100%;
            height:100%;
        }
    }
}
</style>

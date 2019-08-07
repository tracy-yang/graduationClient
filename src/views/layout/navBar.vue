<template>
    <div>
        <div class="navbar-header-info">
            <div>
                <i class="el-icon-s-fold" @click="collapse"></i>
            </div>
            <div class="right">
                <i class="el-icon-bell"></i>
                <div class="navbar-header-img-wrapper">
                    <img src="http://n.sinaimg.cn/translate/w402h363/20180213/bg7r-fyrpeie1413753.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    created(){
    },
    methods:{
        collapse(){
            this.$store.dispatch('collapse', !this.$store.state.isCollapse);
        }

    }
}
</script>

<style lang="scss" scoped>
.navbar-header-info{
    padding:10px 0;
    display:flex;
    justify-content: space-between;

    .el-icon-s-fold{
        font-size: 20px;
    }
    .right{
        display: flex;
    
        .el-icon-bell{
            font-size: 22px;
            margin-right: 10px;
        }
        .navbar-header-img-wrapper{
            display: inline-block;
            width:24px;
            height:24px;
            border-radius: 50%;
            overflow: hidden;

            >img{
                vertical-align: middle;
                width:100%;
                height:100%;
            }
        }
    }
}
</style>

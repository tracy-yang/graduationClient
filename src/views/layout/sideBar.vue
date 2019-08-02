<template>
    <div>
        <h3>微站商户通</h3>
        <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" unique-opened @open="openMenu">
            <template v-for="(item,index) in menuList">
                <template v-if="!item.children || !item.children.length">
                    <el-menu-item  :index="index + ''" :key="index">
                        <i class="el-icon-menu"></i>
                        <span slot="title">{{item.name}}</span>
                    </el-menu-item>
                </template>
                <template v-else>
                    <el-submenu :index="index + ''"  :key="index">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>{{item.name}}</span>
                        </template>
                        <el-menu-item v-for="(sub,subIndex) in item.children" :key="subIndex">{{sub.name}}</el-menu-item>
                    </el-submenu>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
export default {
    data(){
        return {
            activeIndex:'0',
            menuList:[
                {
                    name:'商品管理',
                },
                {
                    name:'客户管理',
                    children:[
                        {
                            name:'客户列表',
                        },
                    ]
                },
                {
                    name:'订单管理',
                    children:[
                        {
                            name:'全部订单',
                        },
                        {
                            name:'退款申请',
                        },
                        {
                            name:'退款完成',
                        },
                    ]
                },
                {
                    name:'商户管理',
                    children:[
                        {
                            name:'入驻中',
                        },
                        {
                            name:'暂停中',
                        },
                        {
                            name:'商户分类',
                        },
                        {
                            name:'商户等级',
                        },
                        {
                            name:'基础设置',
                        },
                    ]
                },
                {
                    name:'统计',
                    children:[
                        {
                            name:'销售统计',
                        },
                        {
                            name:'消费排行',
                        },
                    ]
                },
            ],
        }
    },
    methods:{
        openMenu(){

        }
    }

}
</script>

<style lang="scss" scoped>
h3{
    font-size: 18px;
    background:#545c64;
    color:#fff;
    text-align: center;
    padding: 20px 0 5px;
}
</style>

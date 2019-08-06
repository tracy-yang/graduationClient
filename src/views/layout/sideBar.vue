<template>
    <div>
        <h3>微站商户通</h3>
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" unique-opened router>
            <template v-for="(item,menuIndex) in menuList">
                <template v-if="!item.children || !item.children.length ">
                    <el-menu-item :index="item.path" :key="item.name" v-if="!item.hidden">
                        <i class="el-icon-menu"></i>
                        <span slot="title">{{item.name}}</span>
                    </el-menu-item>
                </template>
                <template v-else-if="item.children.length == 1 && item.children[0].hidden">
                    <el-menu-item  :index="item.path + '/' + item.children[0].path" :key="item.name" :route="item.path"> 
                        <i class="el-icon-menu"></i>
                        <span slot="title">{{item.name}}</span>
                    </el-menu-item>
                </template>
                <template v-else>
                    <el-submenu :key="item.name" :index="item.path">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>{{item.name}}</span>
                        </template>
                        <template v-for="(sub,subIndex) in item.children">
                            <el-menu-item  :key="subIndex" :index="item.path + '/' + sub.path" v-if="!sub.hidden">{{sub.name}}</el-menu-item>
                        </template>
                    </el-submenu>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import router from '../../router/index'

export default {
    data(){
        return {
            activeIndex:'0',
            treeData:[
                {
                    id:12,
                    parentId:1,
                    name:'第二个子节点'
                },
                {
                    id:1,
                    name:'第一个parent',
                },
                 {
                    id:11,
                    parentId:1,
                    name:'第一个子节点'
                },
                
            ]
        }

    },
    created(){
        this.showRouter();
        // this.processTreeData();
    },
    methods:{
        // 显示所有路由
        showRouter () {
            this.menuList = router.options.routes
        },

        toDetail(route){
            console.log(route)
            this.$router.push({path:'/commodity/index'})
        },

        processTreeData(){
            let result = [];
            for(let i = 0, len = this.treeData.length; i < len ; i++){
                let item = this.treeData[i];
                if(!item.parentId){
                    result[item.id] = item;
                }
            }
            this.treeData.forEach(item =>{
                if(result.some(sub => sub.id == item.parentId)){
                    if(!result[item.parentId]['children']){
                        result[item.parentId]['children'] = [item]
                    }else{
                        result[item.parentId]['children'].push(item)
                    }

                }
            })

        },

        _sort(property){
            return (a,b)=>{
                return a[property] - b[property];
            }
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

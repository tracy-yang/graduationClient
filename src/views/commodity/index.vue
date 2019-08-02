<template>
    <div>
         <el-tabs v-model="activeTabIndex" @tab-click="handleClick">
            <el-tab-pane :label="item.name" :name="item.id" v-for="(item,index) in tabList" :key="index">
                <tab-item v-if="activeTabIndex == index"/>
            </el-tab-pane>
        </el-tabs>
      
    </div>
</template>

<script>
import tabItem from './comp/tabItem'
export default {
    components:{tabItem},
    data(){
        return {
            tabList:[
                {
                    name:'待审核',
                    id:'0',
                },
                {
                    name:'出售中',
                    id:'1',
                },
            ],
            activeTabIndex:'0',
           
        }
    },
    methods:{
        handleClick(tab,event){
            this.activeTabIndex = tab.name;
        }
    }

}
</script>

<style lang="scss" scoped>
.query-input{
    width:200px;
}
</style>

<template>
    <div>
        <el-tabs v-model="activeTabIndex" @tab-click="handleClick">
            <el-tab-pane :label="item.name" :name="item.id" v-for="(item,index) in tabList" :key="index">
                <add-tab-item v-if="activeTabIndex == index" :type="item.id" />
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import AddTabItem from './comp/AddTabItem'

export default {
    components:{ AddTabItem },
    data(){
        return {
            tabList:[
                {
                    name:'基本',
                    id:'0',
                },
                {
                    name:'库存/规格',
                    id:'1'
                }
            ],
            activeTabIndex:'0'
        }
    },
    methods:{
        handleClick(tab,e){
            this.activeTabIndex = tab.name;
        }
    }
    
}
</script>


<style lang="scss" scoped>

</style>
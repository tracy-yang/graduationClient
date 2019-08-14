<template>
    <div>
        <div v-if="type == 1">
            <el-form :model="form" rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
                <el-form-item label="商品名称">
                    
                </el-form-item>
            </el-form>
        </div>
        <div v-else>

        </div>
    </div>
</template>

<script>
export default {
    props:{
        type:{
            type:String,
            default:'1'
        }
    },
    data(){
        return {
            form:{

            }
        }
    }
    
}
</script>

<style lang="scss" scoped>

</style>
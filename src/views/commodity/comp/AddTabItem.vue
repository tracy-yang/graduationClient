<template>
    <div>
        <div v-if="type == 0">
            <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
                <el-form-item label="商品名称" prop="name">
                    <el-input v-model="form.name" placeholder="请输入商品名称"></el-input>
                </el-form-item>
                <el-form-item label="商品类型" prop="type">
                    <el-radio-group v-model="form.type">
                        <el-radio label="0">零售商品</el-radio>
                        <el-radio label="1">批发商品</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="零售价格" prop="retailPrice" v-if="form.type === '0'">
                    <el-input v-model="form.retailPrice" placeholder="请输入商品价格"></el-input>
                </el-form-item>
                <el-form-item label="批发价格" v-if="form.type === '1'">
                    <el-button size="mini">添加价格区间</el-button>
                    <el-button size="mini">移除价格区间</el-button>
                    <div>
                        <label for="">购买</label>
                        <el-input></el-input>
                        <label>件及以上</label>
                        <el-input></el-input>
                        <label for=""></label>
                    </div>
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
            default:'0'
        }
    },
    data(){
        return {
            form:{
                name:'',
                type:'0',
                retailPrice:'', // 零售价
            },
            rules:{

            }
        }
    },
    created(){
        console.log(this.type,3333);
    }
    
}
</script>

<style lang="scss" scoped>

</style>
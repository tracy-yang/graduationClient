<template>
    <div>
        <table-layout>
            <template #btn>
                <el-button type="primary" @click="showDialog">添加品牌</el-button>
            </template>
            <template #table>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="brandName" label="品牌名称"> </el-table-column>
                    <el-table-column prop="" label="商品数"> </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button type="text">编辑</el-button> 
                            <el-button type="text">删除</el-button>  
                        </template>
                    </el-table-column>
                </el-table>
            </template>
        </table-layout>

        <el-dialog :title="isEdit?'修改':'新增'" :visible.sync="dialogVisible" width="50%">
            <el-form :model="form" :rules="rules" label-width="100px" ref="form">
                <el-form-item label="品牌名称" prop="name">
                    <el-input v-model="form.name" placeholder="请输入品牌名称"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancel('form')">取消</el-button>
                <el-button type="primary" @click="submit('form')">确定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import TableLayout from '@/components/tableLayout'
import { getBrandList } from '@/api/commodity'
export default {
    components: { TableLayout , test },
    data(){
        return {
            tableData:[],
            dialogVisible:false,
            isEdit:false,
            rules:{
                name:[{required:true,message:'请输入品牌名称',trigger:'blur'}]
            },
            form:{
                name:''
            }
        }
    },
    created(){
        this.init();
    },
    methods:{
        init(){
            this.getBrandList();
        },

        getBrandList(){
            getBrandList().then(res =>{
                this.tableData = res.data.list || [];
            })
        },
      

        showDialog(){
            this.dialogVisible = true;
        },

        cancel(formName){
            this.$refs[formName].resetFields();
            this.dialogVisible = false;
        },

        submit(formName){
            this.$refs[formName].validate(valid=>{
                if(valid){

                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>


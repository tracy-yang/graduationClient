<template>
    <div>
        <el-button type="primary" @click="showDilaog">添加新分类</el-button>
        <el-row>
            <el-col :span="12">
                <el-tree :data="treeData" node-key="id" class="tree">
                    <div class="tree-node-wrapper" slot-scope="{ node, data }">
                        <span>{{ node.label }}</span>
                        <span>
                            <el-button type="text"  @click.stop="() => append(data)" class="el-icon-plus" v-if="node.level === 1"> 新增 </el-button>
                            <el-button type="text"  @click.stop="() => edit(node, data)" class="el-icon-edit"> 编辑 </el-button>
                            <el-button type="text"  @click.stop="() => remove(node, data)" class="el-icon-delete"> 删除 </el-button>
                        </span>
                    </div>
                </el-tree>
            </el-col>
        </el-row>

        <div v-if="dialogVisible">
            <el-dialog :title="isEdit?'编辑':'新增'" :visible.sync="dialogVisible" width="50%">
                <el-form :model="form" ref="form" :rules="rules" label-width="80px">
                    <el-form-item label="名称" prop="name">
                        <el-input v-model="form.name" placeholder="请输入名称" maxlength="30"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="cancel('form')">取 消</el-button>
                    <el-button type="primary" @click="submit('form')">确 定</el-button>
                </span>
            </el-dialog>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            // treeData:[],
            dialogVisible:false,
            isEdit:false,
            form:{
                name:''
            },
            rules:{
                name:[
                    { required:true,message:'请输入名称',trigger:'blur'}
                ]
            },
            treeData: [{
                label: '一级 1',
                children: [{
                    label: '二级 1-1',
                   
                }]
                }, {
                label: '一级 2',
                children: [{
                    label: '二级 2-1',
                    children: [{
                    label: '三级 2-1-1'
                    }]
                }, {
                    label: '二级 2-2',
                    children: [{
                    label: '三级 2-2-1'
                    }]
                }]
                }, {
                label: '一级 3',
                children: [{
                    label: '二级 3-1',
                    children: [{
                    label: '三级 3-1-1'
                    }]
                }, {
                    label: '二级 3-2',
                    children: [{
                    label: '三级 3-2-1'
                    }]
                }]
                }],
        }
    },
    methods:{
        append(data){
            this.showDilaog();
        },

        edit(node,data){
            console.log(node,data,3333)
            this.showDilaog();
            this.isEdit = true;
            this.form.name = data.label;
        },

        remove(node,data){
            this.$confirm('是否确认删除该分类?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(()=>{

            })
        },

        showDilaog(){
            this.isEdit = false;
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
.tree{
    margin-top:20px;
}
.tree-node-wrapper{
    display: flex;
    justify-content: space-between;
    width: 100%;

    span:first-of-type{
        font-size: 14px;
        line-height: 40px;
    }
}
</style>


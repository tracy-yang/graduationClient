<template>
    <div>
        <table-layout query-align="between">
            <template v-slot:query>
                <el-button type="primary" @click="toAppendPage">添加商品</el-button>
                <el-input placeholder="请输入内容" v-model="form.name" class="query-input">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </template>
            <template #btn>
                    <el-button type="primary" v-if="type === '0'">批量审核通过</el-button>
                    <el-button v-if="type === '3'">上架</el-button>
                    <el-button v-if="type === '1' || type === '2'">下架</el-button>
                    <el-button v-if="type <= 4">批量分类</el-button>
                    <el-button v-if="type === '4'">恢复到仓库</el-button>
                    <el-button v-if="type === '4'">彻底删除</el-button>
                    <el-button v-if="type < 4">删除</el-button>
            </template>
            <template #table>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column type="index" label="序号"  width="55"></el-table-column>
                    <el-table-column label="商品" >
                        <template slot-scope="scope">

                        </template>
                    </el-table-column>
                    <el-table-column prop="" label="所属"></el-table-column>
                    <el-table-column prop="" label="价格"></el-table-column>
                    <el-table-column prop="" label="库存"></el-table-column>
                    <el-table-column prop="" label="销量"></el-table-column>
                     <el-table-column prop="" label="状态"></el-table-column>
                    <el-table-column prop="" label="操作">
                        <template slot-scope="scope">
                            <el-button type="text">上架</el-button>
                        </template>
                    </el-table-column>
                 </el-table>
                 <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="pagination.pageNum"
                    :page-sizes="[20,30,50]"
                    :page-size="pagination.pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="pagination.total">
                </el-pagination>
            </template>
        </table-layout>
    </div>
</template>

<script>
import tableLayout from '@/components/tableLayout'
export default {
    components:{tableLayout},
    props:{
        type:{
            type:String,
            default:'0'
        }
    },
    data(){
        return {
            form:{
                name:''
            },
            tableData:[],
            pagination:{
                pageNum:1,
                pageSize:20,
                total:0
            }
        }
    },
    methods:{
        toAppendPage(){
            this.$router.push({name:'添加商品'})
        },

        handleSizeChange(){

        },
        handleCurrentChange(){

        }


    }
}
</script>

<style lang="scss" scoped>
.query-input{
    width:200px;
}
</style>

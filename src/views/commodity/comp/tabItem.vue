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
                    <el-button v-if="type === '3'" @click="putSale(1)">上架</el-button>
                    <el-button v-if="type === '1'" @click="putSale(3)">下架</el-button>
                    <!-- <el-button v-if="type <= 4">批量分类</el-button> -->
                    <el-button v-if="type === '4'" @click="putSale(3)">恢复到仓库</el-button>
                    <el-button v-if="type === '4'">彻底删除</el-button>
                    <el-button v-if="type < 4" @click="deleteRow(false)">删除</el-button>
            </template>
            <template #table>
                <el-table :data="tableData" style="width: 100%" @selection-change="selectedTableColumn">
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column type="index" label="序号"  width="55"></el-table-column>
                    <el-table-column label="商品" >
                        <template slot-scope="scope">
                            <img :src="scope.row.filePath" alt="" class="cover-img">
                            {{scope.row.name}}
                        </template>
                    </el-table-column>
                    <!-- <el-table-column prop="" label="所属"></el-table-column> -->
                    <el-table-column prop="price" label="价格" width="80"></el-table-column>
                    <el-table-column prop="stock" label="库存" width="80"></el-table-column>
                    <el-table-column prop="sales" label="销量" width="80"></el-table-column>
                    <el-table-column label="状态" width="80">
                        <template slot-scope="scope">
                              {{typeList[Number(scope.row.type)]}}
                        </template>
                     </el-table-column>
                    <el-table-column prop="" label="操作" width="140">
                        <template slot-scope="scope">
                            <el-button type="text" @click="changeType(scope.row)">{{optionsList[Number(scope.row.type)]}}</el-button>
                            <el-button type="text" v-if="scope.row.type == 2 || scope.row.type == 3 || scope.row.type == 4">编辑</el-button>
                            <el-button type="text" @click="deleteRow(true,scope.row)">删除</el-button>
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
import { getCommodityList , updateType , deleteCommodity } from '@/api/commodity'

export default {
    components:{tableLayout},
    props:{
        type:{
            type:String,
            default:'1'
        }
    },
    data(){
        return {
            form:{
                name:''
            },
            typeList:['待审核','已上架','已售罄','待上架','已作废'],
            optionsList:['','下架','','上架','恢复'],
            tableData:[],
            selectedColumnList:[] , 
            pagination:{
                pageNum:1,
                pageSize:20,
                total:0
            }
        }
    },
    created(){
        this.init();
    },
    methods:{
        init(){
            this.getCommodityList()
        },

        // 获取商品列表
        getCommodityList(){
            getCommodityList({name:'',type:this.type}).then(res =>{
                this.tableData = res.data.list || [];
                this.pagination.total = this.tableData.length || 0;
            })
        },

        // 表格多选
        selectedTableColumn(val){
            this.selectedColumnList = val;
        },

        // 上架或下架或恢复
        putSale(status){
            if(!this.selectedColumnList.length){
                return this.$message.error('请至少勾选一项！');
            }
            let list = this.selectedColumnList.map(item => item.id);
            this.putSaleMethod(list,status)
        },
        
        // 表格里的上架下架或恢复
        changeType(row){
             let list = [row.id],
                status = row.type == '3' ? '1' : '3';
            this.$confirm('是否确定要进行此项操作？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.putSaleMethod(list,status);
            })
           
        },

        // 上架下架的接口
        putSaleMethod(list,status){
            updateType({id:list,type:status}).then(res =>{
                this.$message.success(res.message);
                this.getCommodityList();
            })  
        },

        deleteRow(flag,row){
            if(!flag){ // 批量删除
                 if(!this.selectedColumnList.length){
                    return this.$message.error('请至少勾选一项！');
                }
            }
            let list = flag ? [row.id] : this.selectedColumnList.map(item => item.id);
            this.$confirm('是否确定删除？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                if(list.length){
                    deleteCommodity({ids:list}).then(data =>{
                        this.$message.success(data.message);
                        this.getCommodityList();
                    })
                }
            })
        },

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
.cover-img{
    width:60px;
    height:60px;
}
</style>

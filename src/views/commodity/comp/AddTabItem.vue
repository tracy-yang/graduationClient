<template>
    <div>
        <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
            <template v-if="type == 0">
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
                    <p class="remark">备注：批发商品请至少设置一组价格区间，才能正常发布信息。最多只能添加三个区间价格</p>
                    <el-button @click="addPrice" size="mini" :disabled="form.priceList.length == 3">添加价格区间</el-button>
                    <div v-for="(item,index) in form.priceList" :key="index">
                        <label for="">购买</label>
                        <el-input class="mini-input" size="mini" v-model.number="item.amount"></el-input>
                        <label>件及以上</label>
                        <el-input class="mini-input" size="mini" v-model.number="item.price"></el-input>
                        <label for="">元/件</label>
                        <el-button @click="removePrice(index)" icon="el-icon-minus" circle  size="mini" type="primary"></el-button>
                    </div>
                </el-form-item>
                <el-form-item label="品牌">
                        <el-select v-model="form.brand" placeholder="请选择">
                        <el-option  v-for="item in brandList"  :key="item.value"  :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="代理价">
                    <el-input v-model="form.agentPrice"></el-input>
                </el-form-item>
                <el-form-item label="商品分类">
                    <el-select v-model="form.type" placeholder="请选择">
                        <el-option  v-for="item in categoryList"  :key="item.value"  :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="商品图片">
                    <p class="remark">尺寸建议为：640 * 640</p>
                    <el-upload
                        action="https://jsonplaceholder.typicode.com/posts/"
                        list-type="picture-card"
                        :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="运费设置">
                    <el-select v-model="form.shippingCost" placeholder="请选择">
                        <el-option  v-for="item in shippingCostList"  :key="item.value"  :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="上架">
                    <el-radio-group v-model="form.isSale">
                        <el-radio label="1">上架</el-radio>
                        <el-radio label="0">否</el-radio>
                    </el-radio-group>
                </el-form-item>
            </template>
            <template v-else>
                <el-form-item label="重量">
                    <el-input v-model="form.weight" class="half-input"></el-input> 克
                </el-form-item>
                <el-form-item label="库存">
                    <el-input v-model="form.stock"></el-input>
                </el-form-item>
            </template>
        </el-form>
        <div class="btn-group">
            <el-button type="primary">保存</el-button>
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
                priceList:[{}], // 批发价
                brand:'',
                shippingCost:'', // 运费
                weight:'' ,
                stock:'',
            },
            brandList:[],
            categoryList:[], // 商品分类
            shippingCostList:[], // 运费列表
            rules:{

            }
        }
    },
    created(){
        console.log(this.type,3333);
    },
    methods:{
        // 添加价格区间
        addPrice(){ 
            this.form.priceList.push({});
        },

        // 移除价格区间
        removePrice(index){
            this.form.priceList.splice(index,1);
        },

        handleRemove(){

        }
    }
    
}
</script>

<style lang="scss" scoped>
$primary-color:#409EFF;
.icon{
    font-size: 18px;
    color:$primary-color;
    cursor: pointer;
    margin-left: 4px;
}

</style>
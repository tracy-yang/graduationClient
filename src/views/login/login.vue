<template>
    <div>
        <h2>微站商户通</h2>
        <el-form :model="form" ref="form" label-width="80">
            <el-form-item label="账户" prop="name">
                <el-input v-model="form.name" ></el-input>
            </el-form-item>
             <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" type="password"></el-input>
            </el-form-item>
            <el-row>
                <el-col :span="12">
                    <el-checkbox v-model="form.autoLogin">自动登陆</el-checkbox>
                </el-col>
                <el-col :span="12">
                    <a href="">忘记密码</a>
                </el-col>
            </el-row>
            <el-button type="primary">登陆</el-button>
        </el-form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            form:{
                name:'',
                password:'',
                autoLogin:false
            }
        }
    },
    methods:{

    }
}
</script>

<style>

</style>

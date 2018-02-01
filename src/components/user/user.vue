<template>
  <div>
    <span>用户管理:</span>
    <el-form :model="ruleForm2" status-icon  ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model.number="ruleForm2.age"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        <!--<el-button @click="resetForm('ruleForm2')">重置</el-button>-->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    methods: {

    },
    data() {
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        }
      }
    },
    methods: {
      onSubmit() {

      },
      submitForm(){
        console.log(this.ruleForm2)
      }
    }
  }
</script>

<style>
</style>

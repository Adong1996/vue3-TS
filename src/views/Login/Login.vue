<template>
  <div class="login">
    <h1 class="title">vue3+TS 后台管理系统</h1>
    <el-tabs type="border-card" :stretch="true" @tab-click="isCut">
      <el-tab-pane label="user">
        <template #label>
          <span><i class="el-icon-user"></i> 账号登录</span>
        </template>
        <el-form
          class="demo-ruleForm"
          label-width="80px"
          :model="accountUser"
          ref="userFrom"
        >
          <el-form-item :rules="rules.name" label="账号" prop="name">
            <el-input v-model="accountUser.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password" :rules="rules.password">
            <el-input v-model="accountUser.password"></el-input>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <el-form
          :model="accountPhone"
          label-width="80px"
          class="demo-ruleForm"
          ref="phoneFrom"
        >
          <el-form-item label="手机号" prop="phone" :rules="rules.phone">
            <el-input v-model="accountPhone.phone"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code" :rules="rules.code">
            <div class="code">
              <el-input v-model="accountPhone.code"></el-input>
              <el-button type="primary" class="get-btn">获取验证码</el-button>
            </div>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
    <footer>
      <div class="center">
        <el-checkbox v-model="isCheck" @change="onCheck">记住密码</el-checkbox>
        <el-link type="primary">忘记密码</el-link>
      </div>
      <el-button type="primary" @click="logIn">立即登录</el-button>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'

import type { ElForm } from 'element-plus'

import { rules } from './account-config'

import { useStore } from '@/store/index'
import { loginAll } from './login'
import { localStorageGet } from '@/utils/localStorage'
export default defineComponent({
  setup() {
    //账号验证
    const accountUser = reactive({
      name: localStorageGet('user')?.name || '',
      password: localStorageGet('user')?.password || ''
    })
    //手机验证
    const accountPhone = reactive({
      phone: localStorageGet('phone')?.phone || '',
      code: localStorageGet('phone')?.code || ''
    })
    //却换登录方式
    const labels = ref('user')
    const isCut = (tab: any) => {
      labels.value = tab.props.label
    }
    // 登录
    const userFrom = ref<InstanceType<typeof ElForm>>()
    const phoneFrom = ref<InstanceType<typeof ElForm>>()
    const store = useStore()
    const logIn = () => {
      let result = loginAll(labels.value, userFrom.value)
      if (result) {
        store.dispatch('login/loginGo', { ...accountUser })
      }
    }
    //记住密码-本地缓存
    const isCheck = ref(false)
    const onCheck = () => {
      if (isCheck.value) {
        if (labels.value === 'user') {
          loginAll(labels.value, userFrom.value, accountUser, isCheck.value)
        } else {
          loginAll(labels.value, userFrom.value, accountPhone, isCheck.value)
        }
      }
    }
    return {
      accountUser,
      accountPhone,
      rules,
      labels,
      isCut,
      logIn,
      userFrom,
      phoneFrom,
      isCheck,
      onCheck
    }
  }
})
</script>
<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
  .title {
    font-size: 30px;
    font-weight: 600;
    padding-bottom: 20px;
    margin-top: -180px;
  }
  .code {
    position: absolute;
    display: flex;
    .get-btn {
      margin-left: 5px;
    }
  }
  footer {
    width: 316px;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    .center {
      padding-bottom: 5px;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>

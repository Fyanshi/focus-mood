<!--
 * @Descripttion: 
 * @Author: jinhua
 * @Date: 2020-09-10 22:02:51
 * @LastEditors: jinhua
 * @LastEditTime: 2020-09-10 22:35:42
-->

<template>
<div class="login">
  <van-empty description="关注情绪" />
  <transition>
    <div class="" v-if="hasRegister">
      <van-form @submit="onSubmit">
        <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>

  </transition>
  <transition>
    <div class="" v-if="!hasRegister">
      <van-form @submit="onSubmit">
        <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
        <van-field v-model="username" name="邀请码" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写邀请码' }]" />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>

  </transition>
  <div class="register" @click="register">
    <a v-show="!hasRegister"> 登录</a>
    <a v-show="hasRegister">注册</a>
  </div>
  <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
    jinhua
  </van-divider>
</div>
</template>

<script>
import {login} from '@/api/login.js';
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      hasRegister:false,//
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
      console.log(this.$axios);
      login({}).then((result) => {
        console.log(result);
      }).catch((err) => {
        console.log(err);
      });
    },
    register(){
      this.hasRegister = !this.hasRegister;
    }
  },
}
</script>

<style lang="less" scoped>

.register {
  display: flex;
  justify-content: center;
}
</style>

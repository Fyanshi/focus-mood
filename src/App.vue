<!--
 * @Descripttion:
 * @Author: jinhua
 * @Date: 2020-09-10 21:50:45
 * @LastEditors: jinhua
 * @LastEditTime: 2020-09-11 23:10:25
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  mounted() {
    const obj = {
      focus: '1234',
    };
    console.log(this.$_.get(obj, 'focus', null));
  },
};
</script>
<style lang="less">
html,
body {
  position: relative;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>

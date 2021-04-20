<template>
  <div class="mood-list">
    <div class="container">
      <div class="header-items-group">
        <a class="header-items">
          <!-- TODO 心情卡片列表 -->
          <span class="iconfont iconliebiao-xiangqingxbiaogetianchong"></span>
        </a>
        <a class="header-items"><span class="iconfont icontubiao"></span></a>
      </div>
      <div class="content-wrap">
        <ul class="mood-group">
          <li class="mood-item">
            <span class="iconfont icontubiao"></span>
            <span>2020-09-12 10:16</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mood-list',
  data() {
    return {
      value: 50,
    };
  },
  methods: {
    onChange(value) {
      console.log(`当前值：${value}`);
    },
  },
};
</script>

<style lang="less" scoped>
@base: #74a4f5;

.mood-list {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: @base;
  padding: 1.6rem 1rem;

  .container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .header-items-group {
      display: flex;
      justify-content: flex-start;

      a {
        padding: 0.825rem;

        .iconfont {
          color: #fff;
          font-size: 1.4rem;
        }
      }
    }

    .content-wrap {
      flex-grow: 1;
      background-color: #fff;
      border-radius: 1rem;
      overflow: scroll;

      .mood-group {
        width: 100%;

        .mood-item {
          padding: 0.625rem;
          border-radius: 1rem;
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>

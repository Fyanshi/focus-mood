<!--
 * @Descripttion: 关于我的
 * @Author: jinhua
 * @Date: 2020-09-10 22:01:32
 * @LastEditors: jinhua
 * @LastEditTime: 2020-09-12 10:05:40
-->
<template>
<div class="home">
  <div class="container">
    <div class="header-items-group">
      <a class="header-items">
        <!-- TODO 心情卡片列表 -->
        <span class="iconfont iconliebiao-xiangqingxbiaogetianchong"> </span>
      </a>
      <a class="header-items"><span class="iconfont icontubiao"> </span></a>
    </div>
    <div class="content-wrap">
      <div class="title">感觉如何？</div>
      <div class="calendar">
        <a><span class="iconfont iconjia"></span>
          <span>2020-09-10 22:39</span>
        </a>
      </div>
      <div class="mood-wrap">
        <span class="iconfont iconkaixin"></span>
      </div>
      <div class="title">开心</div>
      <div class="slider-wrap">
        <van-slider v-model="value" bar-height="10px" active-color="#74a4f5">
          <template #button>
            <div class="custom-button">
              <span class="iconfont icontubiao"></span>
            </div>
          </template>
        </van-slider>
      </div>
      <div class="options-group">
        <div class="options-item">继续</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      value: 50,
    }
  },
  methods: {
    onChange(value) {
      // Toast('当前值：' + value);
    },
  },
}
</script>

<style lang="less" scoped>
@base: #74a4f5;

.home {
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
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .title {
        font-size: 1.2rem;
        font-weight: 400;
        width: 100%;
        text-align: center;
        padding: 0.625rem 0;
      }

      .calendar {
        width: auto;
        margin: 0 auto;
        display: flex;
        justify-content: center;

      }

      .mood-wrap {
        display: flex;
        justify-content: center;
        padding: 3rem 0;

        .iconfont{
          font-size: 8rem;
        }
      }

      .slider-wrap {
        padding: 1rem;

        .custom-button {
          width: 26px;
          color: #fff;
          font-size: 10px;
          line-height: 18px;
          text-align: center;
          background-color: #74a4f5;
          border-radius: 100px;
        }
      }

      .options-group {
        width: 100%;

        .options-item {
          background-color: #74a4f5;
          padding: 0.625rem;
          border-radius: 1.25rem;
          color: #fff;
          text-align: center;
          margin: 1rem;

        }
      }

    }
  }

}
</style>

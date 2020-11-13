<!--
 * @Descripttion: 
 * @Author: jinhua
 * @Date: 2020-09-12 10:09:49
 * @LastEditors: jinhua
 * @LastEditTime: 2020-09-12 22:54:46
-->
<template>
<div class="week-line">
  <div class="container">
    <div class="header-items-group">
      <a class="header-items">
        <!-- TODO 心情卡片列表 -->
        <span class="iconfont iconliebiao-xiangqingxbiaogetianchong"> </span>
      </a>
      <a class="header-items"><span class="iconfont icontubiao"> </span></a>
    </div>
    <div class="content-wrap">
      <div class="calendar-wrap">
        <ve-line :data="chartData"></ve-line>
      </div>
      <ul class="mood-group">
        <li class="mood-item">
          <span class="iconfont icontubiao"></span>
          <span>2020-09-12 10:16</span>
        </li>
        <li class="mood-item">
          <span class="iconfont icontubiao"></span>
          <span>2020-09-12 10:16</span>
        </li>
        <li class="mood-item">
          <span class="iconfont icontubiao"></span>
          <span>2020-09-12 10:16</span>
        </li>
        <li class="mood-item">
          <span class="iconfont icontubiao"></span>
          <span>2020-09-12 10:16</span>
        </li>
        <li class="mood-item">
          <span class="iconfont icontubiao"></span>
          <span>2020-09-12 10:16</span>
        </li>
        <li class="mood-item">
          <span class="iconfont icontubiao"></span>
          <span>2020-09-12 10:16</span>
        </li>
        <li class="mood-item">
          <span class="iconfont icontubiao"></span>
          <span>2020-09-12 10:16</span>
        </li>
        <li class="mood-item">
          <span class="iconfont icontubiao"></span>
          <span>2020-09-12 10:16</span>
        </li>
        <li class="mood-item">
          <span class="iconfont icontubiao"></span>
          <span>2020-09-12 10:16</span>
        </li>
        <li class="mood-item">
          <span class="iconfont icontubiao"></span>
          <span>2020-09-12 10:16</span>
        </li>
        <li class="mood-item">
          <span class="iconfont icontubiao"></span>
          <span>2020-09-12 10:16</span>
        </li>
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
  name: 'week-line',
  data() {
    return {
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [{
            '日期': '1/1',
            '访问用户': 1393,
            '下单用户': 1093,
            '下单率': 0.32
          },
          {
            '日期': '1/2',
            '访问用户': 3530,
            '下单用户': 3230,
            '下单率': 0.26
          },
          {
            '日期': '1/3',
            '访问用户': 2923,
            '下单用户': 2623,
            '下单率': 0.76
          },
          {
            '日期': '1/4',
            '访问用户': 1723,
            '下单用户': 1423,
            '下单率': 0.49
          },
          {
            '日期': '1/5',
            '访问用户': 3792,
            '下单用户': 3492,
            '下单率': 0.323
          },
          {
            '日期': '1/6',
            '访问用户': 4593,
            '下单用户': 4293,
            '下单率': 0.78
          }
        ]
      }
    }
  },
  components: {

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

// @import '@/assets/base.less';

.week-line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: @base;
  padding: 1.6rem 1rem;
  overflow: hidden;

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
      // background-color: #fff;
      border-radius: 1rem;
      overflow: scroll;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      overflow: hidden;

      .calendar-wrap {
        width: 100%;
        height: 50%;
        flex: 1;
        border-radius: 1rem;
        background-color: #fff;
        margin-bottom: 5%;
      }

      .mood-group {
        width: 100%;
        height: 45%;
        border-radius: 1rem;
        overflow: scroll;

        .mood-item {
          padding: 1rem 0.625rem;
          border-radius: 1rem;
          display: flex;
          justify-content: space-between;
          background-color: #fff;
          margin-bottom: 0.625rem;
        }
      }
    }
  }

}
</style>

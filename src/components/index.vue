<template>
  <div class="box">
    <div class="content">
      <div class="topBox">
        <p class="M">M</p>
        <div class="navBox">
          <div class="nav iconfont" v-for="item in nav" :key="item.id">{{item.name}}</div>
          <div class="iconfont">&#xe618;</div>
          <div class="iconfont">&#xe605;</div>
        </div>
      </div>

      <div class="infor">
        <div class="inforTime">
          播放时长:
          <span v-text="inforTime" class="inforTime"></span>
        </div>
        <div class="inforTwo">
          <span class="left iconfont">&#xe613;</span>
          <span class="lefts">7.5</span>
          <span class="leftTo" v-text="inforTwo"></span>
        </div>
        <div v-text="movieTitle" class="movieTitle"></div>
        <div v-text="inforep" class="inforep"></div>
        <div v-text="inforepTo" class="inforepTo"></div>
        <div class="floatBox">
          <div class="left">
            <span class="icon iconfont">&#xe63a;</span>
            <span v-text="guankan" class="text"></span>
          </div>
          <div class="leftTo">
            <span class="icon iconfont">&#xe61e;</span>
            <span v-text="tianjia" class="text"></span>
          </div>
        </div>
      </div>
      <div class="textbox">
       <div class="dinf">
            <span class="textAuto"></span>
            <span class="textCenter"></span>
            <span class="textAuto"></span>
       </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      inforTime: "51 分钟",
      inforTwo: "第 14 集，第 8 季， 真相意味着什么？",
      movieTitle: "行尸走肉",
      inforep:
        "随着僵尸越来越多，同伴越来越少，凯罗尔跑进森林中与僵尸展开激烈打斗，厉害",
      inforepTo: "瑞克和摩根发现自己竟进入僵尸包围圈",
      guankan: "观看",
      tianjia: "添加",
      nav: [
        {
          id: 1,
          name: "首页"
        },
        {
          id: 2,
          name: "电影"
        },
        {
          id: 3,
          name: "系列"
        },
        {
          id: 4,
          name: "我的"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.box {
  background: url("../assets/movie.jpg") center no-repeat;
  background-size: 100% 100%;
  .content {
    margin: 0 auto;
    position: relative;
    width: 1200px;
    overflow: hidden;
    height: 554px;
    .topBox {
      padding: 0 50px;
      height: 74px;
      box-shadow: 2px 0px 3px #1d1d1e;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      opacity: 0.7;
      .M {
        font-style: "Casa Regular";
        color: #db1623;
        line-height: 74px;
        font-size: 24px;
        opacity: 1;
      }
      .navBox {
        display: flex;
        flex-direction: row;
        width: 500px;
        justify-content: space-between;
        align-items: center;
        .nav {
          color: #fff;
          opacity: 0.5;
          line-height: 74px;
        }
      }
    }
    .infor {
      padding-top: 80px;
      padding-left: 190px;
      text-align: left;
      opacity: 0.9;
      background: none !important;
      .inforTime {
        color: #a5a5a5;
        font-size: 12px;
      }
      .inforTwo {
        margin-top: 20px;
        background: none;
        .left {
          font-size: 20px;
          color: #ffb400;
        }
        .lefts {
          color: #fff;
        }
        .leftTo {
          font-size: 13px;
          color: #8e8e8f;
        }
      }
      .movieTitle {
        margin-top: 10px;
        font-size: 26px;
        color: #fff;
        opacity: 1;
      }
      .inforep {
        font-size: 13px;
        margin-top: 20px;
        width: 400px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #616162;
      }
      .inforepTo {
        font-size: 13px;
        margin-top: 20px;
        width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #616162;
      }
      .floatBox {
        margin-top: 20px;
        text-align: center;
        .left {
          float: left;
          border-radius: 20px;
          width: 100px;
          height: 40px;
          line-height: 40px;
          background: #db1623;
          .icon {
            color: #fff;
          }
          .text {
            color: #fff;
          }
        }
        .leftTo {
          border-radius: 22px;
          width: 100px;
          height: 40px;
          line-height: 40px;
          margin-left: 20px;
          float: left;
          width: 100px;
          background: #000;
          .icon {
            color: #fff;
          }
          .text {
            color: #fff;
          }
        }
        &::after {
          content: "";
          display: block;
          clear: both;
          height: 0;
          line-height: 0;
        }
      }
    }
    .textbox{
          position: absolute;
          bottom: 30px;
          left: 50%;
          font-size: 0;
          .dinf{
              transform: translateX(-50%);
              .textAuto{
              display: inline-block;
              width: 40px;
              height: 5px;
              background: #aaa;
              border-radius: 5px;
            }
            .textCenter{
              display: inline-block;
              width: 40px;
              height: 8px;
              background: #fff;
              border-radius: 5px;
              margin: 0 10px;
            }
          }
      }
  }
  
}
</style>
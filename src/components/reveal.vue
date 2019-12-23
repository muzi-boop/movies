<template>
  <div class="style">
      <div class="p1">
    <div class="sanjiao"></div>
    <div class="content">
        <div class="close">X</div>
        <div class="navBox">
          <div class="nav iconfont" v-for="item in nav" :key="item.id">{{item.name}}</div>
          <div class="iconfont colo">&#xe618;</div>
          <div class="iconfont colo">&#xe605;</div>
        </div>

      <div class="infor">
        <div class="inforTime">
          播放时长:
          <span v-text="inforTime" class="inforTime"></span>
        </div>
        <div class="inforTwo">
          <span class="left iconfont">&#xe613;</span>
          <span class="lefts">8.5</span>
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
            <!-- <span class="textAuto"></span>
            <span class="textCenter"></span>
            <span class="textAuto"></span> -->
       </div>
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
      movieTitle: "侏罗纪世界",
      inforep:
        "随着僵尸越来越多，同伴越来越少，凯罗尔跑进森林中与僵尸展开激烈打斗，厉害",
      inforepTo: "瑞克和摩根发现自己竟进入僵尸包围圈",
      guankan: "观看",
      tianjia: "添加",
      nav: [
        {
          id: 1,
          name: "默认"
        },
        {
          id: 2,
          name: "最热"
        },
        {
          id: 3,
          name: "相似"
        },
        {
          id: 4,
          name: "评论"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>

 .style{
     background: #141417;
     padding-bottom: 50px;

     .p1{
         width: 1200px;
         margin: 0 auto;
         padding-top: 10px;
        position: relative;
         .sanjiao{
         position: absolute;
         top: 0;
         right: 70px;
         border-bottom: 10px solid #4d5253;
         border-left: 10px solid #141417;
         border-right: 10px solid #141417;
         width: 0;
     }
     }
  .content {
    margin: 0 auto;
    position: relative;
    width: 1200px;
    overflow: hidden;
     background: url("../assets/background.jpg") center no-repeat;
    background-size: 100% 100%;
    height: 554px;
    position: relative;
   .close{
       position: absolute;
       top: 30px;
       right: 30px;
       color: #fff;
   }
  
    
      .navBox {
           position: absolute;
        right: 30px;
        bottom: 50px;
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
        .colo{
            color: #fff;
        }
      }
    .infor {
      padding-top: 40px;
      padding-left: 100px;
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
            //   .textAuto{
            //   display: inline-block;
            //   width: 40px;
            //   height: 5px;
            //   background: #aaa;
            //   border-radius: 5px;
            // }
            // .textCenter{
            //   display: inline-block;
            //   width: 40px;
            //   height: 8px;
            //   background: #fff;
            //   border-radius: 5px;
            //   margin: 0 10px;
            // }
          }
      }
  }
}

</style>
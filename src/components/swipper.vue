<template>
    <div class="swipper">
      <div class="content" v-for="(item,index) in data" :key="index">
        <img class="imgBox" :src="item.img" alt="">
        <div class="title">{{item.title}}</div>
        <div class="down">
          <div class="downLeft">
            {{item.time}}
          </div>
          <div class="downRight">
            <span class="span1 iconfont" v-html="item.icon"></span>
            <span class="span2 iconfont" v-html="item.icon2"></span>
            <span class="span3 iconfont" v-html="item.icon3"></span>
            <span class="span4">5.8</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      data:[{
        img:require("../assets/yingpian.jpg"),
        title:"环太平洋2",
        time:'2018',
        icon:'&#xe6b1;',
        icon2:'&#xe600;',
        icon3:'&#xe613;',
      },
      {
        img:require("../assets/yingpian.jpg"),
        title:"环太平洋2",
        time:'2018',
        icon:'&#xe6b1;',
        icon2:'&#xe600;',
        icon3:'&#xe613;',
      },{
        img:require("../assets/yingpian.jpg"),
        title:"环太平洋2",
        time:'2018',
        icon:'&#xe6b1;',
        icon2:'&#xe600;',
        icon3:'&#xe613;',
      },{
        img:require("../assets/yingpian.jpg"),
        title:"环太平洋2",
        time:'2018',
        icon:'&#xe6b1;',
        icon2:'&#xe600;',
        icon3:'&#xe613;',
      },{
        img:require("../assets/yingpian.jpg"),
        title:"环太平洋2",
        time:'2018',
        icon:'&#xe6b1;',
        icon2:'&#xe600;',
        icon3:'&#xe613;',
      },{
        img:require("../assets/yingpian.jpg"),
        title:"环太平洋2",
        time:'2018',
        icon:'&#xe6b1;',
        icon2:'&#xe600;',
        icon3:'&#xe613;',
      },{
        img:require("../assets/yingpian.jpg"),
        title:"环太平洋2",
        time:'2018',
        icon:'&#xe6b1;',
        icon2:'&#xe600;',
        icon3:'&#xe613;',
      }]
    };
  }
};
</script>

<style lang="less" scoped>
.swipper{
  height: 300px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background: #151518;
  .content{
    width: 170px;
    height: 300px;
    background: #151518;
    display: flex;
    flex-direction: column;
   
    .imgBox{
      width: 170px;
      height: 230px;
      display: block;
       border-radius: 10px;
    overflow: hidden;
    }
    .title{
      text-align: left;
      margin-top: 15px;
    }
    .down{
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      .downLeft{
        color: #4c4c53;
      }
      .downRight{
        height: 19px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        .span1{
          color: #db1623;
          font-size: 12px;
          line-height: 19px;
        }
        .span2{
          margin-left: 10px;
          color: #db1623;
        }
        .span3{
           margin-left: 10px;
          color: #ffb400;
        }
        .span4{
           margin-left: 5px;
          color: #ffb400;
        }
      }
    }
  }
}
</style>
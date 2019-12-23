<template>
  <div class="content">
    <section class="popular">
      <div class="leftBox">
        <span class="iconfont icon">&#xe685;</span>
        <span v-text="lest" class="current"></span>
      </div>
      <div class="right">
        <div class="rightBox" v-for="(item,index) in data" :key="index">
          <span class="iconfont" v-html="item.url"></span>
          {{item.name}}
        </div>
      </div>
    </section>
    <section class="label">
      <div class="labels" v-for="(item,index) in label" :key="index" :class="item.id === 1 ? 'active':''">
      {{item.name}}</div>
      <div class="you">></div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lest: "最近流行的",
      data: [
        {
          name: "流行",
          url: "&#xe604;"
        },
        {
          name: "首映",
          url: "&#xe613;"
        },
        {
          name: "最近加入",
          url: "&#xe61e;"
        }
      ],
      label:[{
          name:"动作",
          id: 1
      },{
          name:"冒险",
          id: 0
      },{
          name:"动画",
          id: 0
      },{
          name:"传记",
          id: 1
      },{
          name:"犯罪",
          id: 0
      },{
          name:"喜剧",
          id: 0
      },{
          name:"记录",
          id: 0
      },{
          name:"戏剧",
          id: 1
      }]
    };
  }
};
</script>

<style lang="less" scoped>
.content {
  background: #151518;
  .popular {
    margin: 0 auto;
    width: 1200px;
    height: 100px;
    background: #151518;
    border-bottom: 1px solid #28282f;
    // background: #fff;
    display: flex;
    justify-content: space-between;
    .leftBox {
      line-height: 100px;
      .icon {
        font-size: 26px;
        display: inline-block;
        color: #fff;
      }
      .current {
        font-size: 18px;
        margin-left: 10px;
        color: #fff;
      }
    }
    .right {
      width: 400px;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      .rightBox {
        color: #fff;
        line-height: 100px;
      }
    }
  }
  .label {
      width: 1200px;
      height: 100px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      .labels{
          width: 110px;
          height: 30px;
          background: #000;
          color: #fff;
          border-radius: 15px;
          line-height: 30px;
          margin-top: 35px;
      }
      .you{
          width: 20px;
          height: 30px;
          line-height: 30px;
          margin-top: 35px;
      }
      .active{
          background: #db1623;
      }
  }
}
</style>
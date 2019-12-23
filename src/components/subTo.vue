<template>
  <div class="content">
    <section class="popular">
      <div class="leftBox">
        <span class="iconfont icon">&#xe606;</span>
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
      <div
        class="labels"
        v-for="(item,index) in label"
        :key="index"
        :class="item.id === 1 ? 'active':''"
      >{{item.name}}</div>
      <div class="you">></div>
    </section>
    <section class="sort">
      <div class="lefts">
        <div class="text">排序：</div>
        <div class="new"> 最新</div>
        <select class="date" id>
          <option value="nian">年</option>
          <option value="yue">月</option>
          <option value="ri">日</option>
        </select>
        <select class="dates" id>
          <option value="scorts">A-Z</option>
          <option value="yue">月</option>
          <option value="ri">日</option>
        </select>
      </div>
      <div class="rights">
          <div class="icons iconfont">&#xe613;</div>
          <div class="strip"></div>
          <div class="evaluate">5.0</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lest: "电影系列",
      data: [
        {
          name: "系列",
          url: "&#xe606;"
        },
        {
          name: "原创",
          url: "&#xe7fa;"
        },
        {
          name: "搜索",
          url: "&#xe618;"
        }
      ],
      label: [
        {
          name: "动作",
          id: 1
        },
        {
          name: "冒险",
          id: 0
        },
        {
          name: "动画",
          id: 0
        },
        {
          name: "传记",
          id: 1
        },
        {
          name: "犯罪",
          id: 0
        },
        {
          name: "喜剧",
          id: 0
        },
        {
          name: "记录",
          id: 0
        },
        {
          name: "戏剧",
          id: 1
        }
      ]
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
        font-size: 22px;
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
    .labels {
      width: 110px;
      height: 30px;
      background: #000;
      color: #fff;
      border-radius: 15px;
      line-height: 30px;
      margin-top: 35px;
    }
    .you {
      width: 20px;
      height: 30px;
      line-height: 30px;
      margin-top: 35px;
    }
    .active {
      background: #db1623;
    }
  }
  .sort {
      height: 50px;
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
    .lefts {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      .text {
          width: 60px;
          height: 20px;
      }
      .new{
          width: 60px;
          height: 20px;
          border-radius: 10px;
          background: #db1623;
          color: #ffffff;
      }
      .date {
          outline: none;
           margin-left: 15px;
           width: 60px;
          height: 20px;
          border-radius: 10px;
      }
      .dates{
          outline: none;
           margin-left: 15px;
           width: 60px;
          height: 20px;
          border-radius: 10px;
      }
    }
    .rights{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        .icons{
            color: #ffb400;
        }
        .strip{
            margin-left: 10px;
            margin-top: 5px;
            width: 80px;
            height: 6px;
            background: #ffb400;
            border-radius: 3px;
        }
        .evaluate{
            margin-left: 10px;
        }
    }
  }
}
</style>
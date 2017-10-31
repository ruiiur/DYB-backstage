<template>
  <div class="precision-marketing">
    <h2>
      精准营销<span>您本月剩余优惠券5000张</span><a href="javascript:;">添加自定义人群</a>
    </h2>
    <div class="customer">
      <div>
        <h2>粉丝顾客</h2>
        <div>
          <h3>收藏店铺的顾客</h3>
          <p>截止昨日46人</p>
          <Button type="primary">立即发券</Button>
        </div>
      </div>
      <div>
        <h2>熟客</h2>
        <div>
          <h3>近30天内下单2次以及以上的顾客</h3>
          <p>截止昨日2人</p>
          <Button type="primary">立即发券</Button>
        </div>
      </div>
      <div>
        <h2>高消费熟客</h2>
        <div>
          <h3>近30天内下单2次以及以上，且单价较高的顾客</h3>
          <p>截止昨日46人</p>
          <Button type="primary">立即发券</Button>
        </div>
      </div>
      <div>
        <h2>轻度流失顾客</h2>
        <div>
          <h3>近90天内有完成订单，但近30天内未下单...</h3>
          <p>截止昨日46人</p>
          <Button type="primary">立即发券</Button>
        </div>
      </div>
      <div>
        <h2>流失顾客</h2>
        <div>
          <h3>近90天内有完成订单，但近45天内未下单的...</h3>
          <p>截止昨日46人</p>
          <Button type="primary">立即发券</Button>
        </div>
      </div>
      <div>
        <h2>好评顾客</h2>
        <div>
          <h3>近30天内所有评价均为好评的顾客</h3>
          <p>截止昨日46人</p>
          <Button type="primary">立即发券</Button>
        </div>
      </div>
      <div>
        <h2>差评顾客</h2>
        <div>
          <h3>近30天内所有评价均为好评的顾客</h3>
          <p>截止昨日46人</p>
          <Button type="primary">立即发券</Button>
        </div>
      </div>
      <div>
        <h2>写内容的好评顾客</h2>
        <div>
          <h3>近30天内有完成订单且有内容评价的好评顾客</h3>
          <p>截止昨日46人</p>
          <Button type="primary">立即发券</Button>
        </div>
      </div>
      <div>
        <h2>不评价顾客</h2>
        <div>
          <h3>近30天内有完成订单但近没有评价的顾客</h3>
          <p>截止昨日46人</p>
          <Button type="primary">立即发券</Button>
        </div>
      </div>
    </div>
    <div class="state-list">
      <Tabs value="name1">
        <TabPane label="当前有效" name="name1">
          <p><label>券状态</label>
            <Select v-model="model1" >
              <Option v-for="item in stateList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </p>
        </TabPane>
        <TabPane label="历史记录" name="name2">
          <p>历史记录有关内容</p>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>
<script>
  export default {

    data() {
      return {
        stateList: [
          {
            value: 'quanbu',
            label: '全部'
          },
          {
            value: 'bufeng',
            label: '部分'
          },
          {
            value: 'bufeng',
            label: '部分'
          },
          {
            value: 'bufeng',
            label: '部分'
          },
          {
            value: 'bufeng',
            label: '部分'
          }
        ],
        model1:'quanbu',//券状态默认值
      }
    }
  }

</script>
<style lang="scss">
  .precision-marketing{
    padding: 29px 40px 64px 20px;
    height:calc(100vh - 72px);
    overflow-y: scroll;
    >h2{
      @include sc(14px,#000);
      >span{
        @include sc(12px,#999);
        margin: 0 29px 0 10px;
      }
      >a{
        border:1px solid #0080ff;
        @include sc(14px,#0080ff);
        display: inline-block;
        @include wh(128px,28px);
        line-height: 27px;
        border-radius: 2px;
        text-align: center;
      }
    }
    .customer{
      margin: 18px 0 30px 0;
      >div{
        display: inline-block;
        width:22.4%;
        margin-right: 0.7%;
        box-shadow: 0 0 12px rgba(0, 128, 255, .1);
        margin-bottom: 12px;
        >h2{
          height:50px;
          line-height:50px;
          background: #fafafa;
          padding-left: 20px;
          @include sc(14px,#333);
        }
        >div{
          background: #fff;
          text-align: center;
          >h3{
            @include sc(14px,#333);
            width: 90%;
            margin:0 auto 20px auto;
            padding-top: 30px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            line-height: 14px;
          }
          >p{
            @include sc(14px,#666);
            line-height: 14px;
          }
          >.ivu-btn-primary {
            color: #fff;
            background-color: #0080ff;
            border-color: #0080ff;
            border-radius: 2px;
            @include sc(14px,#fff);
            margin: 24px 0 26px 0;
          }
        }
      }
    }
    .state-list{
      background: #fff;
      padding:10px 20px 30px 20px;
      .ivu-tabs-tabpane{
        >p{
          >label{
            @include sc(14px,#333);
            margin-right: 20px;
            line-height: 36px;
            display: inline-block;
            vertical-align: top;
          }
        }
      }
      .ivu-select{
        @include wh(200px,36px);
        .ivu-select-selection{
          border-radius: 0;
          @include wh(200px,36px);
        }
        .ivu-select-selected-value{
          @include wh(200px,36px);
          line-height: 36px;
        }
      }
    }
  }
</style>

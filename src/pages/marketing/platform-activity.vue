<template>
  <div class="platform-activity">
    <Tabs value="name1">
      <TabPane label="可报名" name="name1">
        <ul class="enrol">
         <li>
           <h2>平台推荐（0）</h2>
           <p>暂无可报名的平台推荐活动，您可以去“自建活动”页面创建哦！</p>
         </li>
          <li>
            <h2>限时抢购（0）</h2>
            <p>暂无可报名的平台推荐活动，您可以去“自建活动”页面创建哦！</p>
          </li>
          <li>
            <h2>0元试吃（0）</h2>
            <p>暂无可报名的平台推荐活动，您可以去“自建活动”页面创建哦！</p>
          </li>
          <li>
            <h2>限量抢购（0）</h2>
            <p>暂无可报名的限量抢购活动！</p>
          </li>
          <li>
            <h2>特价商品（1）</h2>
            <div>
              <h3><i>折</i><span>下午茶-5折奶茶甜品</span><em>下午茶-5折奶茶甜品(56168546)</em><a href=""><span>16266</span>名商家已参加报名，报名剩余<span>7</span>天</a></h3>
              <p>选择1-3种原价为15-80元的商品。统一5折出售，平台按原价补贴0折（每单最多补贴20元）。<Button @click="activityDetails=true" type="primary">查看详情</Button></p>
            </div>
          </li>
        </ul>
        <Modal
          v-model="activityDetails"
          title="活动详情"
          okText="立即报名"
          class-name="vertical-center-modal modal-activity-details"
        >
          <h3><i>折</i><span>下午茶-5折奶茶甜品</span><em>下午茶-5折奶茶甜品(56168546)</em><a href="">平台活动</a></h3>
          <div>
            <p><label>活动状态 : </label><span>可报名</span></p>
            <p><label>报名剩余 : </label><span>7天</span></p>
            <p><label>活动类型 : </label><span>折扣商品</span></p>
            <p><label>报名条件 : </label><span>全部商户</span></p>
          </div>
          <div>
            <div>
              <label>活动规则 : </label>
              <div>
                <p>选择1-3种原价为15-80元的商品。统一5折出售，平台按原价补贴0折（每单最多补贴20元）。</p>
                <p>活动期间，每日可售库存为5-50份</p>
                <p>每单每个商品最多可售2份</p>
                <p>建议参加活动商品：甜品、饮品</p>
                <p>参与活动商品的餐盒费不可超过5元</p>
                <p>活动开始报名后的新建商品无法参加活动</p>
              </div>
            </div>
            <div>
              <label>活动日期 : </label>
              <div>
                <p>2017-10-01至2017-10-31（周六 周日）</p>
              </div>
            </div>
            <div>
              <label>活动时间 : </label>
              <div>
                <p>自定义（14：:0:01-15:59:59）</p>
              </div>
            </div>
            <div>
              <label>活动共享 : </label>
              <div>
                <p>与折扣、特价活动同享</p>
                <p>请到当前生效的满减活动中查询折扣活动是否与满减活动同享</p>
              </div>
            </div>
          </div>
          <div>
            <label>生效条件 : </label>
            <div>
              <p>仅饿了么会员可享：否</p>
              <p>仅在线支付：是</p>
              <p>仅新用户可享：否</p>
            </div>
          </div>
          <div>
            <h2>特别说明<i @click="special=!special" :class="special?'spe':''"></i></h2>
            <div v-show="special">
              <p>1. 商户参与活动禁止各类作弊的行为，一经查实，从严处理；</p>
              <p>2. 商户禁止虚抬参与活动的商品价格，一经查实，从严处理；</p>
              <p>3. 商户确认报名后，不得中途退出活动；</p>
              <p>4. 参与活动不得出现以下商品：预包装食品、散装食品、冷鲜肉、禽蛋、蔬菜、百货、土特产等。如 　出现以上任一情况，因此产生
                的法律责任或平台损失由商户自行承担或赔偿；</p>
              <p>5. 商户享有对参与活动的商品停售和允许范围内修改库存的权利；</p>
              <p>6. 商户报名后请耐心等待审核，待审核通过后即为成功报名；</p>
              <p>7. 饿了么享有在法律范围内对活动的解释权；</p>
            </div>
          </div>
        </Modal>
      </TabPane>
      <TabPane label="已参与" name="name2">已参与的内容</TabPane>
      <TabPane label="营销托管" name="name3">营销托管的内容</TabPane>
    </Tabs>
    <span>每单可购买活动商品总数：1<a href="javascript:;" @click="availableCopies=true">编辑</a></span>
    <Modal
      v-model="availableCopies"
      title="活动商品可售份数设置"
      class-name="vertical-center-modal modal-available-copies"
    >
      <p>
        <label>每单可享活动商品份数</label>
        <RadioGroup v-model="types">
          <Radio label="不限制"></Radio>
          <Radio label="有限制"></Radio>
        </RadioGroup>
      </p>
      <input value="1">
    </Modal>
  </div>
</template>
<script>

  export default {

    data() {
      return {
        activityDetails:false,//活动详情模态框
        availableCopies:false,//活动商品可售份数设置模态框
        special:false,//是否展开特别说明
        types:'有限制',//每单可享活动商品份数默认值
      }
    },
    methods: {
//      ok () {
//        this.$router.push({path:'/evaluation'});
//      },
    }
  }

</script>
<style lang="scss">
  .vertical-center-modal{
    display: flex;
    align-items: center;
    justify-content: center;

    .ivu-modal{
      top: 0;
    }
  }
  .ivu-modal-content{
    border-radius: 0 ;
    box-shadow: 0 0 20px rgba(0, 128, 255, .3);
  }
  .ivu-modal-mask{
    background-color: rgba(55, 55, 55, .2);
  }
  .ivu-modal-header{
    border-bottom: none;
    padding: 24px 20px 20px 20px;
    >div{
      color:#333;
      font-weight: normal;
    }
  }
  .modal-activity-details{
    .ivu-modal{
      width:750px !important;
    }
    .ivu-modal-footer{
      border-top:none;
      .ivu-btn-large{
        padding: 8px 0 9px 0;
        border-radius: 2px;
        font-size: 14px;
        width:100px;
        text-align: center;
      }
      >button{
        &:nth-child(1){
          border:1px solid #0080ff;
          color:#0080ff;
        }
      }
    }
  }
  .modal-available-copies{
    .ivu-modal{
      width:550px !important;
    }
    .ivu-modal-footer{
      border-top:none;
      .ivu-btn-large{
        padding: 8px 0 9px 0;
        border-radius: 2px;
        font-size: 14px;
        width:100px;
        text-align: center;
      }
      >button{
        &:nth-child(1){
          border:1px solid #0080ff;
          color:#0080ff;
        }
      }
    }
  }
  .modal-activity-details{
    .ivu-modal-body{
      padding: 0;
      >h3{
        margin-bottom: 20px;
        padding-left: 20px;
        >i{
          display: inline-block;
          @include wh(18px,18px);
          background-color: rgba(255, 186, 76, 1);
          border-radius: 2px;
          @include sc(12px,#fff);
          line-height: 18px;
          text-align: center;
        }
        >span{
          @include sc(14px,#333);
          margin: 0 25px 0 12px;
        }
        >em{
          @include sc(14px,#999);
        }
        >a{
          display: inline-block;
          width:80px;
          height:24px;
          border:1px solid #0080ff;
          border-radius: 12px;
          line-height: 23px;
          text-align: center;
          box-sizing: border-box;
          margin-left: 20px;
        }
      }
      >div{
        padding:0 28px 0 20px;
        &:nth-child(2){
          background: #fafafa;
          padding-top: 16px;
          >p{
            display: inline-block;
            line-height: 14px;
            margin-bottom: 16px;
            >label{
              @include sc(14px,#333);
            }
            &:nth-child(1){
              width:124px;
              margin-right:80px;
              >span{
                @include sc(14px,#6acc29);
              }
            }
            &:nth-child(2){
              width:400px;
              >span{
                @include sc(14px,#f00);
              }
            }
            &:nth-child(3){
              margin-right:80px;
            }
            &:nth-child(3),&:nth-child(4){
              >span{
                @include sc(14px,#666);
              }
            }
          }
        }
        &:nth-child(3){
          padding-top: 18px;
          >div{
            >label{
              display: inline-block;
              @include sc(14px,#333);
              line-height: 20px;
              margin-top: 3px;
            }
            >div{
              display: inline-block;
              vertical-align: top;
              margin: 2px 0;
              >p{
                @include sc(14px,#666);
                line-height: 23px;
              }
            }
          }
        }
        &:nth-child(4){
          background: #fafafa;
          padding: 16px 0 16px 20px;
          >label{
            @include sc(14px,#333);
          }
          >div{
            display: inline-block;
            vertical-align: top;
            >p{
              @include sc(14px,#666);
            }
          }
        }
        &:nth-child(5){
          margin: 20px 20px 0 20px;
          padding: 0 8px 0 0;
          border-bottom: 1px solid #e3e3e3;
          >h2{
            @include sc(14px,#333);
            margin-bottom: 14px;
            >i{
              display: inline-block;
              vertical-align: middle;
              width:10px;
              height:6px;
              background: url(../../assets/image/arrow_black_down_n.png)no-repeat;
              background-size: 10px 6px;
              margin-left: 11px;
              &.spe{
                transform: rotate(-180deg);
              }
            }
          }
          >div{
            padding-bottom: 25px;
            >p{
              @include sc(12px,#999);
              line-height: 20px;
            }
          }
        }
      }
    }
  }
  .modal-available-copies{
    .ivu-modal-body{
      padding: 0;
      margin: 0 20px;
      border-bottom: 1px solid #e3e3e3;
      >p{
        >label{
          @include sc(14px,#666);
          margin-right: 15px;
        }
        .ivu-radio-group{
          >label{
            @include sc(14px,#333);
            margin-right: 30px;
          }
        }
      }
      >input{
        width:400px;
        height:36px;
        border:1px solid #ccc;
        line-height: 36px;
        @include sc(14px,#333);
        padding-left: 17px;
        margin: 20px 0 29px 0;
      }
    }
  }
  .platform-activity{
    padding: 36px 40px 0 20px ;
    position: relative;
    .enrol{
      >li{
        margin-bottom: 20px;
        background: #fff;
        box-shadow: 0 0 12px rgba(0, 128, 255, .1);
        >h2{
          height:50px;
          line-height: 50px;
          background: #fafafa;
          padding-left: 21px;
          @include sc(14px,#333);
        }
        >p{
          padding: 24px 0 24px 20px;
          @include sc(14px,#999);
          line-height: 14px;
        }
        >div{
        padding:27px 35px 43px 22px;
          >h3{
            margin-bottom: 25px;
            >i{
              display: inline-block;
              @include wh(18px,18px);
              background-color: rgba(255, 186, 76, 1);
              border-radius: 2px;
              @include sc(12px,#fff);
              line-height: 18px;
              text-align: center;
            }
            >span{
              @include sc(14px,#333);
              margin: 0 25px 0 12px;
            }
            >em{
              @include sc(14px,#999);
            }
            >a{
              float: right;
              @include sc(14px,#999);
              >span{
                @include sc(14px,#0080ff);
              }
            }
          }
          >p{
            @include sc(14px,#666);
            .ivu-btn-primary {
              display: inline-block;
              vertical-align: top;
              margin-top: -7px;
              float: right;
              color: #fff;
              background-color: #0080ff;
              border-color: #0080ff;
              border-radius: 2px;
              @include sc(14px,#fff);
              height:40px;
            }
          }
        }
      }
    }
    >span{
      position: absolute;
      right:56px;
      top:40px;
      @include sc(14px,#333);
      >a{
        @include sc(14px,#0080ff);
        margin-left: 20px;
      }
    }
  }
</style>

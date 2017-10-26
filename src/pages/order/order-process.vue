<template>
  <div class="order-process">
    <div class="process-left">
      <Tabs value="name1">
        <TabPane label="新订单" name="name1">
          <ul class="new-orders-content">
          <li>
            <h2>2<span>尽快送达</span><em>下单时间：09-01 18:23</em><i>订单完成</i></h2>
            <div>
              <h3>催（女士）<span>15589762571</span><em>第一次下单</em></h3>
              <p>上海新安汽车隔音毡公司宝安公路5355号 · 2.84km<a href="javascript:;">查看地图</a></p>
            </div>
            <div>
              <div class="rider-process">
                <Timeline pending>
                  <TimelineItem><p class=" rider-information">18:54<span>已送达</span><em>（骑手：杨关平 15026325899）</em><a href="javascript:;" class="evaluate-rider" @click="modalEvaluation = true">评价骑手</a><a href="javascript:;" class="more-contacts" @click="modalContacts = true">更多联系人</a></p></TimelineItem>
                  <TimelineItem><p class="process-check"  @click="modalProgress = true">查看进度 <span>不可索赔</span></p></TimelineItem>
                </Timeline>
              </div>
              <div class="food-information">
                <p>2件商品
                  <Dropdown  placement="bottom-end">
                    <a href="javascript:void(0)">
                      详情
                      <Icon type="arrow-down-b"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                      <DropdownItem>驴打滚</DropdownItem>
                      <DropdownItem>炸酱面</DropdownItem>
                      <DropdownItem>豆汁儿</DropdownItem>
                      <DropdownItem>冰糖葫芦</DropdownItem>
                      <DropdownItem>北京烤鸭</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </p>
              </div>
            </div>
            <div class="billing-con">
              <div class="billing-information">
                <h3>顾客实付<span>已支付¥21.50</span></h3>
                <div>
                  <Dropdown placement="bottom-start">
                    <a href="javascript:void(0)">
                      本单预计收入
                      <Icon type="arrow-down-b"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                      <DropdownItem>驴打滚</DropdownItem>
                      <DropdownItem>炸酱面</DropdownItem>
                      <DropdownItem>豆汁儿</DropdownItem>
                      <DropdownItem>冰糖葫芦</DropdownItem>
                      <DropdownItem>北京烤鸭</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <span>￥24.78</span>
                </div>
              </div>
              <div>
                <div>
                  <p>完成时间：09-01 18:54</p>
                  <p>单号：3011600867265360995</p>
                </div>
                <div>
                  <Button type="primary">取消打印</Button>
                  <Button type="primary">打印</Button>
                  <Button type="primary">取消打印并退款</Button>
                </div>
              </div>
            </div>
            <Modal
              v-model="modalContacts"
              title="更多联系人"
              @on-ok="ok"
              class-name="vertical-center-modal modal-contacts"
            >
              <h3 >调度员：15655488816</h3>
              <p>联系客服：021-80203666</p>
            </Modal>
            <Modal
              v-model="modalProgress"
              title="配送进度"
              @on-ok="ok"
              class-name="vertical-center-modal modal-progress"
            >
              <div class="delivery-process">
              <Timeline pending>
                <TimelineItem><p class="delivery-p">18:54  <span>已送达</span>（骑手：150426325899）</p></TimelineItem>
                <TimelineItem><p class="delivery-p">18:36  骑手已取餐</p></TimelineItem>
                <TimelineItem><p class="delivery-p">18:25  骑手已到店</p></TimelineItem>
                <TimelineItem><p class="delivery-p">18:25  待骑手取餐</p></TimelineItem>
                <TimelineItem><p class="delivery-p">18:25  待分配骑手</p></TimelineItem>
                <TimelineItem><p class="delivery-p">18:25  待分配配送商</p></TimelineItem>
                <TimelineItem><p class="delivery-p">18:25  已呼叫配送</p></TimelineItem>
              </Timeline>
              </div>
            </Modal>
            <Modal
              v-model="modalEvaluation"
              title="匿名评价骑手"
              @on-ok="ok"
              class-name="vertical-center-modal modal-evaluation"
            >
              <Rate allow-half v-model="value"></Rate>
              <p class="evaluation-tip">骑手服务质量如何，评价一下吧</p>
            </Modal>
          </li>
          <li>
            <h2>2<span>尽快送达</span><em>下单时间：09-01 18:23</em><i>订单完成</i></h2>
            <div>
              <h3>催（女士）<a href="javascript:;" @click="modalPhone = true">查看手机号</a><em>第一次下单</em></h3>
              <p>上海新安汽车隔音毡公司宝安公路5355号 · 2.84km<a href="javascript:;">查看地图</a></p>
            </div>
            <div>
              <div class="billing-information">
                <h3>顾客实付<span>已支付¥21.50</span></h3>
                <div>
                  <Dropdown placement="bottom-start">
                    <a href="javascript:void(0)">
                      本单预计收入
                      <Icon type="arrow-down-b"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                      <DropdownItem>驴打滚</DropdownItem>
                      <DropdownItem>炸酱面</DropdownItem>
                      <DropdownItem>豆汁儿</DropdownItem>
                      <DropdownItem>冰糖葫芦</DropdownItem>
                      <DropdownItem>北京烤鸭</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <span>￥24.78</span>
                </div>
              </div>
              <div class="food-information">
                <p>2件商品
                  <Dropdown  placement="bottom-end">
                    <a href="javascript:void(0)">
                      详情
                      <Icon type="arrow-down-b"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                      <DropdownItem>驴打滚</DropdownItem>
                      <DropdownItem>炸酱面</DropdownItem>
                      <DropdownItem>豆汁儿</DropdownItem>
                      <DropdownItem>冰糖葫芦</DropdownItem>
                      <DropdownItem>北京烤鸭</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </p>
              </div>
            </div>
            <!--<div>-->
              <div class="select-print">
                <div>
                  <p>完成时间：09-01 18:54</p>
                  <p>单号：3011600867265360995</p>
                </div>
                <div>
                  <Button type="primary">取消打印</Button>
                  <Button type="primary">打印</Button>
                  <Button type="primary">取消打印并退款</Button>
                </div>
              </div>
            <!--</div>-->
            <Modal
              v-model="modalPhone"
              title="用户手机号"
              @on-ok="ok"
              class-name="vertical-center-modal modal-phone"
            >
              <h3 class="key-tel">19505655488816</h3>
              <p class="modal-phone-tip">为保护用户隐私，该号码为用户保护号码，请输入全部数字后拨打</p>
            </Modal>
          </li>
        </ul>
        </TabPane>
        <TabPane label="新订单提醒" name="name2">新订单的内容</TabPane>
        <TabPane label="配送异常" name="name3">配送异常的内容</TabPane>
        <TabPane label="催单" name="name4">催单的内容</TabPane>
        <TabPane label="取消单" name="name5">取消单的内容</TabPane>
        <TabPane label="退单" name="name6">退单的内容</TabPane>
      </Tabs>
    </div>
    <div class="process-right">
      <p>今日营业总览</p>
      <p>已接订单：<span>6</span> 笔</p>
      <p>今日营业总额：<span>320.0 </span>元</p>
    </div>
  </div>
</template>
<script>

  export default {

    data() {
      return {
        modalPhone:false,//查看手机号模态框
        modalContacts:false,//更多联系人模态框
        modalProgress:false,//查看进度模态框
        modalEvaluation:false,//匿名评价骑手模态框
        value:4,//匿名评价初始值
      }
    },
    methods: {
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
  .modal-phone,.modal-progress,.modal-evaluation{
    .ivu-modal{
      width:500px !important;
    }
  }
  .modal-contacts{
    .ivu-modal{
      width:410px !important;
    }
  }
  .modal-evaluation{
    .ivu-modal-footer{
      display: none;
    }
    .evaluation-tip{
      @include sc(14px,#999);
      line-height: 14px;
      margin-bottom: 61px;
      text-align: center;
      margin-top: 15px;
    }
    .ivu-rate{
      display: block;
      text-align: center;
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
   .ivu-modal-body{
     padding: 0;
     margin: 0 20px;
     border-bottom: 1px solid #e3e3e3;
     >h3{
       @include sc(14px,#666);
       margin-bottom: 15px;
       line-height: 14px;
     }
     >p{
       @include sc(14px,#666);
       line-height: 14px;
       margin-bottom: 30px;
     }
     .modal-phone-tip{
       @include sc(14px,#999);
       line-height: 14px;
       margin-bottom: 30px;
     }
   }
   .ivu-modal-footer{
     border-top:none;
     .ivu-btn-large{
       padding: 8px 35px 9px 35px;
     }
     >button{
       &:nth-child(1){
         display: none;
       }
     }
   }
.delivery-process{
  box-sizing: border-box;
  >ul{
    margin-bottom: 10px;
    >li{
      height:35px;
      &:first-child{
        .ivu-timeline-item-head{
          background: #0080ff;
        }
      }
      .delivery-p{
        @include sc(14px,#999);
        >span{
          @include sc(14px,#000);
        }
      }
    }
  }
}
.order-process{
  min-width: 1346px;
  .process-left{
    padding: 36px 20px 0 20px ;
    display: inline-block;
    width:80%;
    .new-orders-content{
      >li{
        margin-bottom: 20px;
        background: #fff;
        box-shadow: 0 0 12px rgba(0, 128, 255, .1);
        &:last-child{
          margin-bottom: 0;
        }
        >h2{
          height:50px;
          line-height: 50px;
          background: #fafafa;
          padding-left: 12px;
          @include sc(20px,#333);
          >span{
            @include sc(14px,#333);
            margin: 0 24px 0 12px;
          }
          >em{
            @include sc(14px,#999);
          }
          >i{
            float: right;
            @include sc(14px,#666);
            margin-right: 16px;
        }
        }
        >div{
          &:nth-child(2){
            padding: 23px 20px;
            border-bottom: 1px solid #e3e3e3;
            >h3{
              @include sc(16px,#333);
              line-height: 16px;
              >span{
                @include sc(14px,#333);
                margin-left: 21px;
              }
              >a{
                @include sc(14px,#0080ff);
                margin-left: 21px;
              }
              >em{
                float: right;
                @include sc(14px,#999);
              }
            }
            >p{
              @include sc(14px,#666);
              margin-top: 15px;
              line-height: 14px;
              >a{
                float: right;
                @include sc(14px,#0080ff);
              }
            }
          }
          &:nth-child(3){
            padding: 17px 0;
            border-bottom:1px solid #e3e3e3;
            >div{
              display: inline-block;
              vertical-align: top;
              width:49.8%;
              padding: 2px 20px;
            }
          }
        }
        .billing-con{
          padding: 17px 0;
          >div{
            display: inline-block;
            vertical-align: top;
            width:49.8%;
            padding: 2px 20px;
            &:nth-child(2){
              >div{
                display: inline-block;
                vertical-align: middle;
                &:nth-child(1){
                  >p{
                    @include sc(14px,#999);
                    &:nth-child(1){
                      margin-bottom: 9px;
                    }
                  }
                }
                &:nth-child(2){
                  float: right;
                  margin-top: 8px;
                  >button{
                    background: #fff;
                    @include sc(14px,#666);
                    border:1px solid #e5e5e5;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .process-right{
    display: inline-block;
    float: right;
    width:20%;
    background: #fff;
    height:calc(100vh - 72px);
    padding: 30px 0 0 20px;
    >p{
      @include sc(14px,#333);
      line-height: 14px;
      >span{
        @include sc(14px,#000);
      }
      &:nth-child(2){
        margin: 28px 0 20px 0;
      }
    }
  }
  .billing-information{
    border-right:1px solid #e3e3e3;
    box-sizing: border-box;
    >h3{
      @include sc(14px,#666);
      margin-bottom: 9px;
      >span{
        float: right;
        @include sc(14px,#003);
      }
    }
    >div{
      .ivu-dropdown-rel{
        >a{
          @include sc(14px,#666);
        }
      }
      >span{
        float: right;
        @include sc(14px,#f33);
      }
    }
  }
  .food-information{
    >p{
      @include sc(14px,#333);
      >div{
        float: right;
      }
    }
  }
  .select-print{
    padding: 17px 20px;
    >div{
      display: inline-block;
      vertical-align: middle;
      &:nth-child(1){
        >p{
          @include sc(14px,#999);
          &:nth-child(1){
            margin-bottom: 9px;
          }
        }
      }
      &:nth-child(2){
        float: right;
        margin-top: 8px;
        >button{
          background: #fff;
          @include sc(14px,#666);
          border:1px solid #e5e5e5;
        }
      }
    }
  }
  .rider-process{
    border-right:1px solid #e3e3e3;
    box-sizing: border-box;
    >ul{
      >li{
        height:30px;
        &:first-child{
          .ivu-timeline-item-head{
            background: #0080ff;
          }
        }
        .rider-information{
          line-height: 19px;
          @include sc(16px,#333);
          >span{
            margin-left: 20px;
            @include sc(14px,#333);
          }
          >em{
            @include sc(14px,#666);
          }
          >a{
            @include sc(14px,#0080ff);
            float: right;
            margin-top: 3px;
          }
          .more-contacts{

          }
          .evaluate-rider{
            margin-left: 20px;
          }
        }
        .process-check{
          @include sc(14px,#666);
          >span{
            float: right;
            @include sc(14px,#999);
          }
        }
        &:last-child{
          height:18px;
        }
      }
    }
  }
}
</style>

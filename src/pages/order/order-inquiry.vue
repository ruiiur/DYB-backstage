<template>
  <div class="order-inquiry">
    <div class="inquiry-left">
      <div>
        <p>
          <label>订单类型:</label>
          <RadioGroup v-model="types">
            <Radio label="全部"></Radio>
            <Radio label="预订单"></Radio>
          </RadioGroup>
        </p>
        <p v-if="types=='全部'">
          <label>下单日期:</label>
          <RadioGroup v-model="dates">
            <Radio label="进两日"></Radio>
            <Radio label="具体日期"></Radio>
          </RadioGroup>
        </p>
        <p v-if="types=='全部'">
          <label>订单状态:</label>
          <RadioGroup v-model="state">
            <Radio label="全部"></Radio>
            <Radio label="进行中"></Radio>
            <Radio label="已完成"></Radio>
            <Radio label="已取消"></Radio>
            <Radio label="售后退款"></Radio>
          </RadioGroup>
        </p>
        <p v-if="types=='预订单'">
          <label>送达时间:</label>
          <RadioGroup v-model="time">
            <Radio label="60分钟内"></Radio>
            <Radio label="今日"></Radio>
            <Radio label="明日"></Radio>
            <Radio label="2天后"></Radio>
            <Radio label="3天后"></Radio>
            <Radio label="4天后"></Radio>
            <Radio label="5天后"></Radio>
            <Radio label="6天后"></Radio>
          </RadioGroup>
        </p>
      </div>
      <div v-if="types=='全部'">
        <ul class="orders-content">
          <li>
            <h2>2<span>尽快送达</span><em>下单时间：09-01 18:23</em><i>订单完成</i></h2>
            <div>
              <h3>催（女士）<span>15589762571</span><em>第一次下单</em></h3>
              <p>上海新安汽车隔音毡公司宝安公路5355号 · 2.84km<a href="javascript:;">查看地图</a></p>
            </div>
            <div>
              <div class="rider-process">
                <Timeline pending>
                  <TimelineItem><p class=" rider-information">18:54<span>已送达</span><em>（骑手：杨关平 15026325899）</em><a href="javascript:;" class="evaluate-rider">评价骑手</a><a href="javascript:;" class="more-contacts">更多联系人</a></p></TimelineItem>
                  <TimelineItem><p class="process-check">查看进度 <span>不可索赔</span></p></TimelineItem>
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
          </li>
          <li>
            <h2>2<span>尽快送达</span><em>下单时间：09-01 18:23</em><i>订单完成</i></h2>
            <div>
              <h3>催（女士）<a>查看手机号</a><em>第一次下单</em></h3>
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
          </li>
        </ul>
      </div>
      <div v-if="types=='预订单'">
        <ul class="orders-content">
          <li>
            <h2 class="pre">2<span>【预】今日19:20送达</span><em>下单时间：09-01 18:23</em><i>已接单</i></h2>
            <div>
              <h3>催（女士）<span>15589762571</span><em>第一次下单</em></h3>
              <p>上海新安汽车隔音毡公司宝安公路5355号 · 2.84km<a href="javascript:;">查看地图</a></p>
            </div>
            <div>
              <div class="rider-process">
                <Timeline pending>
                  <TimelineItem><p class=" rider-information">18:54<span>已送达</span><em>（骑手：杨关平 15026325899）</em><a href="javascript:;" class="evaluate-rider">评价骑手</a><a href="javascript:;" class="more-contacts">更多联系人</a></p></TimelineItem>
                  <TimelineItem><p class="process-check">查看进度 <span>不可索赔</span></p></TimelineItem>
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
          </li>
        </ul>
      </div>
    </div>
    <div class="inquiry-right">
      <ul>
        <li>
          <h2>今日出餐汇总</h2>
          <ul>
            <li>酸辣笋尖粉<span>x 3</span></li>
            <li>加蒸蛋<span>x 3</span></li>
            <li>雪菜<span>x 3</span></li>
            <li>红豆双皮奶<span>x 3</span></li>
            <li>牛肉粉<span>x 3</span></li>
            <li>牛肚粉<span>x 3</span></li>
          </ul>
        </li>
        <li>
          <h2>昨日出餐汇总</h2>
          <ul>
            <li>酸辣笋尖粉<span>x 3</span></li>
            <li>加蒸蛋<span>x 3</span></li>
            <li>雪菜<span>x 3</span></li>
            <li>红豆双皮奶<span>x 3</span></li>
            <li>牛肉粉<span>x 3</span></li>
            <li>牛肚粉<span>x 3</span></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

  export default {

    data() {
      return {
        types: '全部',//订单类型默认值
        dates:'进两日',//订单日期默认值
        state:'全部',//订单状态默认值
        time:'60分钟内',//送达时间默认值
      }
    },
    methods: {

    }
  }

</script>
<style lang="scss">
  .order-inquiry{
    min-width: 1346px;
    .ivu-radio-group{
      >label{
        @include sc(14px,#333);
      }
    }
    .inquiry-left{
      padding: 36px 20px 0 20px ;
      display: inline-block;
      width:80%;
      .orders-content{
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
          &.pre{
            @include sc(20px,#f80);
            >span{
              @include sc(14px,#f80);
            }
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
    }
     >div{
       &:nth-child(1){
         border-bottom: 1px solid #e3e3e3;
         margin-bottom: 20px;
         >p{
           margin-bottom: 13px;
           >label{
             @include sc(14px,#666);
           }
         }
       }
     }
    }
    .inquiry-right{
      display: inline-block;
      float: right;
      width:20%;
      background: #fff;
      height:calc(100vh - 72px);
      >ul{
        >li{
          padding-top: 30px;
          margin: 0 30px 0 19px;
          border-bottom: 1px solid #e3e3e3;
          >h2{
            @include sc(14px,#333);
            font-weight: normal;
            line-height: 14px;
            margin-bottom: 28px;
          }
          >ul{
            >li{
              @include sc(14px,#666);
              line-height: 14px;
              margin-bottom: 16px;
              >span{
                float: right;
              }
            }
          }
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
  }
</style>

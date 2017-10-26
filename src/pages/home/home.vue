<template>
  <div class="home">
    <div class="summary-header">
      <span class="home-line">今日总览</span>
      <div>
        <Dropdown>
          <a href="javascript:void(0)">
            商品管理
            <i></i>
          </a>
        </Dropdown>
        <Dropdown  placement="bottom-end">
          <a href="javascript:void(0)">
            账户余额
            <i></i>
          </a>
          <DropdownMenu slot="list">
            <DropdownItem>可提现余额 <span>￥0.00</span></DropdownItem>
            <DropdownItem>配送费余额 <span>￥0.00</span></DropdownItem>
            <DropdownItem>保证金余额 <span>￥0.00</span></DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown  placement="bottom-end">
          <a href="javascript:void(0)">
            门店管理
            <i></i>
          </a>
          <DropdownMenu slot="list">
            <ul class="management-state">
              <li>
                <h3>营业状态<span>营业中</span></h3>
                <p>当前餐厅处于设置的营业时间内，正常接受新...</p>
              </li>
              <li>
                <h3>接单方式<span>手动接单</span></h3>
                <p>需手动接收新订单</p>
              </li>
              <li>
                <h3>配送状态<span>动力充足</span></h3>
                <p>当前配送运力充足，可以及时对订单进行配送当前配送运力充足，可以及时对订单进行配送</p>
              </li>
            </ul>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
    <div>
      <div class="today-total home-panel">
        <Row>
          <i-col span="12">
            <p>今日有效订单<i class="icon-question"></i></p>
            <h2>0</h2>
            <h3>昨日0单</h3>
          </i-col>
          <i-col span="12">
            <p>今日订单收入<i class="icon-question"></i></p>
            <h2>0</h2>
            <h3>昨日0.00元</h3>
          </i-col>
        </Row>
      </div>
      <div class="today-order home-panel">
        <Row>
          <i-col span="8"><p>今日预约单</p><h2>0</h2></i-col>
          <i-col span="8"><p>到期预约单</p><h2>0</h2></i-col>
          <i-col span="8"><p>待回复差评</p><h2>0</h2></i-col>
        </Row>
      </div>
    </div>
    <div class="home-panel unread-msg">
      <i></i>

        <!--<Carousel v-model="value" autoplay :dots="setting.dots"-->
                  <!--:trigger="setting.trigger"-->
                  <!--:arrow="setting.arrow">-->
          <!--<CarouselItem>-->
            <!--<div class="demo-carousel">商品分析来啦！祝您打造高销量的爆款菜品！</div>-->
          <!--</CarouselItem>-->
          <!--<CarouselItem>-->
            <!--<div class="demo-carousel">商品分析来啦！祝您打造高销量的爆款菜品！</div>-->
          <!--</CarouselItem>-->
          <!--<CarouselItem>-->
            <!--<div class="demo-carousel">商品分析来啦！祝您打造高销量的爆款菜品！</div>-->
          <!--</CarouselItem>-->
          <!--<CarouselItem>-->
            <!--<div class="demo-carousel">商品分析来啦！祝您打造高销量的爆款菜品！</div>-->
          <!--</CarouselItem>-->
        <!--</Carousel>-->
      <Carousel autoplay dots="none" arrow="never" >
        <CarouselItem>
          <div class="demo-carousel">商品分析来啦！祝您打造高销量的爆款菜品！</div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">商品分析来啦！祝您打造高销量的爆款菜品！</div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">商品分析来啦！祝您打造高销量的爆款菜品！</div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">商品分析来啦！祝您打造高销量的爆款菜品！</div>
        </CarouselItem>
      </Carousel>
      <a href="javascript:;">查看全部未读消息</a>
    </div>
    <div>
      <div class="services-expression">
        <p class="home-line">进30日服务表现</p>
        <div class="home-panel">
          <Row>
            <i-col span="8">
              <h2>0%</h2>
              <h3>好于评均</h3>
              <p>拒单率<i class="icon-question"></i></p>
            </i-col>
            <i-col span="8">
              <h2>0%</h2>
              <h3>好于评均</h3>
              <p>少单错送率<i class="icon-question"></i></p>
            </i-col>
            <i-col span="8">
              <h2>0%</h2>
              <h3>好于评均</h3>
              <p>配送延迟率<i class="icon-question"></i></p>
            </i-col>
            <i-col span="8">
              <h2>0%</h2>
              <h3>好于评均</h3>
              <p>超时取消率<i class="icon-question"></i></p>
            </i-col>
            <i-col span="8">
              <h2>0%</h2>
              <h3>好于评均</h3>
              <p>取消不告知率<i class="icon-question"></i></p>
            </i-col>
          </Row>
        </div>
      </div><div class="home-analysis">
        <p class="home-line">昨日经营分析
          <span>
            <a href="javascript:;">流量分析</a>
            <a href="javascript:;">商品分析</a>
            <a href="javascript:;">商家体验</a>
          </span>
        </p>
        <div>
          <div class="home-panel">
            <h2>同商圈营业额排名</h2>
            <h3><span>11</span>名/11名</h3>
            <p>您击败了同商圈0%的同类商家！</p>
          </div>
          <div class="home-panel">
            <h2>顾客分析</h2>
            <h3><span>8</span>人</h3>
            <h4>昨日成交顾客数</h4>
            <p>前天0人，同比增加0人</p>
            <a href="javascript:;">查看详情 <span>></span></a>
          </div>
          <div class="home-panel">
            <h2>回头客越来越少啦？试试 <a href="javascript:;">精准营销</a></h2>
             <div>
               <span>--</span>
             </div>
            <h3>昨日老客占比</h3>
            <p><span>老客</span><span>新客</span></p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p>我的活动<a href="javascript:;">查看全部<span>></span></a></p>
      <div class="home-panel">
        <p>新用户立减活动<span>用户首次下单减19.0元</span><span>2017-09-20~2017-10-02</span></p>
      </div>
    </div>
  </div>
</template>
<script>

  export default {

    data() {
      return {
//        value2: 0,
//        setting: {
//          dots: 'none',
//          arrow: 'never'
//        }
      }
    },
    methods: {
    }
  }

</script>
<style lang="scss">
.home{
  padding: 36px 40px 0 20px ;
  .home-line{
    @include sc(14px,#000);
    margin-bottom: 20px;
    line-height: 14px;
  }
  .home-panel{
    background: #fff;
    box-shadow:0 0 10px rgba(127,191,255,.1);
  }
  .icon-question{
    margin-left:6px;
    @include icon(inline-block,14px,14px);
    @include bis(url('../../assets/image/Explain_icon.png'),no-repeat,14px,14px);
  }
  .summary-header{
    position: relative;
    >span{
      display: inline-block;
    }
    >div{
      position: absolute;
      display: inline-block;
      right:0;
      top:-20px;
      .ivu-dropdown{
        >.ivu-dropdown-rel:not(.ivu-select-dropdown){
          padding:0 18px;
          height:60px;
          line-height: 60px;
          >a{
            @include sc(14px,#333);
            >i{
              vertical-align: middle;
              @include icon(inline-block,10px,6px);
              @include bis(url('../../assets/image/arrow_black_down_n.png'),no-repeat,10px,6px);
              margin-left: 11px;
            }
          }
          &:hover{
            background: #fff;
            >a{
              color:#0080ff;
              >i{
                @include bis(url('../../assets/image/arrow_blue_up_s.png'),no-repeat,10px,6px);
                margin-left: 11px;
              }
            }
          }
        }
        .ivu-select-dropdown{
          clear: both;
          margin: 0;
          padding: 0;
          box-shadow: 0 4px 12px rgba(0,128,255,.2);
          -webkit-box-shadow: 0 4px 12px rgba(0,128,255,.2);
          border-radius: 0;
          .ivu-dropdown-menu{
            >li{
              @include sc(14px,#666);
              padding:13px 24px;
              >span{
                display: inline-block;
                margin-left: 60px;
              }
            }
          }
          &:hover{
            .ivu-dropdown-rel{
              background: #fff;
            }
          }
          .management-state{
            padding: 0 24px;
            >li{
              height:80px;
              width:338px;
              border-bottom: 1px solid #e3e3e3;
              >h3{
                @include sc(14px,#333);
                >span{
                  @include sc(14px,#41d941);
                  margin-left: 24px;
                }
                padding: 16px 0 10px 0;
              }
              >p{
                @include sc(14px,#999);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              &:last-child{
                border-bottom: none;
              }
            }
          }
        }
      }
    }
  }
  .today-total,.today-order{
    display: inline-block;
    width:49.6%;
    text-align: center;
    height:190px;
    padding-top: 37px;
  }
  .today-total{
    .ivu-col{
      >p{
        @include sc(14px,#999);
        line-height: 14px;
      }
      >h2{
        @include sc(60px,#333);
        line-height: 60px;
        margin: 18px auto;
    }
      >h3{
        @include sc(14px,#999);
        line-height: 14px;
      }
    }
  }
  .today-order{
    float: right;
    .ivu-col{
      >p{
        @include sc(14px,#999);
        line-height: 14px;
      }
      >h2{
        @include sc(50px,#999);
        line-height: 50px;
        margin-top: 40px;
      }
    }
  }
  .unread-msg{
    padding:25px 0 25px 20px;
    margin: 7px 0 30px 0;
    >i{
      @include icon(inline-block,24px,24px);
      @include bis(url('../../assets/image/sjsy_notice.png'),no-repeat,24px,24px);
      margin-right:14px;
    }
      .ivu-carousel{
        display: inline-block;
        width:500px;
        height:17px;
      }
      .ivu-carousel-item{
        width:500px;
        height:17px;
      }
      .demo-carousel{
        @include sc(14px,#666);
        width:500px;
      }
    >a{
      @include sc(14px,#999);
      float: right;
      margin-right: 25px;
      margin-top: 3px;
      &:hover{
        color:#0080ff;
      }
    }
  }
  .services-expression{
    display: inline-block;
    vertical-align: top;
    width:39%;
    margin-right:1.1%;
    margin-bottom: 30px;
    .ivu-row{
      padding-bottom: 44px;
    }
    .ivu-col{
      /*text-align: center;*/
      padding-left: 9%;
      overflow: hidden;
      >h2{
        @include sc(20px,#333);
        line-height: 20px;
        padding-top: 45px;
      }
      >h3{
        margin: 14px 0 10px 0;
        @include sc(12px,#666);
        line-height: 12px;
      }
      >p{
        @include sc(12px,#999);
        margin-bottom: 9px;
        min-width: 100px;
        >i{
          vertical-align: top;
          margin-top: 2px;
        }
      }
    }
  }
  .home-analysis{
    display: inline-block;
    width:59.9%;
    >div{
       >div{
         float: left;
         width:32.4%;
         height:300px;
         &:nth-child(1){
           text-align: center;
           >h2{
             @include sc(14px,#666);
             padding: 50px 0 35px 0;
           }
           >h3{
             @include sc(14px,#666);
             margin-bottom: 50px;
             >span{
               @include sc(30px,#333);
             }
           }
           >p{
             @include sc(14px,#666);
           }
         }
         &:nth-child(2){
           margin: 0 1.3%;
           text-align: center;
           >h2{
             @include sc(14px,#666);
             margin: 50px 0 35px 0;
           }
           >h3{
             @include sc(14px,#666);
             >span{
               @include sc(30px,#333);
             }
           }
           >h4{
             @include sc(12px,#999);
             margin: 10px 0 23px 0;
           }
           >p{
             @include sc(14px,#666);
             margin-bottom: 27px;
           }
           >a{
             @include sc(12px,#999);
             >span{
               @include sc(14px,#999);
               margin-left: 10px;
             }
           }
         }
         &:nth-child(3){
           text-align: center;
           >h2{
             @include sc(14px,#666);
             >a{
               @include sc(14px,#48ff00);
             }
             margin: 50px 0 25px 0;
           }
           >div{
             margin: auto;
             position: relative;
             @include wh(80px,80px);
             border:3px solid rgba(72, 255, 0, 1);
             border-radius: 50%;
             >span{
               position: absolute;
               top:-2px;
               left:-2px;
               display: inline-block;
               @include wh(77px,77px);
               border:5px solid rgba(72, 255, 0, .3);
               border-radius: 50%;
               text-align: center;
               line-height: 65px;
               @include sc(16px,#666);
             }
           }
           >h3{
             @include sc(12px,#999);
             margin: 25px 0 30px 0;
           }
           >p{
             @include sc(14px,#666);
             >span{
               &:nth-child(1){
                 margin-right: 20%;
                 &::before{
                   background-color: rgba(72, 255, 0, 1);
                 }
               }
               &:nth-child(2):before{
                 background-color: rgba(72, 255, 0, .3);
               }
               &::before{
                 content:'';
                 width:10px;
                 height:10px;
                 display: inline-block;
                 border-radius: 50%;
                 margin-right: 14px;
               }
             }
           }
         }
       }
    }
    >p{
      >span{
        display: inline-block;
        float: right;
        >a{
          @include sc(14px,#333);
          padding:0 16px;
          &:nth-child(2){
           border-left:1px solid #e5e5e5;
           border-right:1px solid #e5e5e5;
          }
          &:hover{
            color:#0080ff;
          }
        }
      }
    }
  }
  >div{
    &:last-child{
      >p{
        @include sc(14px,#333);
        line-height: 14px;
        margin-bottom: 20px;
        >a{
          display: inline-block;
          float: right;
          @include sc(12px,#999);
          margin-right: 16px;
          >span{
            margin-left: 12px;
            font-size: 14px;
          }
          &:hover{
           color:#0080ff;
          }
        }
      }
      >div{
        height:98px;
        padding:42px 0 42px 40px;
        >p{
          @include sc(14px,#666);
          >span{
            @include sc(12px,#999);
            &:nth-child(1){
              margin: 0 48px 0 80px;
            }
          }
        }
      }
    }
  }
}
</style>

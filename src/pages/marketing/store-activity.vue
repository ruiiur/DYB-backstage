<template>
  <div class="store-activity">
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
    <div class="store-activity-top">
      <h2>新建活动</h2>
      <div>
        <img src="../../assets/image/manjian.png">
        <div>
          <h2>满减活动</h2>
          <p>下单满足条件后可享减免优惠</p>
        </div>
        <a href="javascript:;">新建</a>
      </div><div>
        <img src="../../assets/image/fanquan.png">
        <div>
          <h2>下单返券</h2>
          <p>下单满足指定金额赠券</p>
        </div>
        <a href="javascript:;" @click="orderCoupons=true">新建</a>
      </div><div>
        <img src="../../assets/image/youhuiquan.png">
        <div>
          <h2>商家优惠券</h2>
          <p>创建商家代金券来引流、分流</p>
        </div>
        <a href="javascript:;" @click="merchantCoupons=true">新建</a>
      </div><div class="mar">
        <img src="../../assets/image/xinke.png">
        <div>
          <h2>新客立减</h2>
          <p>用户初次在本店下单可享减免优惠</p>
        </div>
        <a href="javascript:;" @click="newCustomer=true">新建</a>
      </div><div>
        <img src="../../assets/image/zhekou.png">
        <div>
          <h2>折扣商品</h2>
          <p>指定折扣商品或特价商品优惠</p>
        </div>
        <a href="javascript:;" @click="jumpDiscount">新建</a>
      </div><div>
        <img src="../../assets/image/yingxiao.png">
        <div>
          <h2>精准营销</h2>
          <p>指定折扣商品或特价商品优惠</p>
        </div>
        <a href="javascript:;" @click="jumpPrecision">新建</a>
      </div><div>
        <img src="../../assets/image/maizeng.png">
        <div>
          <h2>买赠活动</h2>
          <p>指定折扣商品或特价商品优惠</p>
        </div>
        <a href="javascript:;" @click="presentActivity=true">新建</a>
      </div><div class="mar">
        <img src="../../assets/image/jianpeisongfei.png">
        <div>
          <h2>减配送费</h2>
          <p>指定折扣商品或特价商品优惠</p>
        </div>
        <a href="javascript:;" @click="shippingFee=true">新建</a>
      </div>
      <Modal
        v-model="merchantCoupons"
        title="商家优惠券"
        okText="创建活动"
        class-name="vertical-center-modal modal-merchant-coupons"
      >
        <p><label>活动名称</label><Input/></p>
        <p>
          <label >活动时间</label><DatePicker type="date"  style="width: 200px"></DatePicker>
          <span>至</span>
          <DatePicker type="date"  style="width: 200px"></DatePicker>
        </p>
        <p>
          <label>面向人群</label>
          <RadioGroup v-model="crowd">
            <Radio label="新用户"></Radio>
            <Radio label="新老用户通用"></Radio>
          </RadioGroup>
        </p>
        <p><label>券包总数</label><Input/></p>
        <p>
          <label>发放渠道<i></i></label>
          <RadioGroup v-model="channel">
            <Radio label="店内店外"></Radio>
            <Radio label="仅限店外"></Radio>
          </RadioGroup>
        </p>
        <p><label>优惠券</label><a href="">添加优惠券</a></p>
        <Checkbox v-model="single">已阅读并同意<a href="javascript:;">《商家自营销协议》</a></Checkbox>
      </Modal>
      <Modal
        v-model="orderCoupons"
        title="下单返券"
        okText="创建活动"
        class-name="vertical-center-modal modal-order-coupons"
      >
        <p><label>活动名称</label><Input/></p>
        <p>
          <label >活动时间</label><DatePicker type="date"  style="width: 200px"></DatePicker>
          <span>至</span>
          <DatePicker type="date"  style="width: 200px"></DatePicker>
        </p>
        <p>
          <label>返券条件</label>
          <span>订单实付金额（含运费）满</span>
          <Input/>
          <span>元</span>
        </p>
        <p>注：点击创建活动后，此处成本均由商家承担</p>
        <p><label>优惠券</label><a href="">添加优惠券</a></p>
        <Checkbox v-model="single">已阅读并同意<a href="javascript:;">《商家自营销协议》</a></Checkbox>
      </Modal>
      <Modal
        v-model="newCustomer"
        title="新客立减"
        okText="创建活动"
        class-name="vertical-center-modal modal-new-customer"
      >
        <p>
          <label >活动时间</label><DatePicker type="date"  style="width: 200px"></DatePicker>
          <span>至</span>
          <DatePicker type="date"  style="width: 200px"></DatePicker>
        </p>
        <p>
          <label>门店新客立减</label><Input/>
          <span>元</span>
          <span>商家承担</span><Input/><span>元</span>
        </p>
        <Checkbox v-model="single">已阅读并同意<a href="javascript:;">《商家自营销协议》</a></Checkbox>
      </Modal>
      <Modal
        v-model="presentActivity"
        title="买赠活动"
        okText="创建活动"
        class-name="vertical-center-modal modal-present-activity"
      >
        <p>买赠活动模态框</p>
      </Modal>
      <Modal
        v-model="shippingFee"
        title="减配送费"
        okText="创建活动"
        class-name="vertical-center-modal modal-shipping-fee"
      >
        <p>
          <label >活动时间</label><DatePicker type="date"  style="width: 200px"></DatePicker>
          <span>至</span>
          <DatePicker type="date"  style="width: 200px"></DatePicker>
        </p>
        <p>
          <label>配送费立减</label><Input/>
          <span>元</span>
        </p>
        <Checkbox v-model="single">已阅读并同意<a href="javascript:;">《商家自营销协议》</a></Checkbox>
      </Modal>
    </div>
    <div class="store-activity-content">
      <Tabs value="name1">
        <TabPane label="进行中活动" name="name1">
          <Table size="large" :columns="columns1" :data="data1"></Table>
        </TabPane>
        <TabPane label="已结束活动" name="name2">
          <Table size="large" :columns="columns1" :data="data1"></Table>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        availableCopies:false,//活动商品可售份数设置模态框
        types:'有限制',//每单可享活动商品份数默认值
        columns1: [
          {
            title: '活动名称',
            key: 'activityName'
          },
          {
            title: '活动状态',
            key: 'activityState',
            render:(h,params)=>{
              return h('p',[
                h('a',{
                  attrs:{
                    class:'activity-d'
                  }
                },'进行中'),
                h('span',{
                  attrs:{
//                    href:'/home'
                  }
                },'剩余13天')
              ])
            }
          },
          {
            title: '活动时间',
            key: 'activityTime'
          },
          {
            title: '活动内容',
            key: 'activityContent'
          },
          {
            title: '操作',
            key: 'operation',
            render:(h,params)=>{
              return h('p',[
                h('a',{
                  attrs:{
//                    href:'/home'
                  }
                },'查看详情'),
                h('a',{
                  on: {
                    click: () => {
//                      this.sendTicket=true;
                    }
                  }
                },'撤销活动')
              ])
            }
          }
        ],
        data1: [
          {
            activityName:'满减问题',
            activityState: '老香港蛋糕（安亭店）',
            activityTime: '2017-10-11  至  2017-10-30',
            activityContent: ' 满25减3元、满35减5元、满55减8元',
          },
          {
            activityName:'满减问题',
            activityState: '老香港蛋糕（安亭店）',
            activityTime: '2017-10-11  至  2017-10-30',
            activityContent: ' 满25减3元、满35减5元、满55减8元',
          },
          {
            activityName:'满减问题',
            activityState: '老香港蛋糕（安亭店）',
            activityTime: '2017-10-11  至  2017-10-30',
            activityContent: ' 满25减3元、满35减5元、满55减8元',
          },
          {
            activityName:'满减问题',
            activityState: '老香港蛋糕（安亭店）',
            activityTime: '2017-10-11  至  2017-10-30',
            activityContent: ' 满25减3元、满35减5元、满55减8元',
          },
          {
            activityName:'满减问题',
            activityState: '老香港蛋糕（安亭店）',
            activityTime: '2017-10-11  至  2017-10-30',
            activityContent: ' 满25减3元、满35减5元、满55减8元',
          },
          {
            activityName:'满减问题',
            activityState: '老香港蛋糕（安亭店）',
            activityTime: '2017-10-11  至  2017-10-30',
            activityContent: ' 满25减3元、满35减5元、满55减8元',
          },
          {
            activityName:'满减问题',
            activityState: '老香港蛋糕（安亭店）',
            activityTime: '2017-10-11  至  2017-10-30',
            activityContent: ' 满25减3元、满35减5元、满55减8元',
          },
          {
            activityName:'满减问题',
            activityState: '老香港蛋糕（安亭店）',
            activityTime: '2017-10-11  至  2017-10-30',
            activityContent: ' 满25减3元、满35减5元、满55减8元',
          }
        ],
        merchantCoupons:false,//商家优惠券模态框
        orderCoupons:false,//下单返券优惠券
        newCustomer:false,//新客立减模态框
        presentActivity:false,//买赠活动模态框
        shippingFee:false,//减配送费模态框
        single:false,//是否同意商家自营销协议
        crowd:'',//面向人群默认值
        channel:'仅限店外',//发放渠道默认值
      }
    },
    methods: {
      jumpPrecision(){
        this.$router.push({path:'/precision'});
      },
      jumpDiscount(){
        this.$router.push({path:'/discount'});
      },
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
  .modal-merchant-coupons,.modal-order-coupons,.modal-new-customer,.modal-present-activity,.modal-shipping-fee{
    .ivu-modal{
      width:720px !important;
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
    .ivu-modal-body {
      padding: 0;
      margin: 0 20px;
      border-bottom: 1px solid #e3e3e3;
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
    .ivu-modal-body{
      padding: 0;
      margin: 0 20px;
      border-bottom: 1px solid #e3e3e3;
      >p{
        margin-bottom: 0;
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
  .modal-merchant-coupons{
    .ivu-modal-body{
      >p{
        margin-bottom: 20px;
        &:nth-child(1),&:nth-child(2),&:nth-child(4),&:nth-child(6){
          >label{
            margin-top: 7px;
          }
        }
        >label{
          @include sc(14px,#333);
          display: inline-block;
          width:76px;
          margin-right: 24px;
          vertical-align: top;
        }
        .ivu-input-wrapper{
          width:400px;
          height:36px;
          .ivu-input{
            height:36px;
            border-radius: 0;
            box-shadow: none;
          }
        }
        .ivu-date-picker{
          width:220px !important;
          .ivu-input-wrapper{
            width:220px;
            height:36px;
            .ivu-input{
              height:36px;
              border-radius: 0;
              box-shadow: none;
            }
          }
          .ivu-input-icon{
            height:36px;
            line-height: 36px;
          }
        }
        .ivu-radio-group{
          >label{
            @include sc(14px,#333);
            >span{
              margin-right: 12px;
            }
          }
        }
        >a{
          display: inline-block;
          @include wh(100px,36px);
          line-height: 35px;
          border:1px solid #0080ff;
          @include sc(14px,#0080ff);
          text-align: center;
        }
        >span{
          @include sc(14px,#666);
          margin:0 11px;
        }
      }
      >.ivu-checkbox-wrapper{
        margin:10px 0 30px 100px;
        @include sc(14px,#333);
        line-height: 14px;
        >a{
          @include sc(14px,#0080ff);
        }
        >span{
          margin-right: 10px;
        }
      }
    }
  }
  .modal-order-coupons{
    .ivu-modal-body{
      >p{
        margin-bottom: 20px;
        &:nth-child(1),&:nth-child(2),&:nth-child(3),&:nth-child(5){
          >label{
            margin-top: 7px;
          }
        }
        &:nth-child(4){
          @include wh(400px,36px);
          line-height: 36px;
          border:1px solid #fec7a9;
          background: #fef5ec;
          padding-left: 16px;
          margin-left: 100px;
          margin-top: -8px;
        }
        &:nth-child(3){
          .ivu-input-wrapper{
            @include wh(120px,36px);
            margin: 0 15px;
            .ivu-input{
              height:36px;
              border-radius: 0;
              box-shadow: none;
            }
          }
          >span{
            margin: 0;
          }
        }
        >label{
          @include sc(14px,#333);
          display: inline-block;
          width:76px;
          margin-right: 24px;
          vertical-align: top;
        }
        .ivu-input-wrapper{
          width:400px;
          height:36px;
          .ivu-input{
            height:36px;
            border-radius: 0;
            box-shadow: none;
          }
        }
        .ivu-date-picker{
          width:220px !important;
          .ivu-input-wrapper{
            width:220px;
            height:36px;
            .ivu-input{
              height:36px;
              border-radius: 0;
              box-shadow: none;
            }
          }
          .ivu-input-icon{
            height:36px;
            line-height: 36px;
          }
        }
        >span{
          @include sc(14px,#666);
          margin:0 11px;
        }
        >a{
          display: inline-block;
          @include wh(100px,36px);
          line-height: 35px;
          border:1px solid #0080ff;
          @include sc(14px,#0080ff);
          text-align: center;
        }
        >span{
          @include sc(14px,#666);
        }
      }
      >.ivu-checkbox-wrapper{
        margin:10px 0 30px 100px;
        @include sc(14px,#333);
        line-height: 14px;
        >a{
          @include sc(14px,#0080ff);
        }
        >span{
          margin-right: 10px;
        }
      }
    }
  }
  .modal-shipping-fee{
    .ivu-modal-body{
      >p{
        margin-bottom: 20px;
        >label{
          @include sc(14px,#333);
          display: inline-block;
          width:76px;
          margin-right: 24px;
          vertical-align: top;
          margin-top: 7px;
        }
        .ivu-input-wrapper{
          width:120px;
          height:36px;
          .ivu-input{
            height:36px;
            border-radius: 0;
            box-shadow: none;
          }
        }
        .ivu-date-picker{
          width:220px !important;
          .ivu-input-wrapper{
            width:220px;
            height:36px;
            .ivu-input{
              height:36px;
              border-radius: 0;
              box-shadow: none;
            }
          }
          .ivu-input-icon{
            height:36px;
            line-height: 36px;
          }
        }
        >span{
          @include sc(14px,#666);
          margin:0 11px;
        }
      }
      >.ivu-checkbox-wrapper{
        margin:10px 0 30px 100px;
        @include sc(14px,#333);
        line-height: 14px;
        >a{
          @include sc(14px,#0080ff);
        }
        >span{
          margin-right: 10px;
        }
      }
    }
  }
  .modal-new-customer{
    .ivu-modal-body{
      >p{
        margin-bottom: 20px;
        >label{
          @include sc(14px,#333);
          display: inline-block;
          width:85px;
          margin-right: 24px;
          vertical-align: top;
          margin-top: 7px;
        }
        .ivu-input-wrapper{
          width:120px;
          height:36px;
          .ivu-input{
            height:36px;
            border-radius: 0;
            box-shadow: none;
          }
        }
        .ivu-date-picker{
          width:220px !important;
          .ivu-input-wrapper{
            width:220px;
            height:36px;
            .ivu-input{
              height:36px;
              border-radius: 0;
              box-shadow: none;
            }
          }
          .ivu-input-icon{
            height:36px;
            line-height: 36px;
          }
        }
        >span{
          @include sc(14px,#666);
          margin:7px 11px 0 11px;
          display: inline-block;
          vertical-align: top;
        }
      }
      >.ivu-checkbox-wrapper{
        margin:10px 0 30px 109px;
        @include sc(14px,#333);
        line-height: 14px;
        >a{
          @include sc(14px,#0080ff);
        }
        >span{
          margin-right: 10px;
        }
      }
    }
  }
  .store-activity{
    position: relative;
    min-width: 1619px;
    height:calc(100vh - 72px);
    overflow-y: scroll;
    >span{
      position: absolute;
      right:56px;
      top:36px;
      @include sc(14px,#333);
      >a{
        @include sc(14px,#0080ff);
        margin-left: 20px;
      }
    }
    .store-activity-top{
      padding: 36px 40px 18px 20px;
      width:100%;
      background: #fff;
      margin-bottom: 20px;
      >h2{
        @include sc(14px,#000);
        line-height: 14px;
        margin-bottom: 24px;
      }
      >div:not(.mar){
        margin-right: 0.6%;
      }
      >div{
        display: inline-block;
        vertical-align: top;
        width:23.5%;
        border:1px solid #e3e3e3;
        margin-bottom: 12px;
        padding: 35px 20px 28px 20px;
        >div{
          display: inline-block;
          vertical-align: top;
          padding-top: 4px;
          margin-left: 7px;
          >h2{
            @include sc(14px,#666);
            line-height:14px;
            margin-bottom: 14px;
          }
          >p{
            @include sc(12px,#999);
            line-height:12px;
          }
        }
        >img{
          @include wh(50px,50px);
        }
        >a{
          float: right;
          height:36px;
          line-height: 35px;
          border:1px solid #0080ff;
          @include sc(14px,#0080ff);
          width:80px;
          text-align: center;
          margin-top: 7px;
        }
      }
    }
    .store-activity-content{
      padding: 0 40px 0 20px;
      .ivu-table-wrapper{
        position: inherit !important;
        border:none !important;
        box-shadow:0 0 10px rgba(127,191,255,.1);
        margin-bottom: 36px;
        .ivu-table-header{
          th{
            height:56px;
            background: #fafafa;
            border-bottom: none;
            text-align: center;
            .ivu-table-cell{
              @include sc(14px,#333);
              font-weight: normal;
            }
          }
        }
        .ivu-table-body{
          .ivu-table-row{
            >td{
              border-bottom: none;
              text-align: center;
              .ivu-table-cell{
                @include sc(14px,#333);
                font-weight: normal;
                .activity-d{
                  color:#6acc29;
                  margin-right: 10px;
                }
                >p{
                  >a{
                    @include sc(14px,#0080ff);
                    &:nth-child(1){
                      margin-right: 30px;
                    }
                  }
                }
              }
            }
            .business-operation{
              select{
                width:100%;
                height:36px;
                border:1px solid #ccc;
                padding-left: 10px;
              }
            }
          }
        }
        .ivu-table:before{
          height:0;
        }
        .ivu-table:after {
          width: 0;
        }
      }
    }
  }
</style>

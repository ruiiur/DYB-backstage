<template>
  <div class="customer-evaluation">
    <div>
      <h2>顾客评价<span>近30天评价统计</span><a href="javascript:;">查看评价统计详情 <span> ></span></a></h2>
      <div>
        <div>
          <p>商铺评分</p>
          <h1>5.0</h1>
        </div><div>
          <Row>
            <i-col span="8">
              <p>口味评分</p>
              <h1>- -</h1>
            </i-col>
            <i-col span="8">
              <p>包装评分</p>
              <h1>- -</h1>
            </i-col>
            <i-col span="8">
              <p>配送评分</p>
              <h1>5.0</h1>
            </i-col>
          </Row>
        </div>
      </div>
    </div>
    <div>
      <p>
        <label>评价管理</label>
        <RadioGroup v-model="evaluat">
          <Radio label="全部"></Radio>
          <Radio label="未回复"></Radio>
          <Radio label="已回复"></Radio>
        </RadioGroup>
      </p>
      <p>
        <label>满意程度</label>
        <RadioGroup v-model="satisfaction">
          <Radio label="全部"></Radio>
          <Radio label="好评"></Radio>
          <Radio label="中评"></Radio>
          <Radio label="差评"></Radio>
        </RadioGroup>
      </p>
      <p>
        <label>有无内容</label>
        <RadioGroup v-model="content">
          <Radio label="全部"></Radio>
          <Radio label="有内容"></Radio>
        </RadioGroup>
      </p>
      <p>
        <label>选择日期</label>
        <DatePicker type="date"  style="width: 200px"></DatePicker>
        <span>至</span>
        <DatePicker type="date"  style="width: 200px"></DatePicker>
      </p>
    </div>
    <div>
      <p>符合条件的评价  5条</p>
      <Table size="large" :columns="columns1" :data="data1"></Table>
      <Page :total="10"></Page>
      <Modal
        v-model="sendTicket"
        title="精准营销"
        okText="立即发券"
        class-name="vertical-center-modal modal-send-ticket"
      >
        <ul>
          <li>
            <label>优惠劵名称</label>
            <Input value="老香港蛋糕（安亭店）优惠券" ></Input>
          </li>
          <li>
            <label>优惠劵金额</label>
            <Input placeholder="请输入密码" ></Input>
            <span>元</span>
          </li>
          <li>
            <label>使用门槛  <em>满</em></label>
            <Input placeholder="请输入金额" ></Input>
            <span>元可用</span>
          </li>
          <li>
            <label>优惠劵有效期<em>发券之日起</em></label>
            <Select  style="width:200px">
              <Option v-for="item in dateList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <span>多少天可用</span>
          </li>
        </ul>
        <p><Checkbox v-model="single">我已同意</Checkbox><span>《商家自营销协议》</span></p>
      </Modal>
      <Modal
        v-model="reportMalicious"
        title="可举报的恶意营销"
        okText="继续举报"
        @on-ok="ok"
        class-name="vertical-center-modal modal-report-malicious"
      >
       <div>
         <a href="javascript">以差评谋求不正当得利</a>
         <a href="javascript">广告或垃圾信息</a>
         <a href="javascript">同行恶意评价</a>
         <a href="javascript">存在不文明用语</a>
         <a href="javascript">敏感或违法信息</a>
         <a href="javascript">隐私泄露</a>
       </div>
       <p>只有以上类型的恶意评价可以举报，如滥用举报，将影响您的商家排名</p>
      </Modal>
    </div>
  </div>
</template>
<script>

  export default {

    data() {
      return {
        evaluat: '全部',//评价管理默认值
        satisfaction:'全部',//满意程度默认值
        content:'全部',//有无内容默认值
        sendTicket:false,//发券模态框
        single:false,//是否同意《商家自营销协议》
        reportMalicious:false,//举报恶意营销模板
        dateList: [
          {
            value: 'shitian',
            label: '10天'
          },
          {
            value: 'ershitian',
            label: '20天'
          },
          {
            value: 'sanshitian',
            label: '30天'
          }
        ],//用户角色列表
        columns1: [
          {
            title: '下单用户',
            key: 'user'
          },
          {
            title: '下单时间',
            key: 'orderTime'
          },
          {
            title: '送达时间',
            key: 'deliveryTime'
          },
          {
            title: '商家评分',
            key: 'rate',
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('p',{
                  style: {
                    marginRight: '5px',
                  }
                },[
                  h('Rate',{
                    props:{"allow-half":'allow-half',"disabled":'disabled'},
                    attrs: {
                      value:params.row.rateSize
                    }
                  }),
                  h('span',{},+params.row.rateSize)   //这是评分
                ]),

                h('Dropdown',
                  {
//                                        props: {
//                                            trigger: 'click'
//                                        },  //这是点击
                    style: {
                      marginLeft: '20px'
                    },
                  },[
                    h('a', {
                      attrs: {
                        href:"javascript:void(0)"
                      }
                    }, '更多评分',[
                      h('Icon',{
                        props:{
                          type:"arrow-down-b"
                        }
                      })
                    ]),
                    h('DropdownMenu',{
                      slot:"list"
                    },[
                      h('DropdownItem','口味:',[
                        h('Rate',{
                          props:"allow-half",
                          attrs: {
                            value:5
                          }
                        },+5),   //这个地方显示不出来分数是不是因为宽度不够，如果不是，可以再写一个span,这是没有办法的办法
                      ]),

                      h('DropdownItem','包装:',[
                        h('Rate',{
                          props:"allow-half",
                          attrs: {
                            value:4
                          }
                        },+4),   //这个地方显示不出来分数是不是因为宽度不够，如果不是，可以再写一个span,这是没有办法的办法
                      ]),
                      h('DropdownItem','配送:',[
                        h('Rate',{
                          props:"allow-half",
                          attrs: {
                            value:2
                          }
                        },+2),   //这个地方显示不出来分数是不是因为宽度不够，如果不是，可以再写一个span,这是没有办法的办法
                      ]),

                    ])
                  ]),

              ]);
            }
          },
          {
            title: '评价内容',
            key: 'content'
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
                },'回复'),
                h('a',{
                  on: {
                    click: () => {
                      this.sendTicket=true;
                    }
                  }
                },'发券'),
                h('a',{
                  attrs:{
//                    href:'/home'
                  },
                  on: {
                    click: () => {
                      this.reportMalicious=true;
                    }
                  }
                },'举报')
              ])
            }
          }
        ],
        data1: [
          {
            user:'匿名用户',
            orderTime: '2017-09-23',
            deliveryTime: '14分钟送达',
            score:'5.0',
            content:'改用户没有填写评价内容',
            rateSize:5,//这个表示外层评分
          },
          {
            user:'匿名用户',
            orderTime: '2017-09-23',
            deliveryTime: '14分钟送达',
            score:'5.0',
            content:'改用户没有填写评价内容',
            rateSize:4,//这个表示外层评分
          },
          {
            user:'匿名用户',
            orderTime: '2017-09-23',
            deliveryTime: '14分钟送达',
            score:'5.0',
            content:'改用户没有填写评价内容',
            rateSize:3,//这个表示外层评分
          }

        ]
      }
    },
    methods: {
      ok () {
        this.$router.push({path:'/report'});
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
  .modal-send-ticket,.modal-report-malicious{
    .ivu-modal{
      width:600px !important;
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
  .modal-send-ticket{
    .ivu-modal-body{
      padding: 0;
      margin: 0 20px;
      border-bottom: 1px solid #e3e3e3;
      >ul{
        >li{
          margin: 0 0 16px 11px;
          &:nth-child(1),&:nth-child(2),&:nth-child(3){
            >label{
              display: inline-block;
              vertical-align: middle;
              @include sc(14px,#333);
              width:85px;
              margin-right:24px;
              text-align: right;
              >em{
                @include sc(14px,#333);
                margin-left: 10px;
              }
            }
          }
          &:nth-child(4){
            >label{
              display: inline-block;
              vertical-align: middle;
              @include sc(14px,#333);
              width:167px;
              margin-right: 24px;
              >em{
                @include sc(14px,#333);
                margin-left: 10px;
              }
            }
            .ivu-select{
              width:217px !important;
              height:40px;
              .ivu-select-selection{
                border-radius: 0;
                height:40px;
                .ivu-select-selected-value{
                  height:40px;
                  line-height: 40px;
                  @include sc(14px,#333);
                  padding-left: 16px;
                }
              }
              .ivu-select-placeholder{
                height:40px;
                line-height: 40px;
                @include sc(14px,#999);
              }
            }
          }
          >span{
            display: inline-block;
            vertical-align: middle;
            @include sc(14px,#333);
            margin-left: 13px;
          }
          .ivu-input-wrapper{
            @include wh(300px,40px);
            .ivu-input{
              @include wh(300px,40px);
              border-radius: 0;
              padding-left: 16px;
              @include sc(14px,#333);
            }
            .ivu-input::placeholder{
              @include sc(14px,#999);
            }
            .ivu-input:focus{
              box-shadow:none;
            }
          }
          .ivu-radio-group{
            >label{
              @include sc(14px,#333);
              margin-right: 30px;
              >span{
                margin-right: 12px;
              }
            }
          }
        }
      }
      >p{
        text-align: center;
        line-height: 14px;
        margin: 30px 0 26px 0;
        >label{
          @include sc(14px,#333);
          >span{
            margin-right: 8px;
          }
        }
        >span{
          @include sc(14px,#0080ff);
        }
      }
    }
  }
  .modal-report-malicious{
    .ivu-modal-body{
      padding: 0;
      margin: 0 20px;
      border-bottom: 1px solid #e3e3e3;
     >div{
       margin: 20px 0;
       >a{
         @include sc(14px,#666);
         height:28px;
         line-height: 28px;
         border:1px solid #e3e3e3;
         display: inline-block;
         padding: 0 21px;
         margin: 0 8px 20px 0;
       }
     }
    >p{
      height:60px;
      line-height: 60px;
      background-color: rgba(254, 245, 236, 1);
      border: solid 1px rgba(254, 199, 169, 1);
      padding-left: 40px;
      @include sc(14px,#666);
      margin-bottom: 30px;
    }
    }
  }
  .customer-evaluation{
    .ivu-radio-group{
      >label{
        @include sc(14px,#333);
      }
    }
    >div{
      &:nth-child(1){
        background: #fff;
        padding:36px 40px 0 20px;
        >h2{
          @include sc(14px,#000);
          line-height: 14px;
          margin-bottom: 19px;
          >span{
            @include sc(14px,#999);
            margin-left: 21px;
          }
          >a{
            float: right;
            @include sc(14px,#333);
            margin-right: 16px;
            >span{
              display: inline-block;
              vertical-align: middle;
              @include sc(17px,#333);
            }
          }
        }
        >div{
          border-top:1px solid #e3e3e3;
          width:100%;
          padding: 25px 0;
          >div{
            display: inline-block;
            &:nth-child(1){
              width:39.5%;
              border-right:1px solid #e3e3e3;
              text-align: center;
              >p{
                @include sc(14px,#666);
                line-height: 14px;
                margin-bottom: 20px;
              }
              >h1{
                @include sc(50px,#333);
                line-height: 50px;
              }
            }
            &:nth-child(2){
              width:60.5%;
              text-align: center;
              .ivu-col{
                >p{
                  @include sc(14px,#666);
                  line-height: 14px;
                  margin-bottom: 20px;
                }
                >h1{
                  @include sc(50px,#333);
                  line-height: 50px;
                }
              }
            }
          }
        }
      }
      &:nth-child(2){
        margin: 30px 40px 30px 20px;
        padding: 25px 0 25px 20px;
        box-shadow:0 0 10px rgba(127,191,255,.1);
        background: #fff;
        >p{
          margin-bottom: 12px;
          >label{
            @include sc(14px,#333);
            margin-right: 24px;
          }
          >span{
            @include sc(14px,#666);
            margin: 0px 11px;
          }
          .ivu-input{
            border-radius: 0;
            height:36px;
            line-height: 36px;
          }
          .ivu-input-icon{
           width:36px;
            height:36px;
            line-height: 36px;
          }
        }
      }
      &:nth-child(3){
        >p{
          @include sc(14px,#000);
          margin: 0 0 20px 20px;
        }
        .ivu-table-wrapper{
          position: inherit !important;
          border:none !important;
          box-shadow:0 0 10px rgba(127,191,255,.1);
          margin:0 40px 36px 20px;
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
                  >p{
                    >a{
                      @include sc(14px,#0080ff);
                      &:nth-child(2){
                        margin: 0 16px;
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
        }
        .ivu-page{
          float: right;
          margin-right: 40px;
        }
      }
    }
  }
</style>

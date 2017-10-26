<template>
 <div class="store-management">
   <Tabs value="name1">
     <TabPane label="门店信息" name="name1">
       <div class="stores-information">
         <div>
           <h2>账号信息</h2>
           <ul>
             <li><label>门店名称</label><span>老香港蛋糕</span><a href="">修改</a></li>
             <li><label>店铺电话</label><span>15011269822</span><a href="">修改</a></li>
             <li><label>店铺类型</label><span>火锅</span><a href="">修改</a></li>
             <li><label>店铺头像</label><img class="store-logo" src="../../assets/image/stote_message_logo.png"></img><a href="">修改头像</a></li>
             <li><label>店铺介绍</label><p>亲，梁记特色米粉以优先配送蜂鸟，遇到恶劣天气送餐较慢，请多多担待哈！如果您遇到美食凉了，或者口味不好，(记得第一时间和本店联系）我们一定加油改进，中餐用餐集中，请各位合理安排订餐时间！如需汤粉分开请备注。谢谢亲老小主的光临
               和支持！如果您对我们的服务满意，请给我们5分的好评率哦。</p><a href="">修改</a></li>
             <li><label>店铺公告</label><p>特色桂林米粉、特色龟苓膏、 经典炒饭，清凉夏日的甜品。</p><a href="">修改</a></li>
             <li><label>店铺实景</label><img class="live-action" src="../../assets/image/stote_message_image_a.png"></img><img class="live-action" src="../../assets/image/stote_message_image_b.png"></img><a href="">修改</a></li>
             <li><label>店铺二维码</label><img class="code" src="../../assets/image/stote_message_erweima.png">
               <div class="store-code">
                 <p>该二维码是您店铺的手机网址；</p>
                 <p>您可以将次二维码通过网上或线下宣传展示给您的用户；用户使用手机扫该描二维码，就可以访问您的店铺网页并下单哦！</p>
                 <button>下载二维码</button>
               </div>
             </li>
           </ul>
         </div>
         <div>
           <h2>营业设置</h2>
           <ul>
             <li><label>营业时间</label><span>09:20-23:00</span><a href="">修改</a></li>
             <li><label>外卖支付方式</label><CheckboxGroup v-model="payment">
                 <Checkbox label="微信支付"></Checkbox>
                 <Checkbox label="货到付款"></Checkbox>
               </CheckboxGroup>
               <a href="">修改</a></li>
             <li><label>预订单</label><span>仅当天</span><a href="">修改</a></li>
             <li><label>拼单</label><CheckboxGroup v-model="payTogether">
                 <Checkbox label="外卖拼单"></Checkbox>
                 <Checkbox label="堂吃拼单"></Checkbox>
               </CheckboxGroup>
               <a href="">修改</a></li>
           </ul>
         </div>
         <div>
           <h2>其他设置</h2>
           <ul>
             <li><label>开具发票</label><span>不支持</span><a href="">修改</a></li>
             <li><label>是否显示评论</label><span>显示</span><a href="">修改</a></li>
           </ul>
         </div>
       </div>
     </TabPane>
     <TabPane label="配送信息" name="name2">
       <div class="delivery-information">
         <div>
           <h2>配送服务</h2>
           <ul>
             <li><label>配送方式</label><span>蜂鸟配送</span><a href="">修改</a></li>
           </ul>
         </div>
         <div>
           <h2>配送设置</h2>
           <ul>
             <li><label>取餐地址</label><span>上海市徐汇区零陵路685号104室</span><a href="">修改</a></li>
             <li>
               <label>配送范围</label>
               <div class="area area-a">
                 <h3>区域1</h3>
                 <p><label>起送价</label><span>25</span>元</p>
                 <p><label>配送费</label><span>4</span>元</p>
                 <p><label>面积</label><span>1.44</span>平方公里</p>
               </div><div class="area area-b">
                 <h3>区域2</h3>
                 <p><label>起送价</label><span>25</span>元</p>
                 <p><label>配送费</label><span>5</span>元</p>
                 <p><label>面积</label><span>1.40</span>平方公里</p>
               </div><div class="area area-c">
                 <h3>区域3</h3>
                 <p><label>起送价</label><span>25</span>元</p>
                 <p><label>配送费</label><span>6</span>元</p>
                 <p><label>面积</label><span>1.47</span>平方公里</p>
               </div>
               <a href="">修改</a>
               <div id="container"></div>
             </li>
           </ul>
         </div>
       </div>
     </TabPane>
     <TabPane label="打印设置" name="name3">
       <div class="print-setup">
         <Button type="primary">刷新本页</Button>
         <Table size="large" :columns="columns1" :data="data1"></Table>
         <div class="print-explain">
           <p>说明：</p>
           <p>1、设置“菜品打印标签”后，厨房联仅打印标签对应的菜品，如果不设置“菜品打印标签”，厨房联同其他联一样打印所有菜品。</p>
           <p>例如：将某台打印机的“菜品打印标签”设置为“甜品”，则这台打印机出票时仅打印标签为“甜品的菜品”。</p>
           <p>2、多个标签用逗号分开，如“甜品，饮料”。</p>
         </div>
       </div>
     </TabPane>
   </Tabs>
 </div>
</template>
<script>
//  import AMap from 'AMap';
//  let map;
  export default {

    data() {
      return {
        payment:['微信支付','货到付款'],
        payTogether:['外卖拼单','堂吃拼单'],
        columns1: [
          {
            title: '打印机编号',
            key: 'id'
          },
          {
            title: '打印机控联',
            key: 'name'
          },
          {
            title: '绑定门店',
            key: 'store'
          },
          {
            title: '堂吃外卖',
            key: 'way'
          },
          {
            title: '绑定桌台',
            key: 'table'
          },
          {
            title: '菜品打印标签',
            key: 'labelling'
          },
          {
            title: '打印机状态',
            key: 'state'
          },
          {
            title: '操作',
            key: 'operation',
            render:(h,params)=>{
              return h('p',[
                h('a',{
                  attrs: {
                    href: '/home'
                  }
                },'修改')
              ])
            }
          }
        ],
        data1: [
          {
            id:'23454667',
            name: '总台联、总台联、总台联、总台联、总台联',
            store: '门店1',
            way: '堂吃',
            table:'全部桌台',
            labelling:'甜品',
            state:'在线'
          }
        ],
      }
    },
    mounted: function () {
      this.init()
    },
    methods: {
      init: function () {
        map = new AMap.Map('container', {
          center: [116.397428, 39.90923],
          resizeEnable: true,
          zoom: 10
        })
        AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function () {
          map.addControl(new AMap.ToolBar())
          map.addControl(new AMap.Scale())
        })
      }
    }
  }

</script>
<style lang="scss">
  .store-management{
    padding: 20px 30px 0 30px;
    .stores-information,.delivery-information{
      height:calc(100vh - 144px);
      overflow-y:scroll ;
      >div{
        background: #fff;
        box-shadow:0 0 10px rgba(127,191,255,.1);
        margin-bottom: 20px;
        >h2{
          height:50px;
          background: #fafafa;
          line-height: 50px;
          @include sc(14px,#000);
          padding-left: 31px;
        }
        >ul{
          margin: 0 30px;
          >li{
            border-bottom: 1px solid #e3e3e3;
            padding: 20px 0;
            >label{
              @include sc(14px,#999);
              display: inline-block;
              vertical-align: top;
              width:85px;
              margin-right: 37px;
            }
            >span{
              @include sc(14px,#333);
            }
            >a{
              float: right;
              @include sc(14px,#0080ff);
            }
            >p{
              display:inline-block ;
              max-width:776px;
              @include sc(14px,#666);
              width:70%;
            }
            &:last-child{
              border-bottom: none;
            }
          }
        }
      }
    }
    .stores-information{
      .store-code{
        display:inline-block ;
        vertical-align: top;
        >p{
          @include sc(12px,#666);
          line-height: 12px;
          margin-bottom: 10px;
        }
        >button{
          @include wh(100px,36px);
          background: #fff;
          border:1px solid #0080ff;
          @include sc(12px,#0080ff);
          box-sizing: border-box;
          border-radius: 2px;
          margin-top: 2px;
        }
      }
      .code{
        @include wh(90px,90px);
        margin-right: 30px;
        margin-top: -6px;
      }
      .live-action{
        @include wh(91px,91px);
        margin-right: 20px;
        margin-top: -6px;
      }
      .store-logo{
        @include wh(160px,120px);
        border-radius: 2px;
      }
      .ivu-checkbox-group{
        display: inline-block;
        >label{
          margin-right: 30px;
          >span{
            &:nth-child(2){
              @include sc(14px,#333);
              margin-left: 10px;
            }
          }
        }
      }
    }
    .delivery-information{
      .area{
        display: inline-block;
        width:20%;
        height:134px;
        max-width:300px;
        padding:17px 0 21px 22px;
        box-sizing: border-box;
        >p{
          @include sc(14px,#666);
          line-height: 14px;
          >label{
            display: inline-block;
            width:42px;
            @include sc(14px,#666);
            margin-right:10%;
          }
          >span{
            @include sc(14px,#333);
          }
          &:nth-child(2){
           margin: 16px 0 12px 0;
          }
          &:nth-child(3){
            margin-bottom: 12px;
          }
        }
      }
      .area-a{
        border:1px solid #0abbb5;
        >h3{
          @include sc(14px,#0abbb5);
          line-height: 14px;
        }
      }
      .area-b{
        border:1px solid #ff5959;
        margin: 0 12px;
        >h3{
          @include sc(14px,#ff5959);
          line-height: 14px;
        }
      }
      .area-c{
        border:1px solid #ffa733;
        >h3{
          @include sc(14px,#ffa733);
          line-height: 14px;
        }
      }
      #container{
        height:675px;
        margin: 24px 0 23px 124px;
      }
    }
    .print-setup{
      .ivu-btn-primary {
        color: #fff;
        background-color: #0080ff;
        border-color: #0080ff;
        border-radius: 2px;
        @include sc(14px,#fff);
      }
      .ivu-table-wrapper{
        position: inherit !important;
        border:none !important;
        box-shadow:0 0 10px rgba(127,191,255,.1);
        margin: 30px 0;
        .ivu-table-header{
          th{
            height:50px;
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
                @include sc(14px,#666);
                font-weight: normal;
                >p{
                  >a{
                    @include sc(14px,#0080ff);
                  }
                }
              }
            }
          }
        }
      }
      .print-explain{
        width:100%;
        height:150px;
        border:1px solid #fec7a9;
        box-sizing: border-box;
        background-color: rgba(254, 245, 236, .5);
        padding:10px 0 0 20px;
        >p{
          @include sc(14px,#666);
          line-height: 30px;
          &:nth-child(3){
            text-indent: 20px;
          }
        }
      }
    }
  }
</style>

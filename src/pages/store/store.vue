<template>
  <div class="store">
    <div>
      <p>
        <label>订单类型</label>
        <RadioGroup v-model="types">
          <Radio label="所有门店"></Radio>
          <Radio label="正常营业"></Radio>
          <Radio label="门店休息"></Radio>
          <Radio label="待开始营业"></Radio>
        </RadioGroup>
      </p>
      <div>
        <p><label>分店名称</label><Input placeholder="请输入分店名称" ></Input></p>
        <p><label>分店名称</label><Input placeholder="请输入分店所在城市" ></Input></p>
        <Button type="primary">查询</Button>
      </div>
    </div>
    <div>
      <h2>搜索结果（共1家）</h2>
      <p> <Button type="primary">设置开门营业</Button> <Button type="primary">设置营业信息</Button> <Button type="primary">设置公告</Button>
        <Button type="primary">设置订餐电话</Button> <Button type="primary">设置接单方式</Button> <Button type="primary">设置营业状态</Button>
        <Button type="primary">开启排序特权</Button>
      </p>
      <Table size="large" :columns="columns1" :data="data1"></Table>
      <Page :total="10"></Page>
    </div>
  </div>
</template>
<script>

  export default {

    data() {
      return {
        types: '所有门店',//订单类型默认值
        columns1: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: '分店id',
            key: 'id'
          },
          {
            title: '分店名称',
            key: 'name'
          },
          {
            title: '分店城市',
            key: 'city'
          },
          {
            title: '接单方式',
            key: 'way'
          },
          {
            title: '营业时间',
            key: 'time'
          },
          {
            title: '营业操作',
            key: 'businessOperation',
            className:'business-operation',
            render: (h, params) => {
              return h('select', [
                  h('option',{
                  props: {
                  }
                },this.value[0]),
                h('option',{
                  props: {
                  }
                },this.value[1])
                ]);
            }
          },
          {
            title: '排序特权',
            key: 'privilege',
            render: (h, params) => {
              return h('Button',{
                attrs: {
                  class:'disabled'
                }
                },'已开启')
            }
          },
          {
            title: '操作',
            key: 'operation',
            render: (h, params) => {
              return [h('p', [
                h('a',{
                attrs: {
                  href: '/home'
                }
              }, '商品管理')
            ]),
                h('p', [
                  h('a',{
                    props: {
                      href: '/home'
                    }
                  }, '配送管理')
                ]),
                h('p', [
                  h('a',{
                    props: {
                      href: '/home'
                    }
                  }, '资质管理')
                ]),
                h('p', [
                  h('a',{
                    props: {
                      href: '/home'
                    }
                  }, '店铺信息管理')
                ])];
            }
          }
        ],
        data1: [
          {
            id:'59865',
            name: '老香港蛋糕（安亭店）',
            city: '上海',
            way: ' 未开通',
            time:'09:20-21:20',
            operation:'商品管理'
          }
        ],
        value:['营业中','休息中']
      }
    },
    methods: {
    }
  }

</script>
<style lang="scss">
  .store{
    /*padding: 36px 40px 0 20px ;*/
    .ivu-radio-group{
      margin-left:24px;
      >label{
        @include sc(14px,#333);
      }
    }
    .ivu-btn-primary {
      color: #fff;
      background-color: #0080ff;
      border-color: #0080ff;
      border-radius: 2px;
      @include sc(14px,#fff);
    }
    >div{
      &:nth-child(1){
        background: #fff;
        padding: 36px 40px 36px 30px ;
        >p{
          margin-bottom: 26px;
          line-height: 14px;
          >label{
            display: inline-block;
            vertical-align: top;
            @include sc(14px,#666);
          }
        }
        >div{
          >p{
            width:34%;
            display: inline-block;
            margin-right: 4%;
            .ivu-input-wrapper{
              width:77%;
              .ivu-input:focus{
                box-shadow:none;
              }
              >input{
                height:36px;
                border-radius: 0;
                padding-left: 16px;
              }
              >input::placeholder{
                @include sc(14px,#999);
              }
            }
            >label{
              width:13%;
              margin-right: 3%;
              @include sc(14px,#666);
            }
          }
          >button{
            width:80px;
          }
        }
      }
      &:nth-child(2){
        padding: 30px 40px 0 30px ;
        >h2{
          @include sc(14px,#000);
          line-height:14px;
        }
        >p{
          margin: 24px 0 16px 0;
          >button{
            margin-right: 2px;
          }
        }
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
                  .disabled{
                    height:36px;
                    width:100%;
                    max-width: 100px;
                    border:none;
                    color:#fff;
                    border-radius: 2px;
                    background-color: rgba(189, 189, 189, 1);
                  }
                  >p{
                    >a{
                      @include sc(14px,#0080ff);
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
        }
      }
    }
  }
</style>


<template>
  <div class="account-setting">
    <Tabs value="name1">
      <TabPane label="账号设置" name="name1">
        <div class="child-account">
          <Button type="primary" @click="addAccount = true">添加子账号</Button>
          <Button type="primary" @click="accountCode = true">子账号绑定二维码</Button>
          <Modal
            v-model="addAccount"
            title="添加子账号"
            class-name="vertical-center-modal modal-add-account"
          >
           <ul>
             <li>
               <label>手机号码</label>
               <Input placeholder="请输入手机号" ></Input>
             </li>
             <li>
               <label>员工密码</label>
               <Input placeholder="请输入密码" ></Input>
             </li>
             <li>
               <label>员工姓名</label>
               <Input placeholder="请输入姓名" ></Input>
             </li>
             <li>
               <label>用户角色</label>
               <Select v-model="select1" style="width:200px">
                 <Option v-for="item in roleList" :value="item.value" :key="item.value">{{ item.label }}</Option>
               </Select>
             </li>
             <li>
               <label>分配管理店铺</label>
               <Select v-model="select2" style="width:200px">
                 <Option v-for="item in managementStoreList" :value="item.value" :key="item.value">{{ item.label }}</Option>
               </Select>
             </li>
             <li>
               <label>接收订单提醒</label>
               <RadioGroup v-model="remind">
                 <Radio label="是"></Radio>
                 <Radio label="否"></Radio>
               </RadioGroup>
             </li>
           </ul>
          </Modal>
          <Modal
            v-model="accountCode"
            title="子账号绑定二维码"
            class-name="vertical-center-modal modal-account-code"
          >
            <div><img src="../../assets/image/spgl_erweima.png"></div>
            <Button type="primary" >下载二维码</Button>
          </Modal>
        </div>
        <Table size="large" :columns="columns1" :data="data1"></Table>
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
  export default {

    data() {
      return {
        addAccount:false,//添加子账号模态框
        accountCode:false,//子账号绑定二维码模态框
        remind:'是',//是否开启接收订单提醒
        roleList: [
          {
            value: 'shouyin',
            label: '收银'
          },
          {
            value: 'shanghu',
            label: '商户'
          }
        ],//用户角色列表
        select1: 'shouyin',//用户角色默认值
        managementStoreList:[
          {
            value: 'all',
            label: '所有门店'
          },
          {
            value: 'part',
            label: '部分门店'
          }
        ],//分配管理门店列表
        select2: 'all',//分配管理门店默认值
        columns1: [
          {
            title: '员工姓名',
            key: 'name'
          },
          {
            title: '手机号码',
            key: 'tel'
          },
          {
            title: '管理门店',
            key: 'store'
          },
          {
            title: '微信号',
            key: 'WeChat'
          },
          {
            title: '用户角色',
            key: 'role'
          },
          {
            title: '是否绑定',
            key: 'isBinding'
          },
          {
            title: '操作',
            key: 'operation',
            render:(h,params)=>{
              return h('div',[
                h('Button',{
                },'修改'),
                h('Button',{
                },'删除')
              ])
            }
          }
        ],
        data1: [
          {
            name:'admin',
            tel: '13526628996',
            store: '所有门店',
            WeChat:'王小明打不听',
            role:'超级管理员',
            isBinding:'否',
          },
          {
            name:'管理员1号',
            tel: '13526628996',
            store: '门店1',
            WeChat:'李雷打不听',
            role:'管理员',
            isBinding:'否',
          }
        ]
      }
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
  .ivu-modal-footer{
    border-top:none;
    .ivu-btn-large{
      padding: 8px 35px 9px 35px;
    }
  }
  .modal-add-account,.modal-account-code{
    .ivu-modal{
      width:600px !important;
    }
  }
  .modal-add-account{
    .ivu-modal-footer{
      border-top:none;
      .ivu-btn-large{
        padding: 8px 35px 9px 35px;
        border-radius: 2px;
        font-size: 14px;
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
      >ul{
        >li{
          margin: 0 0 16px 11px;
          >label{
            @include sc(14px,#333);
            display: inline-block;
            width:85px;
            margin-right:24px;
          }
          .ivu-input-wrapper{
            @include wh(300px,40px);
            .ivu-input{
              @include wh(300px,40px);
              border-radius: 0;
              padding-left: 16px;
            }
            .ivu-input::placeholder{
              @include sc(14px,#999);
            }
            .ivu-input:focus{
              box-shadow:none;
            }
          }
          .ivu-select{
            width:300px !important;
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
          &:last-child{
            margin: 12px 0 30px 11px;
          }
        }
      }
    }
  }
  .modal-account-code{
    .ivu-modal-footer{
      display: none;
    }
    .ivu-modal-body{
      padding: 0;
      margin: 0 20px;
      text-align: center;
      >div{
        >img{
          @include wh(300px,300px);
        }
      }
      .ivu-btn-primary {
        color: #fff;
        background-color: #0080ff;
        border-color: #0080ff;
        border-radius: 2px;
        @include sc(14px,#fff);
        min-width:100px;
      }
    }
  }
  .account-setting{
    .ivu-tabs-bar{
      padding: 20px 40px 0 20px;
      background: #fff;
      margin-bottom: 0;
    }
    .child-account{
      padding: 25px 0 25px 40px;
      background: #fff;
      .ivu-btn-primary {
        vertical-align: top;
        color: #fff;
        background-color: #0080ff;
        border-color: #0080ff;
        border-radius: 2px;
        @include sc(14px,#fff);
        min-width:100px;
        margin-right: 20px;
      }
    }
    .ivu-table-wrapper{
      position: inherit !important;
      border:none !important;
      box-shadow:0 0 10px rgba(127,191,255,.1);
      margin: 30px 40px 0 20px;
      .ivu-table:before {
        height: 0;
      }
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
          /*border-bottom:1px solid #e3e3e3;*/
          /*&:last-child{*/
          /*border-bottom: none;*/
          /*}*/
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
  }
</style>


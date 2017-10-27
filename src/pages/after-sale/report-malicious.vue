<template>
 <div class="report-malicious">
   <h2>恶意评价举报</h2>
   <div>
     <div>
       <label>恶意举报类型</label>
       <div>
         <RadioGroup v-model="types">
           <Radio label="以差评谋求不正当得利"></Radio>
           <Radio label="广告或垃圾信息"></Radio>
           <Radio label="同行恶意评价"></Radio>
           <Radio label="存在不文明用语"></Radio>
           <Radio label="敏感或违法信息"></Radio>
           <Radio label="隐私泄露"></Radio>
         </RadioGroup>
       </div>
     </div>
     <div>
       <label>问题详述</label>
       <div>
         <textarea placeholder="请详细描述问题"></textarea>
         <span>0/300</span>
       </div>
     </div>
     <div>
       <label>问题详述</label>
       <div>
         <div>
           <h3>+</h3>
           <p>上传图片</p>
         </div>
         <div>
           <p>图片上传格式支持PNG、JPG、GIF</p>
           <p>每张图片大小不超过20M，最多可上传9张</p>
         </div>
       </div>
     </div>
     <div>
       <Button @click="exitReport=true">取消并返回</Button>
       <Button >举报评价</Button>
       <span>注：举报提交后，我们会在2个工作日内反馈结果</span>
       <Modal
         v-model="exitReport"
         title="系统提示"
         okText="继续退出"
         @on-ok="ok"
         class-name="vertical-center-modal modal-exit-report"
       >
         <p>如果退出，已经输入的内容将不保存，是否退出？</p>
       </Modal>
     </div>
   </div>
 </div>
</template>
<script>

  export default {

    data() {
      return {
        types:'',//恶意举报类型默认值
        exitReport:false,//退出举报模板
      }
    },
    methods: {
      ok () {
        this.$router.push({path:'/evaluation'});
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
  .modal-exit-report{
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
        @include sc(14px,#333);
        line-height: 14px;
        margin-bottom: 30px;
      }
    }
  }
  .report-malicious{
    padding: 36px 40px 0 20px ;
    >h2{
      @include sc(14px,#000);
      line-height: 14px;
      margin-bottom: 20px;
    }
    >div{
      background: #fff;
      padding: 20px 0 0 20px;
      >div{
        >label{
          display: inline-block;
          vertical-align: top;
          @include sc(14px,#333);
          width:84px;
          margin-right: 18px;
        }
        .ivu-radio-group{
          width:540px;
          >label{
            @include sc(14px,#333);
            line-height: 14px;
            margin-right: 30px;
            margin-bottom: 20px;
            >span{
              margin-right: 12px;
            }
            &:nth-child(4){
              display: inline-block;
              width:166px;
            }
          }
        }
        >div{
          display: inline-block;
          vertical-align: top;
        }
        &:nth-child(2){
          margin: 20px 0 40px 0;
          >div{
            @include wh(544px,135px);
            position: relative;
            >textarea{
              resize: none;
              @include wh(544px,135px);
              border:1px solid #ccc;
              padding: 12px 0 0 16px;
            }
            >textarea::placeholder{
              @include sc(14px,#999);
            }
            >span{
              position:absolute;
              bottom:10px;
              right:12px;
              @include sc(14px,#999);
              line-height: 14px;
            }
          }
        }
        &:nth-child(3){
          >div{
            >div{
              display: inline-block;
              vertical-align: middle;
              &:nth-child(1){
                @include wh(122px,122px);
                border:1px solid #ccc;
                box-sizing: border-box;
                text-align: center;
                >h3{
                  @include sc(25px,#999);
                  line-height: 30px;
                  margin-top: 35px;
                }
                >p{
                  @include sc(14px,#999);
                }
              }
              &:nth-child(2){
                margin-left: 20px;
                >p{
                  @include sc(14px,#666);
                  line-height: 25px;
                }
              }
            }
          }
        }
        &:nth-child(4){
          padding: 30px 0 30px 104px;
          margin-top: 30px;
          border-top:1px solid #e3e3e3;
          >button{
            height:40px;
            line-height: 40px;
            border-radius: 2px;
            font-size: 14px;
            box-sizing: border-box;
            &:nth-child(1){
              padding:0 25px;
              color: #0080ff;
              border:1px solid #0080ff;
              background: #fff;
            }
            &:nth-child(2){
              padding: 0 22px;
              color:#fff;
              border:1px solid #0080ff;
              background: #0080ff;
              margin: 0 40px 0 10px;
            }
          }
          >span{
            @include sc(14px,#999);
          }
        }
      }
    }
  }
</style>

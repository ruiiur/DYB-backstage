<template>
  <div class="upload-pictures">
      <Tabs value="name1">
        <TabPane label="批量上传图片" name="name1">
          <div class="bulk-upload">
            <p>
              <label>选择使用图片命名方式</label>
              <RadioGroup v-model="naming">
                <Radio label="使用商品名称命名"></Radio>
                <Radio label="使用UPC/EAN码命名"></Radio>
              </RadioGroup>
            </p>
            <div>
              <label>选择文件</label>
              <input /><Upload action="//jsonplaceholder.typicode.com/posts/">
                <Button type="ghost" >选择压缩包</Button>
              </Upload>
              <Button type="primary">上传</Button>
            </div>
          </div>
          <div  class="upload-explain">
            <p>批量上传图片重要说明：</p>
            <p>1、压缩包为Zip，最大不超过20M</p>
            <p>2、单张图片分辨率需大于600*450，图像像素宽/高比例4 : 3，大小不超过500Kb</p>
            <p>3、同名称或同UPC/EAN码商品将使用同一张图片，以最后上传的为准</p>
            <p>4、以上规则有任意一项错误，图片将上传失败</p>
          </div>
          <div  class="upload-explain">
            <p>批量上传步骤:</p>
            <p>1、在门店首页下载本店商品，筛选出店铺内无图片，需要传图的商品</p>
            <p>2、准备商品图片，使用商品名称或UPC/EAN码为图片命名，同一批上传图片只能使用其中一种命名方式</p>
            <p class="ex">例：宫保鸡丁.jpg 或：49061035.jpg</p>
            <p>3、将需要上传的图片放入1个文件夹（请勿创建子文件夹），将文件夹压缩为Zip格式的压缩包</p>
            <p>4、在本页选择图片命名方式，选中准备好的压缩包，点击上传，完成后到处理进度查看结果</p>
          </div>
        </TabPane>
        <TabPane label="上传进度" name="name2">
          <div class="upload-progress">
            <Button type="primary">刷新本页</Button>
            <Table size="large" :columns="columns1" :data="data1"></Table>
            <Page :total="10"></Page>
          </div>
        </TabPane>
      </Tabs>
  </div>
</template>
<script>
  export default {

    data() {
      return {
        naming:'使用商品名称命名',
        columns1: [
          {
            title: '操作名称',
            key: 'operationName'
          },
          {
            title: '操作时间',
            key: 'operationTime'
          },
          {
            title: '操作状态',
            key: 'operationState'
          },
          {
            title: '操作详情',
            key: 'operationDetails',
            render:(h,params)=>{
              return h('p',[
                h('a',{
                  attrs: {
                    href: '/home'
                  }
                },'查看目标门店')
              ])
            }
          },
          {
            title: '结果查看',
            key: 'resultsView',
            render:(h,params)=>{
              return h('p',[
                h('a',{
                  attrs: {
                    href: '/home'
                  }
                },'查看上传详情')
              ])
            }
          }
        ],
        data1: [
          {
            operationName:'批量上传图片',
            operationTime: '2017-10-12 09:00:00',
            operationState: '已完成'
          },
       {
         operationName:'批量上传图片',
           operationTime: '2017-10-12 09:00:00',
         operationState: '已完成'
       }
        ]
      }
    }
  }

</script>
<style lang="scss">
  .upload-pictures{
    .ivu-tabs-bar{
      padding: 20px 40px 0 20px;
      background: #fff;
      margin-bottom: 0;
    }
    .bulk-upload{
      padding-top: 25px;
      background: #fff;
      >p{
        padding-left: 40px;
        margin-bottom: 20px;
        >label{
          @include sc(14px,#333);
          margin-right: 24px;
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
      >div{
        padding-left: 40px;
        padding-bottom: 30px;
        >label{
          @include sc(14px,#333);
        }
        >input{
          width:360px;
          height:36px;
          border:1px solid #ccc;
          border-right:none;
          margin-left: 20px;
          box-sizing: border-box;
        }
        .ivu-upload{
          display: inline-block;
          vertical-align: top;
          .ivu-btn-ghost{
            width:120px;
            height:36px;
            background: #ccc;
            @include sc(14px,#666);
            border-radius: 0;
          }
        }
        .ivu-btn-primary {
          vertical-align: top;
          color: #fff;
          background-color: #0080ff;
          border-color: #0080ff;
          border-radius: 2px;
          @include sc(14px,#fff);
          margin-left: 27px;
          width:100px;
        }
      }
    }
    .upload-explain{
      border:1px solid #fec7a9;
      box-sizing: border-box;
      background-color: rgba(254, 245, 236, .5);
      margin: 30px 40px 0 40px;
      padding:10px 0 10px 20px;
      >p{
        @include sc(14px,#666);
        line-height: 30px;
        &.ex{
          text-indent: 20px;
        }
      }
    }
    .upload-progress{
      background: #fff;
      padding: 30px 40px 0 20px;
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
      .ivu-page{
        float: right;
      }
    }
  }
</style>

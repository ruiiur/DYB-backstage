<template>
  <div class="layout" :class="{'layout-hide-text': toggle}">
    <Row type="flex">
      <i-col  class="layout-menu-left" :class="toggle?'toggle':''">
        <Menu :active-name="setActive"   width="auto" @on-select="routeTo" accordion>
          <div class="layout-logo-left" :class="toggle?'dis':''">
            <img src="../assets/image/common_nav_dyblogo.png" v-if="!toggle">
            <h3 v-if="!toggle">后台管理</h3>
            <i class="menu-toggle menu-toggle-left"  @click="toggleClick" v-if="toggle"></i>
          </div>
          <Submenu name="home">
            <template slot="title" ref="home">
              <i class="ivu-icon ivu-icon-ios-analytics icon-home" ></i>
              <a class="layout-text home-title" href="#/home">商家首页</a>
            </template>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <i class="ivu-icon ivu-icon-ios-analytics icon-order" ></i>
              <span class="layout-text">订单管理</span>
            </template>
            <MenuItem name="process">订单处理</MenuItem>
            <MenuItem name="inquiry">订单查询</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <i class="ivu-icon ivu-icon-ios-analytics icon-store" ></i>
              <a class="layout-text home-title" href="#/store">店铺设置</a>
            </template>
            <MenuItem name="management">
              <span class="layout-text">门店管理</span>
            </MenuItem>
            <MenuItem name="message">
              <span class="layout-text">消息中心</span>
            </MenuItem>
            <MenuItem name="decoration">
              <span class="layout-text">门店装修</span>
            </MenuItem>
          </Submenu>
          <Submenu name="4">
            <template slot="title">
              <i class="ivu-icon ivu-icon-ios-analytics icon-goods" ></i>
              <span class="layout-text">商品管理</span>
            </template>
            <MenuItem name="newGoods">新建商品</MenuItem>
            <MenuItem name="recycle">回收站</MenuItem>
            <MenuItem name="upload">批量上传图片</MenuItem>
          </Submenu>
          <Submenu name="5">
            <template slot="title">
              <i class="ivu-icon ivu-icon-ios-analytics icon-system"></i>
              <span class="layout-text">系统设置</span>
            </template>
            <MenuItem name="account">账号设置</MenuItem>
          </Submenu>
          <Submenu name="6">
            <template slot="title">
              <i class="ivu-icon ivu-icon-ios-analytics icon-after-sale"></i>
              <span class="layout-text">售后管理</span>
            </template>
            <MenuItem name="evaluation" ref="report">顾客评价</MenuItem>
            <MenuItem name="report" style="display:none;">举报恶意评价</MenuItem>
          </Submenu>
          <Submenu name="7">
            <template slot="title">
              <i class="ivu-icon ivu-icon-ios-analytics icon-marketing"></i>
              <span class="layout-text">营销活动</span>
            </template>
            <MenuItem name="platform">平台活动</MenuItem>
            <MenuItem name="storeA" ref="dis">店铺活动</MenuItem>
            <MenuItem name="discount" style="display:none;">折扣商品</MenuItem>
            <MenuItem name="precision" style="display:none;">精准营销</MenuItem>
          </Submenu>
        </Menu>
      </i-col>
      <i-col class="layout-right" :class="toggle?'toggle':''">
        <div class="layout-header">
          <i class="menu-toggle menu-toggle-right" @click="toggleClick" v-if="!toggle"></i>
          <input autocomplete="off" type="text" placeholder="'" class="ivu-input search-input">
          <div class="user-section">
            <Dropdown placement="bottom-end">
              <a href="javascript:void(0)">
                老香港蛋糕(安亭店)
               <i></i>
              </a>
              <DropdownMenu slot="list">
                  <div >
                    <input class="input-key" type="text" placeholder="输入店名即可快速查询"/>
                    <ul class="key-store">
                      <li>
                        <a href="javascript:;">老香港蛋糕（安亭店）  [营业中]</a>
                      </li>
                    </ul>
                    <a class="check-all" href="javascript:;">查看全部门店 ></a>
                  </div>
              </DropdownMenu>
            </Dropdown>
            <Dropdown placement="bottom-end">
              <a href="javascript:void(0)">
                营业中
                <i></i>
              </a>
              <DropdownMenu slot="list">
                <div class="business">
                  <ul>
                    <li class="active">
                      <a href="">营业中</a>
                      <p>当前餐厅处于设置的营业时间内，正常接受新订单</p>
                    </li>
                    <li>
                      <a href="">停止营业</a>
                      <p>适用于较长时间停止提供服务，不接受任何订单，手动恢复营业后可正常接受订单</p>
                    </li>
                  </ul>
                  <p>营业时间：09:20-21:20</p>
                </div>
              </DropdownMenu>
            </Dropdown>
            <Dropdown  placement="bottom-end">
              <a href="javascript:void(0)">
               wmlxgd43183
                <i></i>
              </a>
              <DropdownMenu slot="list">
                <div class="user-set">
                  <DropdownItem>修改密码</DropdownItem>
                  <DropdownItem>修改手机</DropdownItem>
                  <DropdownItem>退出</DropdownItem>
                </div>
              </DropdownMenu>
            </Dropdown>
            <i></i>
          </div>
        </div>
        <!--<div class="layout-breadcrumb">-->
          <!--<Breadcrumb>-->
            <!--<Breadcrumb-item>首页</Breadcrumb-item>-->
            <!--<Breadcrumb-item>页面</Breadcrumb-item>-->
            <!--<Breadcrumb-item>{{this.$route.path.replace('/','')}}</Breadcrumb-item>-->
          <!--</Breadcrumb>-->
        <!--</div>-->
        <div class="layout-content">
          <div class="layout-content-main">
            <transition mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
        </div>
      </i-col>
    </Row>
  </div>

</template>

<script>

  export default {

    data() {
      return {
        toggle:false,//左侧导航栏的缩放
      }
    },
    computed: {
      iconSize() {
        return this.spanLeft === 5 ? 14 : 24;
      },
      setActive() {
        return this.$route.path.replace('/','');
      }
    },
    methods: {
      toggleClick() {
        this.toggle=!this.toggle;
      },
      routeTo(e) {
        this.$router.push(e);
      }
    },
    beforeRouteUpdate (to, from, next) {
      if (to.path =="/report") {
        this.$refs.report.$el.style.color='#0080ff';
      }
      if (to.path =="/discount" || to.path =="/precision") {
        this.$refs.dis.$el.style.color='#0080ff';
      }
      next();
    }
  }

</script>
<style lang="scss">
  .layout,.ivu-row-flex{
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow-x: hidden;
    overflow-y: scroll;
    min-width: 1150px;
    height:100vh;
  }
  .layout-right{
    background:#f7f7f7;
  }
  .layout-content{
    margin:0;
    background: #f7f7f7 ;
    padding: 0 ;
  }
  .layout-menu-left {
    background: #282c33;
    width:220px;
    height:100%;
    &.toggle{
      width:80px;
    }
    .ivu-icon:not(.ivu-menu-submenu-title-icon){
      @include icon(inline-block,18px,18px);
      vertical-align: middle;
    }
    .icon-home{
      @include bis(url('../assets/image/leftbar_nav_sjsy_icon_n.png'),no-repeat,18px,18px);
    }
    .icon-order{
      @include bis(url('../assets/image/leftbar_nav_ddgl_icon_n.png'),no-repeat,18px,18px);
    }
    .icon-store{
      @include bis(url('../assets/image/leftbar_nav_dpsz_icon_n.png'),no-repeat,18px,18px);
    }
    .icon-goods{
      @include bis(url('../assets/image/leftbar_nav_spgl_icon_n.png'),no-repeat,18px,18px);
    }
    .icon-system{
      @include bis(url('../assets/image/leftbar_nav_xtsz_icon_n.png'),no-repeat,18px,18px);
    }
    .icon-after-sale{
      @include bis(url('../assets/image/leftbar_nav_shgl_icon_n.png'),no-repeat,18px,18px);
    }
    .icon-marketing{
      @include bis(url('../assets/image/leftbar_nav_shgl_icon_n.png'),no-repeat,18px,18px);
    }

  }
  .menu-toggle{
    @include icon(inline-block,18px,14px);
    @include bis(url('../assets/image/common_nav_menu.png'),no-repeat,18px,14px);
  }
  .menu-toggle-right{
    margin: 29px 18px 29px 10px;
  }
  .menu-toggle-left{
    margin-top: 8px;
  }
  .ivu-menu-submenu-title > i {
    margin-right: 34px;
  }
  .layout-right{
    float: right;
    width:calc(100% - 220px);
    &.toggle{
      width:calc(100% - 80px);
    }
  }
  .layout-logo-left {
    height: 72px;
    background: #0080ff;
    padding-left: 28px;
    padding-top: 21px;
    margin-bottom: 21px;
    overflow: hidden;
    >img{
      height:29px;
      width:74px;
      display: inline-block;
    }
    >h3{
      display: inline-block;
      vertical-align:bottom ;
      @include sc(18px,#fff);
      line-height: 18px;
      margin: auto auto 5px 5px;
    }
    &.dis{
      background:#282c33;
      >h3{
        display: none;
      }
    }
  }
  .ivu-menu{
    background: #282c33;
  }
  .ivu-menu-opened,.ivu-menu-opened >ul{
    background:  rgba(32, 35, 41, 1);
  }
  .layout-header {
    height: 72px;
    background: #0080ff;
    .search-input{
      display: inline-block;
      padding-left: 13px;
      border-radius: 2px;
      @include wh(300px,36px);
      vertical-align: top;
      margin-top: 18px;
      margin-left: 17px;
    }
    .search-input::placeholder{
      @include icon(inline-block,21px,20px);
      @include bis(url('../assets/image/search_icon.png'),no-repeat,21px,20px);
      color:transparent;
    }
  }
  .ivu-menu{
    @include sc(14px,#fff);
  }
 .ivu-menu-item-active{
    @include sc(14px,#0080ff);
   .icon-order{
     @include bis(url('../assets/image/leftbar_nav_ddgl_icon_s.png'),no-repeat,18px,18px);
   }
   .icon-store{
     @include bis(url('../assets/image/leftbar_nav_dpsz_icon_s.png'),no-repeat,18px,18px);
   }
   .icon-goods{
     @include bis(url('../assets/image/leftbar_nav_spgl_icon_s.png'),no-repeat,18px,18px);
   }
   .icon-system{
     @include bis(url('../assets/image/leftbar_nav_xtsz_icon_s.png'),no-repeat,18px,18px);
   }
   .icon-after-sale{
     @include bis(url('../assets/image/leftbar_nav_shgl_icon_s.png'),no-repeat,18px,18px);
   }
   .icon-marketing{
     @include bis(url('../assets/image/leftbar_nav_shgl_icon_s.png'),no-repeat,18px,18px);
   }
  }
 .ivu-menu-opened>.ivu-menu-submenu-title,.ivu-menu-opened .ivu-menu-item-selected{
   border-left:6px solid #0080ff !important;
   box-sizing: border-box;
 }

  .ivu-menu-vertical.ivu-menu-light:after {
    width: 0;
  }
  .ivu-menu-vertical .ivu-menu-submenu-title {
    padding: 0 25px;
    position: relative;
    cursor: pointer;
    z-index: 1;
    transition: all .2s ease-in-out;
    height:56px;
    line-height: 56px;
    border-left:6px solid transparent;
  }
  .ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item {
    padding:0 0 0 83px;
    height:56px;
    line-height: 56px;
    border-left:6px solid transparent;
  }
  .ivu-icon-ios-analytics:before {
    content: "";
  }
  .ivu-menu-vertical .ivu-menu-item:hover, .ivu-menu-vertical .ivu-menu-submenu-title:hover {
    background:  rgba(32, 35, 41, .9);
  }
  .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
    border-right: none;
  }
  .home-title{
    @include sc(14px,#fff);
  }
  .ivu-menu-opened {
    .home-title {
      @include sc(14px, #0080ff);
    }
    .icon-home{
      @include bis(url('../assets/image/leftbar_nav_sjsy_icon_s.png'),no-repeat,18px,18px);
    }
  }
  .layout-hide-text .layout-text{
    display: none;
  }
  .ivu-menu-submenu-title-icon{
    display: none;
  }
  .user-section{
    display: inline-block;
    /*vertical-align:top ;*/
    float: right;
    /*margin: 26px 27px auto auto;*/
    >i{
      vertical-align: middle;
      @include icon(inline-block,18px,20px);
      @include bis(url('../assets/image/common_nav_message.png'),no-repeat,18px,20px);
      margin:0 27px;
    }
    .ivu-dropdown{
      >.ivu-dropdown-rel:not(.ivu-select-dropdown){
        height:72px;
        line-height: 72px;
        padding:0 18px;
        >a{
         @include sc(14px,#fff);
          >i{
            vertical-align: middle;
            @include icon(inline-block,10px,6px);
            @include bis(url('../assets/image/arrow_white_down_n.png'),no-repeat,10px,6px);
            margin-left: 11px;
          }
        }
        &:hover{
          background: #fff;
          >a{
            color:#0080ff;
            >i{
              @include bis(url('../assets/image/arrow_blue_up_s.png'),no-repeat,10px,6px);
              margin-left: 11px;
            }
          }
        }
      }
      .ivu-select-dropdown{
        margin: 0;
        padding: 0;
        box-shadow: 0 4px 12px rgba(0,128,255,.2);
        -webkit-box-shadow: 0 4px 12px rgba(0,128,255,.2);
        border-radius: 0;
        .input-key{
          @include wh(240px,36px);
          border-radius: 2px;
          border:1px solid #ccc;
          padding-left: 13px;
          margin:12px 24px 22px 24px;
        }
        .input-key::placeholder{
          @include sc(14px,#999);
        }
        .key-store{
          width: 240px;
          max-height: 300px;
          margin: 0 24px 10px 24px;
          line-height: 1.6;
          overflow-y: scroll;
          >li{
            >a{
              @include sc(14px,#333);
            }
          }
        }
        .check-all{
          display: block;
          padding: 15px 0;
          text-align: center;
          background: #FAFAFA;
          @include sc(14px,#666);
          line-height: 14px;
        }
        .user-set{
          >.ivu-dropdown-item{
            width:147.28px;
            height:46px;
            text-align: center;
            line-height: 46px;
            font-size: 14px !important;
            color:#333;
            padding: 0;
          }
        }
        .business{
          padding:20px 25px;
          >ul{
            >li{
              margin-bottom: 20px;
              >a{
                display: inline-block;
                @include sc(14px,#f33);
                width:56px;
                margin-right: 27px;
              }
              >p{
                width:308px;
                display: inline-block;
                vertical-align: top;
                @include sc(14px,#333);
              }
              &.active{
                >a{
                  @include sc(14px,#41d941);
                }
              }
            }
          }
          >p{
            @include sc(14px,#666);
          }
        }
      }
    }
    /*>ivu-dropdown{*/
      /*&:nth-child(2){*/
        /*position: relative;*/
        /*>ivu-select-dropdown{*/
          /*position: absolute;*/
          /*right:0;*/
        /*}*/
      /*}*/
    /*}*/
  }
/*.ivu-select-dropdown{*/
  /*right:0;*/
  /*top:0;*/
/*}*/









    /*.layout-breadcrumb {*/
      /*padding: 10px 15px 0;*/
    /*}*/

    /*.layout-copy {*/
      /*text-align: center;*/
      /*padding: 10px 0 20px;*/
      /*color: #9ea7b4;*/
    /*}*/


    /*.layout-ceiling-main a {*/
      /*color: #9ba7b5;*/
    /*}*/

    /*.ivu-col {*/
      /*transition: width .2s ease-in-out;*/
    /*}*/

</style>



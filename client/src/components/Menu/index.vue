<template>
  <div id="report_menu">
    <div class="inner">
      <el-menu
        router
        class="el-menu-vertical-demo"
        active-text-color="#2C61FF"
        :default-active="$route.path"
        :default-openeds="['1', '2', '3', '4', '5']"
        @open="handleOpen"
        @close="handleClose">
        <el-menu-item index="/admin/column">
          <i class="el-icon-pie-chart"></i>
          <span>分类管理</span>
        </el-menu-item>

        <el-menu-item index="/admin/drafts">
          <i class="el-icon-data-line"></i>
          <span>草稿箱</span>
        </el-menu-item>





        <!--<el-submenu index="2">-->
          <!--<template slot="title">-->
            <!--<i class="el-icon-notebook-2"></i>-->
            <!--<span>轮播图管理</span>-->
          <!--</template>-->
          <!--<el-menu-item index="/b/report/report-popularize">首页轮播图</el-menu-item>-->
        <!--</el-submenu>-->
        <!--<el-submenu index="3">-->
          <!--<template slot="title">-->
            <!--<i class="el-icon-data-line"></i>-->
            <!--<span>文章管理</span>-->
          <!--</template>-->
          <!--<el-menu-item index="/admin/drafts">文章列表</el-menu-item>-->
          <!--<el-menu-item index="/admin/drafts">草稿箱</el-menu-item>-->
        <!--</el-submenu>-->

      </el-menu>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    mounted() {
      // 解决element-ui 子菜单与主菜单缩进不一致
      let report_menu = document.getElementById('report_menu');
      let itemList = report_menu.getElementsByClassName('el-menu-item');
      for (let i = 0; i < itemList.length; i++) {
        const element = itemList[i];
        element.style.paddingLeft = '20px'
      }
    },
    methods: {
      handleOpen() {

      },
      handleClose() {

      }
    }
  }
</script>


<style lang="less" scoped>
  #report_menu {
    left: 0;
    top: 62px;
    bottom: 0;
    z-index: 998;
    width: 180px;
    position: fixed;
    font-size: 12px;
    overflow: hidden;
    border-right: 1px solid #EDEFF2;
    background-color: #ffffff;
    .inner {
      top: 0;
      bottom: 0;
      width: 300px;
      padding-top: 21px;
      overflow-x: hidden;
      overflow-y: scroll;
      position: absolute;
    }
    /deep/ .el-menu-vertical-demo.el-menu {
      width: 180px;
    }
    /deep/ .el-submenu__title {
      height: 32px;
      font-size: 12px;
      line-height: 32px;
      text-align: left;
    }
    /deep/ .el-submenu {
      margin-bottom: 20px;
    }
    /deep/ .el-submenu .el-menu-item {
      height: 32px;
      font-size: 12px;
      line-height: 32px;
      min-width: 180px;
      text-align: left;
      &::before {
        content: "";
        display: inline-block;
        width: 29px;
      }
    }
    /deep/ .el-submenu [class^=el-icon-] {
      font-size: 14px;
    }
    /deep/ .is-active {
      .el-submenu__title, i {
        color: #2C61FF;
      }
    }
  }
</style>


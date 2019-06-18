<template>
  <div>
    <page-header :back="false" title="分类管理"></page-header>
    <div class="page_container">
      <div class="__block_box">
        <div class="__block_box_header">
          <div class="__block_box_header_title">分类列表</div>
          <el-button type="primary" size="mini">添加分类</el-button>
        </div>

        <div class="column-list">
          <div class="list">
            <div class="list-img">
              <el-image class="el_image" style="width: 100px; height: 100px" fit="cover">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </div>

            <div class="card-header">
              JavaScript
            </div>
            <div class="card-body">
              <div class="card-body-txt">
                说明一下，本站主题原创为 兽兽 大神开源，原始程序为ghost。现在使用的程序是typecho，评论部分进行了二次移植。原创：https://sb.sb/ghost-theme-affinity/缩略图部分，如果后台自定义字段 im ...
              </div>
            </div>
            <div class="card-footer">
              <div class="card-footer-list">
                <i class="el-icon-watch"></i>
                <span>2019/12/01</span>
              </div>
              <div class="card-footer-list">
                <i class="el-icon-view"></i>
                <span>30</span>
              </div>

              <div class="card-footer-list">
                <i class="el-icon-star-off"></i>
                <span>12</span>
              </div>
            </div>

          </div>
          <div class="list">
            <div class="list-img">
              <el-image class="el_image" style="width: 100px; height: 100px" fit="cover">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </div>
          </div>
          <div class="list">
            <div class="list-img">
              <el-image class="el_image" style="width: 100px; height: 100px" fit="cover">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import PageHeader from '../../components/PageHeader/index.vue'

  export default {
    components: {
      PageHeader
    },
    data() {
      return {}
    }
  }
</script>
<style lang="less" scoped>
  .column-list {
    display: flex;
  }

  .list {
    flex: 1;
    margin: 10px;
    height: 450px;
    box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, .15);
  }

  .list-img {
    width: 100%;
    height: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f5f7fa;
    min-width: 300px;
  }

  .el_image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #f5f7fa;
    color: #909399;
    font-size: 38px;
  }

  .card-header, .card-body, .card-footer {
    padding: 20px 20px 0 20px;
  }

  .card-header {
    font-size: 18px;
  }

  .card-body {
    color: #999;
  }

  .card-body-txt {
    overflow: hidden;
    font-size: 14px;
    height: 80px;
  }

  .card-footer {
    margin-top: 20px;
    color: #ccc;
    font-size: 14px;
    border-top: 1px solid #f5f7fa;
  }

  .card-footer i {
    font-size: 18px;
    margin-right: 4px;
  }

  .card-footer span {
    margin-top: 4px;
  }

  .card-footer-list {
    display: flex;
    align-items: center;
    line-height: 20px;
    transition: all .3s;
  }

  .card-footer-list:nth-child(1) {
    float: left;
  }

  .card-footer-list:nth-child(2) {
    float: right;
  }

  .card-footer-list:nth-child(3) {
    float: right;
  }

  .card-footer-list:hover {
    color: #0343F6;
  }
</style>
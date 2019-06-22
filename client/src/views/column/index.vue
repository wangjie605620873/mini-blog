<template>
  <div>
    <page-header  title="分类管理"></page-header>
    <div class="page_container">
      <div class="__block_box">
        <div class="__block_box_header">
          <div class="__block_box_header_title">分类列表</div>
          <el-button type="primary" size="mini" @click="addColumn">添加分类</el-button>
        </div>
        <div class="list-box">
          <div class="column-list"  v-for="item in list">
            <div class="list">
              <div class="list-img">
                <el-image class="el_image" :src="item.column_cover"  fit="cover">
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-image>
              </div>

              <div class="card-header">{{item.column_name}}</div>
              <div class="card-body">
                <div class="card-body-txt">
                  {{item.column_describe}}
                </div>
              </div>
              <div class="card-footer">
                <div class="card-footer-list">
                  <i class="el-icon-watch"></i>
                  <span>{{item.column_create | timeToDate}}</span>
                </div>

                <div class="card-footer-list">
                  <i class="el-icon-view"></i>
                  <span>{{item.column_collect_count}}</span>
                </div>
                <div class="card-footer-list">
                  <i class="el-icon-star-off"></i>
                  <span>{{item.column_read_count}}</span>
                </div>
              </div>
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
      return {
        list : [],
      }
    },
    created(){
      this.getColumn()
    },
    methods:{
      async getColumn(){
        let res = await  $axios("/admin/getColumn");
        if (res.code == 200){
          this.list = res.data
        }
      },
      addColumn(){
        this.$router.push({path : "/admin/addColumn"})
      }
    }
  }
</script>
<style lang="less" scoped>
  .list-box {
    display: flex;
    flex-wrap: wrap;
  }
  .column-list {
    width: 350px;
  }
  .list {
    flex: 1;
    margin: 10px 20px 10px 10px;
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
    margin-right: 24px;
  }

  .card-footer-list:nth-child(3) {
    margin-right: 24px;
    float: right;
  }

  .card-footer-list:hover {
    color: #0343F6;
  }
</style>
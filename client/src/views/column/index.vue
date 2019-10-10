<template>
  <div>
    <page-header title="分类管理"></page-header>
    <PageContainer>
      <div class="__block_box_header">
        <div class="__block_box_header_title">分类列表</div>
        <el-button type="primary" size="mini" @click="addColumn">添加分类</el-button>
      </div>
      <div class="list-box">
        <div class="column-list" v-for="item in list" v-bind:key="item">
          <div class="list">
            <div class="list-img">
              <el-image class="el_image" :src="item.column_cover" fit="cover">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
              <div class="del-column" @click="delColumn(item)">
                <i class="el-icon-delete-solid"></i>
              </div>

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
                <span>{{item.create_at }}</span>
              </div>

              <div class="card-footer-list">
                <i class="el-icon-view"></i>
                <span>{{item.column_collect_count || 0}}</span>
              </div>
              <div class="card-footer-list">
                <i class="el-icon-star-off"></i>
                <span>{{item.column_read_count || 0}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  </div>
</template>
<script>
  import PageHeader from '../../components/PageHeader/index.vue'
  import PageContainer from '../../components/PageContainer/index.vue';

  export default {
    components: {
      PageHeader,
      PageContainer

    },
    data() {
      return {
        list: [],
      }
    },
    created() {
      this.getColumn()
    },
    methods: {
      async getColumn() {
        let res = await  $axios("/getColumn");
        if (res.code == 200) {
          this.list = res.data.data
        } else if (res.code == 202) {
          this.$message({
            type: 'info',
            message: '暂无分类数据'
          })
        }
      },
      addColumn() {
        this.$router.push({path: "/admin/addColumn"})
      },

      delColumn(item) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let options = {
            id: item.id
          };
          $axios("/delColumn", options).then(res => {
            console.log(res)
            if (res.code == 200) {
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
            } else {
              this.$message({
                type: 'error',
                message: '删除失败!'
              });
            }
          }).catch((e) => {
            console.log(e)
            this.$message({
              type: 'error',
              message: '删除失败!'
            });
          })

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
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
    position: relative;
  }

  .list-img:hover .del-column {
    opacity: 1;
    z-index: 1;
  }

  .del-column {
    opacity: 0;
    position: absolute;
    font-size: 24px;
    right: 20px;
    top: 20px;
    color: red;
    cursor: pointer;
    transition: all 0.3s;
    z-index: -1;
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
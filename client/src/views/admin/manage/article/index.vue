<template>
  <div>
    <PageHeader  title="文章列表"></PageHeader>
    <PageContainer>
      <div class="list-box">
        <div class="list" v-for="item in list" @click="goDetails(item.id)">
          <div class="list-left">
            <el-image class="el_image" :src="item.articleCover" fit="cover">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </div>
          <div class="list-right">
            <h4>{{item.articleTitle || "未填写" }}</h4>
            <p>{{item.articleBodyMark || "未填写" }}</p>
            <div class="drafts-info">
              <span>{{item.create_at}}</span>
              <span>{{item.userId}}</span>
              <span class="buttons" @click="compile(item)">编辑</span>
              <span class="buttons" @click="del(item)">删除</span>
              <!--<span class="buttons" @click="publish(item)">发表</span>-->
            </div>
          </div>
        </div>
      </div>

      <div class="pagination">
        <el-pagination
          background
          :total="total"
          :page-count="pageCount"
          @current-change="currentChange"
          layout="prev, pager, next"
        >
        </el-pagination>
      </div>

    </PageContainer>
  </div>
</template>
<script>
  import PageHeader from '../../../../components/PageHeader/index.vue'
  import PageContainer from '../../../../components/PageContainer/index.vue';

  export default {
    components: {
      PageHeader,
      PageContainer
    },
    data() {
      return {
        list: [],
        currentPage: 1,
        pageSize: 10,
        total: 0,
        pageCount: 0
      }
    },
    created() {
      this.getArticle()
    },
    methods: {
      async getArticle() {
        let res = await $axios('/getArticle', {currentPage: this.currentPage, pageSize: this.pageSize});
        if (res.code == 200) {
          this.list = res.data.data;
          this.total = res.data.count;
          this.pageCount = res.count / this.pageSize
        }
      },
      currentChange(e) {
        this.currentPage = e;
        this.getDrafts()
      },

//      删除
      async del(item){
        let res = await $axios("/delDrafts",{articleId:item.id});
        if (res.code == 200){
          this.$message.success("删除成功");
          this.getDrafts()
        }
      },
//
      goDetails(item){
        this.$router.push({
          path : "/articleDetails?id="+item
        })
      }

    },
  }
</script>
<style scoped type="less">
  .list-box {
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .list {
    width: 48%;
    min-width: 500px;
    margin: 10px;
    box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.15);
    display: flex;
    padding: 14px 14px 8px 14px;
    box-sizing: border-box;
    border-radius: 5px;
  }

  .list-left {
    width: 100px;
    min-width: 120px;
    height: 120px;
    border-radius: 10px;
    overflow: hidden;
    margin-right: 12px;
    margin-bottom: 6px;
  }

  .list-left img {
    width: 100%;
    height: 100%;
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

  .list-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 4px;
    flex: 1;
  }

  .list-right .drafts-info {
    color: #ccc;
    font-size: 12px;
    border-top: 1px solid #f5f7fa;
    padding-top: 4px;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .list-right p {
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .buttons {
    transition: all .3s;
    cursor: pointer;
  }

  .buttons:hover {
    color: #0343F6;
  }

  .pagination {
    margin-top: 20px;
  }
</style>
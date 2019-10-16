<template>
  <div class="_article">

    <div class="article">
      <div class="margin-top-64"></div>
      <div class="article-header">
        <div class="header-card">
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <div class="header-title">文章标题</div>
                <div class="header-box-list">
                  <el-input v-model="articleTitle" placeholder="请输入文章标题"></el-input>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <div class="header-title">
                  文章分类
                </div>
                <el-select v-model="columnActive" placeholder="请选择文章分类">
                  <el-option
                    v-for="item in column"
                    :key="item.id"
                    :label="item.column_name"
                    :value="item.id">
                    <span style="float: left">{{ item.column_name }}</span>
                    <img class="column-image" :src="item.column_cover" alt="">
                  </el-option>
                </el-select>
              </div>
            </el-col>

            <el-col :span="6">
              <div class="grid-content bg-purple">
                <div class="header-title">
                  创建日期
                </div>
                <el-date-picker
                  v-model="dateActive"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </div>
            </el-col>
            <el-col :span="6">
              <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">上传图片</el-button>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="markdown-content">
      <!--<mark-down autoSave @on-save="saveDraft" :theme="theme" :initialValue="initialValue"></mark-down>-->
      <mark-down ref="markdown" :initialValue="initialValue" @on-save="saveDraft" :theme="theme"></mark-down>
    </div>

    <el-drawer customClass="__drawers" title="上传图片" :visible.sync="drawer" size="400px">
      <input type="text" style="opacity:0;position: absolute;z-index: -1;" id="copy-input">
      <div class="draft-image">
        <el-upload
          class="upload-demo"
          drag
          :show-file-list="false"
          action="http://127.0.0.1:5555/uploadImage"
          :on-success="handleAvatarSuccess"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>

        <div class="draft-list" v-for="item in fileList">
          <div class="copy-box">
            <img :src="item" alt="">
          </div>
          <div class="copy-url">![image]({{item}})</div>
          <div class="copy">
            <el-button size="small" type="primary" @click="setCover(item)">设置为封面</el-button>
            <el-button size="small" type="primary" @click="copy(item)">复制</el-button>
          </div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>
<script>
  import MarkDown from 'vue-meditor'
  export default {
    components: {
      MarkDown,
    },
    data() {
      return {
        drawer: false,
        initialValue: "",
        theme: 'OneDark',
        //标题
        articleTitle: "",
        //分类
        column: [],
        columnActive: "",
        //日期
        dateActive: "",
        //草稿id
        articleId: "",
        //markdown
        articleBodyHtml: "",
        articleBodyMark: "",
        fileList: [],
      }
    },
    created() {
      let id = this.$route.query.id;
      if (id) {
        this.articleId = id;
        this.getDraftArticle();
      }
      this.getColumn();
    },


    methods: {
      async getDraftArticle() {
        let res = await $axios("/getDraftArticle", {articleId: this.articleId});
        if (res.code == 200) {
          this.initialValue = res.data.data.articleBodyMark;
        }
      },

      async getColumn() { //分类列表
        let res = await $axios("/getColumn");
        if (res.code == 200) {
          this.column = res.data.data
        }
      },

      async save() { //发表文章
        if (this.articleTitle == "") {
          this.$message.error({message: "请填写文章标题！", showClose: true})
          return;
        } else if (this.columnActive == "") {
          this.$message.error({message: "请选择文章分类！", showClose: true})
          return;
        }
      },

      //自动保存
      async saveDraft(e) {
        this.articleBodyHtml = e.html;
        this.articleBodyMark = e.value;
        let data = {
          articleTitle: this.articleTitle,
          columnActive: this.columnActive,
          dateActive: this.dateActive,
          articleBodyHtml: e.html,
          articleBodyMark: e.value,
          articleId: this.articleId,
        };
        let res = await $axios('/articleDraft', data);
        if (res.code == 200) {
          if (res.data.id) {
            this.articleId = res.data.id;
          }
          this.$message.success({message: "保存成功"});
        } else {
          this.$message.error({message: "报错失败"});
        }
      },


      //上传图片
      handleAvatarSuccess(res) {
        if (res.code === 200) {
          this.fileList.push(res.data.imageUrl);
        } else {
          this.$message.error({message: '上传失败！', showClose: true});
        }
      },

      // 设置封面
      async setCover(e) {
        let res = {};
        if (!this.articleId) {
          let data = {
            articleTitle: this.articleTitle,
            columnActive: this.columnActive,
            dateActive: this.dateActive,
            articleBodyHtml: "",
            articleBodyMark: "",
            articleId: this.articleId,
            articleCover: e
          };
          res = await $axios('/articleDraft', data);

        } else {
          let data = {articleId: this.articleId, articleCover: e};
          res = await $axios('/setCover', data);
        }
        if (res.code == 200) {
          if (res.data.id) {
            this.articleId = res.data.id;
          }
          this.$message.success({message: "保存成功"});
        } else {
          this.$message.error({message: "报错失败"});
        }
      },


      //复制图片markdown
      copy(txt) {
        let copyText = `![image](${txt})`;
        let input = document.getElementById('copy-input');
        input.value = copyText;
        input.select();
        document.execCommand("Copy");
      }
    },
  }
</script>
<style lang="less" scoped>
  .markdown-content, .article-header {
    padding: 0 10px;
  }

  .article-header {
    margin-top: 20px;
  }

  .header-card {
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 40px 20px;
    background: #ffffff;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .header-box-list {
    flex: 1;
  }

  .bg-purple {
    display: flex;
    align-items: center;
  }

  .bg-purple .el-select {
    flex: 1;
  }

  .bg-purple .el-input {
    flex: 1;
  }

  .header-title {
    margin-right: 20px;
    font-weight: bold;
  }

  .column-image {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    float: right;
  }

  .draft-image {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .draft-list {
    width: 360px;
    height: 180px;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    margin: 0 auto;
    transition: all .3s;
    position: relative;
    overflow: hidden;
  }

  .draft-list:hover {
    border-color: #409EFF;
  }

  .copy-box {
    position: absolute;
    bottom: 0;
    font-size: 14px;
    background: #2d2d2d;
    color: #669acc;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    box-sizing: border-box;
  }

  .copy-box img {
    width: 100%;
    height: 100%;
  }

  .copy {
    position: absolute;
    right: 0;
    bottom: 0;
    box-sizing: border-box;
    z-index: 100;
  }

  .copy-url {
    height: 32px;
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: 1;
    background: #000;
    color: #fff;
    overflow: hidden;
    white-space: nowrap;
    font-size: 14px;
    display: flex;
    align-items: center;
  }
</style>
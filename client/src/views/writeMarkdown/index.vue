<template>
  <div>
    <div class="article">
      <div class="margin-top-64"></div>

      <div class="article-header">

        <div class="header-card">
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <div class="header-title">
                  文章标题
                </div>
                <div class="header-box-list">
                  <el-input v-model="input" placeholder="请输入文章标题"></el-input>
                </div>
              </div>
            </el-col>
            <el-col :span="6">

              <div class="grid-content bg-purple">
                <div class="header-title">
                  文章标题
                </div>
                <el-select v-model="value" placeholder="请选择文章分类">
                  <el-option
                    v-for="item in cities"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    <span style="float: left">{{ item.label }}</span>
                    <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                  </el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <div class="header-title">
                  文章标题
                </div>

                <el-select
                  v-model="values"
                  multiple
                  filterable
                  allow-create
                  default-first-option
                  placeholder="请选择文章标签">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>

              </div>
            </el-col>
            <el-col :span="6">

              <div class="grid-content bg-purple">
                <div class="header-title">
                  文章标题
                </div>
                <el-input
                  placeholder="请输入内容"
                  prefix-icon="el-icon-search"
                  v-model="input2">
                </el-input>
              </div>
            </el-col>
          </el-row>

        </div>

      </div>


      <!--<el-date-picker-->
      <!--v-model="value1"-->
      <!--type="date"-->
      <!--placeholder="选择日期">-->
      <!--</el-date-picker>-->


    </div>
    <div class="markdown-content">
      <mark-down @on-save="save" :theme="theme" :initialValue="initialValue"></mark-down>

    </div>
  </div>
</template>
<script>
  import MarkDown from 'vue-meditor'

  export default {
    components: {
      MarkDown

    },
    data() {
      return {
        initialValue: "",
        theme: 'OneDark',
        cities: [{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }],
        value: '',
        value1: "",
        input2: "",
        options: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        values: []

      }
    },
    methods: {
      save() {

      }
    },
    mounted() {
      var editor = new Editor({
        el: document.querySelector('#VueMarkdown'),
        initialEditType: 'markdown',
        previewStyle: 'vertical',
        height: '300px'
      });
    }
  }
</script>
<style lang="less" scoped>
  .markdown-content,.article-header {
    padding: 0 10px;
  }
  .article-header{
    margin-top:20px;
  }
  .header-card {
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 40px 20px;
    background: #ffffff;
    margin-top:20px;
    margin-bottom:20px;

  }

  .header-box-list{
    flex:1;
  }
  .bg-purple{
    display: flex;
    align-items: center;
  }
  .bg-purple .el-select{
    flex: 1;
  }
  .header-title{
    margin-right: 20px;
    font-weight: bold;
  }
</style>
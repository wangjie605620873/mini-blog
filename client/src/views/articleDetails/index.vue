<template>
  <!--<div class="article-details">-->
    <div class="markdown-preview OneDark" v-html="articleDetails.articleBodyHtml"></div>
  <!--</div>-->
</template>
<script>
  export default {
    data() {
      return {
        id : "",
        articleDetails : ""
      }
    },
    created() {
      this.getArticle()
    },
    methods: {
      async getArticle(){
        let id = this.$route.query.id;
        let res = await $axios('/getArticleDetails',{id});
        if (res.code == 200){
          this.articleDetails = res.data
        }
      }
    }
  }
</script>
<style lang="less" scoped>
.article-details{
  width: 1200px;
  margin:0 auto;
}
</style>
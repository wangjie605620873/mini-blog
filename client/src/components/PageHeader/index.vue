<template>
  <div>
    <div class="page-header">
      <div class="page-header-left">
        <div v-if="back" class="go-back el-icon-back" @click="goBack"><span>返回</span></div>
        <div class="header-content">{{title}}</div>
      </div>
      <slot class="slot"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      back: {
        type:Boolean ,
        default: false
      },
      title: {
        type : String,
        default : "填写页面标题"
      },
    },
    methods: {
      goBack() {
        this.$router.goBack()
      }
    },
    created (){
      console.log(this)
    }


  }
</script>
<style lang="less" scoped>
  .page-header {
    justify-content: space-between;
    display: flex;
    background: #ffffff;
    margin-bottom: 20px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #e1e1e1;
    font-size: 14px;
    color: #333;
    text-align: left;
    padding:0 20px;
    box-sizing: border-box;

  }
  .go-back {
    font-size: 14px;
    color: rgb(51, 51, 51);
    padding-right: 20px;
    cursor: pointer;
    transition: all .3s;
    border-right: 1px solid #dcdfe6;
    padding-left: 20px;
  }
  .go-back:hover {
    color: #2C61FF;
  }
  .go-back span {
    margin-left: 12px;
  }
  .header-content {
    color: #666;
    font-weight: 700;
  }
  .slot {
    flex: 1;
  }
  .page-header-left {
    display: flex;
    align-items: center;
  }
</style>
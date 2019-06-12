<template>
  <div>
    <div class="global_header">
      <div class="logo"><img height="25" src="@/assets/images/logo.png" alt=""></div>
      <div class="fun">
        <span>sdk下载</span>
        <span>帮助文档</span>
        <span>个人</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isSelect: false,
        createApp_type: false
      }
    },
    mounted() {
      window.addEventListener('click', () => {
        this.isSelect = false
      })
    },
    methods: {
      drop(e) {
        e.stopPropagation()
        this.isSelect = !this.isSelect
      },
      changeApp(e) {
        e.stopPropagation()
      },
      createApp() {
        this.createApp_type = true;
      },
      changeCreateApp_type() {
        this.createApp_type = false;
      }
    }
  }
</script>
<style lang="less" scoped>
  .global_header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 62px;
    z-index: 999;
    padding: 0 20px;
    line-height: 62px;
    color: #000000;
    background-color: #0343F6;
    background-image: linear-gradient(to bottom, #2C61FF 0%, #094AFE 50%, #0343F6 100%);
    .logo {
      float: left;
      line-height: 0;
      margin-top: 18px;
    }
    .fun {
      height: 60px;
      line-height: 60px;
      font-size: 14px;
      position: absolute;
      right: 20px;
      span {
        color: rgba(255, 255, 255, .7);
        margin: 0 10px;
        cursor: pointer;
        height: 60px;
        display: inline-block;
        &:hover {
          color: #fff;
        }
      }
    }
  }
</style>


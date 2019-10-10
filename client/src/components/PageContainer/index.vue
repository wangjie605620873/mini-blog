<template>
  <div class="page_container">
    <div class="__block_box">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped type="less">
  .page_container{
    margin:0 16px;
  }
  .__block_box{
    background-color: rgb(255, 255, 255);
    border-radius: 2px;
    border:1px solid #efefef;
    padding: 20px;
    margin-bottom: 20px;
  }
</style>

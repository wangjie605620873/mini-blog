<template>
  <div>
    <el-button @click="button">
      点击
    </el-button>
  </div>

</template>

<script>
  export default {
    data(){
      return{}
    },
    created(){
    },
    methods : {
      button(){
        this.$emit("buttons","我点击了button")
      }
    }
  }
</script>
<template>
  <div>
    <el-button >
      {{aa}}
    </el-button>
  </div>

</template>

<script>
  export default {
    data(){
      return{
        aa : "1"
      }
    },
    created(){
      this.$on("buttons",function (e) {
        this.aa = e
      });
    },
    methods : {

    }
  }
</script>
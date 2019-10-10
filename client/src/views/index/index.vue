<template>
  <div style="margin-top:200px;">
    <test1></test1>
    <test2></test2>
  </div>
</template>
<script>
  import test1 from '../../components/test1'
  import test2 from '../../components/test2'
  export default {
    components : {
      test1,
      test2
    },
    data(){
      return {}
    },
    mounted(){
      this.$emit("EventTest","222")
    }
  }
</script>

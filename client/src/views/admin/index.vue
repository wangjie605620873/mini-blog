<template>
  <div>
    <Menu></Menu>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>
<script>
  import Menu from '../../components/Menu/index.vue'
  import Header from  '../../components/Header/index.vue'
  export default {
    components : {
      Menu,
      Header
    },
    data(){
      return {}
    },
    created(){
      console.log(111111)
    }

  }
</script>
<style>

</style>
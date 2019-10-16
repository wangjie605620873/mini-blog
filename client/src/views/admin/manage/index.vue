<template>
  <div>
    <Menu></Menu>
    <div class="menu_container">
      <router-view/>
    </div>
  </div>
</template>
<script>
  import Menu from '../../../components/Menu/index.vue'
  export default {
    components : {
      Menu
    },
    data() {
      return {}
    }
  }
</script>
<style>

</style>
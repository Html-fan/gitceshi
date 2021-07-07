<template>
  <div class="bheader">
    {{this.$route.meta.title}}
  </div>
</template>

<script>
  export default {
    name:"bheader",
    data() {
      return {
        
      }
    },
  }
</script>

<style  scoped>
  .bheader{
    height: 50px;
    background-color: darkgray;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
  }
</style>
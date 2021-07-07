<template>
  <div id="index">
      <div class="top">
        <Bheader></Bheader>
      </div>
      <div class="mid">
        <router-view></router-view>
      </div>
      <div class="bot">
        <Bfooter></Bfooter>
      </div>
      
  </div>
</template>

<script>
  import Bfooter from './bfooter'
import Bheader from './bheader'
export default {
  components: {
    Bfooter,
    Bheader,
     },
    name:"index"
  }
</script>

<style  scoped>

  #index{
    display: flex;
    flex-direction: column;
    height: 100vh;
    
  }
  
  .mid{
    flex: 1;
    overflow-y:auto ;
  }
  .bot{
    height: 50px;
    background-color: blue;
  }
  
</style>
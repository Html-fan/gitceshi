<template>
  <div class="foot">
    <router-link 
    v-for="item in list" :key="item.id" 
    :to="item.path" 
    active-class="active">
      {{item.name}}
    </router-link>
  </div>
</template>

<script>
  export default {
    name:"bfooter",
    data() {
      return {
        list:[
          {
            id:"1",
            path:"/home",
            name:"首页",
          },
          {
            id:"2",
            path:"/about",
            name:"关于",
          },
          {
            id:"3",
            path:"/cart",
            name:"购物车",
          },
          {
            id:"4",
            path:"/user",
            name:"我的",
          },
        ]
      }
    },
  }
</script>

<style scoped>
  .active{
    background-color: red;
  }
  a{
    text-decoration: none;
    color: cornsilk;
    display: block;
    height: 100%;
    width: 25%;
    text-align: center;
    line-height: 50px;
  }
  .foot{
    height: 50px;
    background-color:rgb(100, 82, 73);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

</style>
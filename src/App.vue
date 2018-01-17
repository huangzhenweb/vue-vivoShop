<template>
  <div id="app">
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import rem from './rem/rem.js'
import footer from './components/footer'
export default {
  name: 'app',
  components:{
    "v-footer":footer,
  }
}
</script>

<style>
/*引入字体样式*/
 @import "./font/font.css"; 
 *{
 	padding: 0;
 	margin: 0;
 	text-decoration: none;
 	list-style: none;
 }
 body{
  padding-bottom:1.56rem; 
  font-family: '微软雅黑';
  background: #F4F4F4;
}
</style>

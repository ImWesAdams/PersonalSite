import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import jQuery from 'jquery'
// import Vue from 'vue'

// let app=createApp({
//   provide:{
//     globalVariable:123
//   }
//
// }).$mount('#app');

createApp(App).use(router).mount('#app');

const app = createApp(App);
var firstHomeLoad = true;
app.provide('$firstHomeLoad', firstHomeLoad);

// let app=new Vue({
// provide:{
// globalVariable:123
// }
//
// }).$mount('#app');
// console.log(app);

// var firstHomeLoad = true;
// const app = createApp(firstHomeLoad);
// app.config.globalProperties.$firstHomeLoad = firstHomeLoad;

// new Vue({
//   methods: {
//     handleClick: function() {
//       alert('test')
//     }
//   }
// });

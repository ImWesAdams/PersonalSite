<template>
  <div id="nav1">
    <div class = "main-navbar">
      <div class="name">
        <router-link to="/" class="router-name" style="text-decoration: none; color: inherit;">
          <div class = "first-name">Wes</div> <div class = "last-name" style="font-stretch: 200%;">Adams</div>
        </router-link>
        <!-- <nav class="navbar" role="navigation" aria-label="main navigation"> -->
      </div>
      <div id="nav" class="navitem">
        <router-link to="/" class = "router" style="font-weight:normal; text-decoration:none; :visited: none;">Home</router-link>
        <router-link to="/AboutMe" class = "router" style="font-weight:normal; text-decoration:none;">About Me</router-link>
        <router-link to="/Resume" class = "router" style="font-weight:normal; text-decoration:none;">Resume and Skills</router-link>
      </div>
    </div>
    <!-- <WhatImUpTo> </WhatImUpTo> -->
  </div>
  <router-view></router-view>
  <!-- <div ="upto">
    <ul aria-labelledby="list-summary" class="stack-large">
      <li v-for="item in ToDoItems" :key="item.link">

      </li>
    </ul>
  </div> -->
  <!-- <router-view></router-view> -->
</template>

<script>

// import Home from '@/views/Home.vue';

export default {
  name: 'app',
  components: {
    // Home
  },
  data() {
  },
}

</script>

<style>
.first-name {
  padding: 0 3px;

}

a:visited {
  color: inherit;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav1 {
  padding: 5px;
  font-size: large;
  /* text-align: center; */
}

.navitem {
  /* margin: 10px; */
  /* text-align: center; */
  /* display: flex; */
  /* padding: 10px; */
  /* align: left; */
  padding: 0 50vw 0 0;
}

.main-navbar {
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  /* flex-direction: column; */
  /* text-align: right; */
  padding-top: 0px;
}

.router-name {
  padding: 0 30px 0 0px;
  /* font-size: 100px; */
}

.name {
  padding-left: 5px;
  /* text-align: right; */
  /* display: flex; */
  /* text-decoration: none; */
  /* background-color: darkgreen; */
  /* align-items: center; */
  /* text-align: left; */
  /* text-align: left; */
  /* font-size: 20px; */
  /* font: Brush Script MT, Brush Script Std, cursive; */
}

.first-name {
  font-weight: normal;
  font-family: "Lucida Console", "Courier New", monospace;
  /* font-stretch: 200%; */
  /* text-decoration: none; */
  /* align-items: center; */
  /* font-size: 15px; */
}

.last-name {
  font-weight: bold;
  font-family: "Lucida Console", "Courier New", monospace;
  text-decoration: none;
  /* align-items: center; */
  /* font-stretch: extra-condensed; */
  /* font-size: 30px; */
  /* transform: scaleY(0.5); */
}

.first-name a {
  text-decoration: none;
}

.router {
  padding: 0 15px;
}

.router-name {
  display: flex;
  /* padding: 0 1px; */
}

#nav {
  font-weight: bold;
  color: #2c3e50;
  /* align-items: center; */
  /* text-align: right; */
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#nav .name.router-link-exact-active {
  color: #2c3e50;
}
</style>

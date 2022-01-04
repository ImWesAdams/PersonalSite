<template>
  <div id="nav">
    <div class="navitem">
      <router-link to="/">Home</router-link> |
      <router-link to="/AboutMe">About Me</router-link> |
      <router-link to="/Resume">Resume and Skills</router-link>
    </div>
    <router-view></router-view>
    <!-- <WhatImUpTo> </WhatImUpTo> -->
  </div>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

.navitem {
  margin: 10px;
  /* padding: 10px; */
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
  <div class="upto-all">
    <ul class="menu">
      <!-- <li v-for="item in WhatImUpToItems">
        <a v-bind:href="asd">{{ item.date }}</a>
      </li> -->
    </ul>
  </div>
</template>

<script>

  // export default {
  //   data() return {
      // WhatImUpToItems: [
      // //   // ~~ Leave link empty with '' if no link and the site will not display this item as a link :-)
      //   { date: 'Jan. 2022', link: 'python-fda-github', label: 'Analyzing FDA Food Data in Python'},
      //   { date: 'Dec. 2021', link: 'vue-website-github', label: 'Learning JavaScript, HTML, and CSS so I can make this website with Vue!'},
      //   { date: 'Jan. 2021', link: 'https://github.com/ImWesAdams/Coursera-Python-Data-Science', label: 'Coursera class on Data Science in Python'},
      //   { date: 'Jan. 2021', label: 'Test No Link'}
      // ]
  //   }
  // }
export default {
  data() {
    return {
      WhatImUpToItems: [
      //   // ~~ Leave link empty with '' if no link and the site will not display this item as a link :-)
        { date: 'Jan. 2022', link: 'python-fda-github', label: 'Analyzing FDA Food Data in Python'},
        { date: 'Dec. 2021', link: 'vue-website-github', label: 'Learning JavaScript, HTML, and CSS so I can make this website with Vue!'},
        { date: 'Jan. 2021', link: 'https://github.com/ImWesAdams/Coursera-Python-Data-Science', label: 'Coursera class on Data Science in Python'},
        { date: 'Jan. 2021', label: 'Test No Link'}
      ],
    }
}
}
;
</script>
<style scoped>

ul {
  margin: 0;
  padding: 0;
}

li {
  display: flex;
}

.upto-date {
  min-width: 100px;
  /* font-weight: bold; */
}

.upto-all {
  display: flex;
  text-align: center;
  align-items: center;
  /* margin: auto; */
}

.to-do-list-item {
  text-align: center;
  padding-left: 15px;
  padding-right: 15px;
  vertical-align: middle;
}

.upto-label-link {
  cursor: pointer;
  /* color: blue; */
  text-decoration: none;
  color: #0000EE;
}

a:visited {
  /* text-decoration: none; */
  color: #551A8B;
  /* font-size: 100px; */
}

.upto-label-link:hover {
  color:royalblue;
}

/* a:visited {
  color: inherit;
} */

</style>

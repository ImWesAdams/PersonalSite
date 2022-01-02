<!-- The homepage to the site -->

<template>
  <div class="home">
    <div class="headshot-photo center">
      <img alt="Photo of Wes" src="../assets/wes_headshot_photo.jpeg">
    </div>
    <HomeHeader class="home-header" header1="Welcome to Wes' Website!" header2="&uarr; Wow, that's a lot of W's &uarr;">
    </HomeHeader>
    <div class="short-about">
      <h2 class="short-about-header">A little about me</h2>
      <h2>I am a data scientist and analyst with a broad range of experiences. <br class="short-about-break">
        My biggest passion is to improve user outcomes by applying targeted, in-product Machine Learning models. <br class="short-about-break">
        I also enjoy providing general analysis and reporting that helps to improve the data culture of a company.
      </h2>
    </div>
    <div class="list">
      <h2 class="up-to">What have I been working on recently?</h2>
      <ul aria-labelledby="list-summary" class="up-to-list">
        <li v-for="item in WhatImUpToItems" :key="item.id" class="up-to-item">
          <div v-if="item.link === ''">
            <WhatImUpTo :link="asd" :label="item.label"></WhatImUpTo>
          </div>
          <div v-else>
            <WhatImUpTo :link="item.link" :label="item.label"></WhatImUpTo>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HomeHeader from '@/components/HomeHeader.vue';
import WhatImUpTo from '@/components/WhatImUpTo.vue';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    WhatImUpTo
  },
  data() {
    return {
      WhatImUpToItems: [
        // Leave link empty with '' if no link and the site will not display this item as a link :-)
        { link: '', label: 'Learning JavaScript, HTML, and CSS so I can make this website with Vue!'},
        { link: 'test2', label: 'Analyzing FDA Food Data in Python'},
      ]
    }
  }
}
</script>

<style scoped>
.headshot-photo {
  /* make the headshot photo rounded to cut out clutter */
  width: 250px;
  height: 250px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
}
.center {
  margin-left: auto;
  margin-right: auto;
  /* width: 50%; */
}
.home-header {
  padding-top: 10px;
  margin-bottom: 20px;
}
.short-about {
  font-size: 15px;
  margin-bottom: 20px;
  border:1px solid black;
  padding: 5px;
}
.short-about-break {
  margin: 20px;
  /* This doesn't actually seem to work right */
}
.short-about-header {
  font-weight: bold;
  text-decoration: underline;
  text-decoration-thickness: 3px;
  /* margin-top: 20px; */
  /* text-align: left; */
}
/* br {
  margin: 100px;
} */
/* .up-to-items > * + * {
  margin-top: 2.5rem;
} */
.up-to-item {
  list-style-type: none;
  font-size: 20px;
  margin-bottom: 7px;
}
.up-to-list {
  margin: 0;
  /* padding: 10px; */
}
.up-to {
  /* margin-bottom: 0px; */
  margin: 10px;
  text-decoration: underline;
  text-decoration-thickness: 3px;
}
h2 {
  margin: 0;
}

img {
  display: inline;
  align-items: center;
  margin: 0 auto;
  height: 100%;
  width: auto;
  /* padding-bottom: 1000px; */
}
</style>

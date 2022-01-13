<!-- The homepage to the site -->

<template>
  <div class="all">
    <div class="header" v-bind:class="{ fadeIn: firstLoad}">
      <div class="headshot-photo center">
        <img alt="Photo of Wes" src="../assets/wes_headshot_photo.jpeg">
      </div>
      <!-- <HomeHeader class="home-header" header1="Welcome to Wes' Website!" header2="&uarr; Wow, that's a lot of W's &uarr;">
      </HomeHeader> -->
      <div class="text-header">
          <h1 id="welcome-header1">Welcome to Wes' Website!</h1>
          <h2 id="welcome-header2">&uarr; Wow, that's a lot of W's &uarr;</h2>
      </div>
    </div>
        <div class="short-about" v-bind:class="{blurryToClear: firstLoad}">
          <!-- <h2 class="short-about-header">Who am I?</h2> -->
          <h2 class ="short-about-text">I'm a &#x1F522;<strong>Data Scientist</strong>&#x1f9ee; and &#x1F5A5;<strong>Overall Nerd</strong>&#x1F913; with a passion for learning.
          <!-- </h2> -->
          <!-- <h2 class ="short-about-text">  -->
             I work with anything involving Data, especially analyzing, processing, streamlining, modeling, and productizing.
           <!-- </h2> -->
          <!-- <h2 class ="short-about-text">  -->
             Outside of work, I mostly exercise, code, cook, watch sports, and read.
           </h2>
        </div>
        <div class="externalLinks" v-bind:class="{ comeInFromAbove: firstLoad}"><ExternalLinks></ExternalLinks></div>
        <div class="home-body">
          <h2 class="up-to" v-bind:class="{ comeInFromLeft: firstLoad}">What have I been working on recently?</h2>
          <div class="up-to-list" v-bind:class="{ stretchIn: firstLoad}">
            <WhatImUpTo></WhatImUpTo>
            <!-- ~~ Originally was rendering this with a loop but couldn't get :visited behavior to work properly -->
            <!-- <ul aria-labelledby="list-summary" class="up-to-ul">
              <li v-for="item in WhatImUpToItems" :key="item.label" class="up-to-item">
                <div v-if="item.link === ''">
                  <WhatImUpToOldList :label="item.label" :date="item.date" :clicked="0" @item-clicked="updateClickedStatus(item.label)"></WhatImUpToOldList>
                </div>
                <div v-else>
                  <WhatImUpToOldList :link="item.link" :label="item.label" :date="item.date"></WhatImUpToOldList>
                </div>
              </li>
            </ul> -->
        </div>
        <h2 class="up-to" v-bind:class="{ comeInFromRight: firstLoad}">Interested in some Recommendations?</h2>
        <div class="up-to-list" v-bind:class="{ comeInFromBelow: firstLoad }">
          <Recommendations></Recommendations>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src

// import HomeHeader from '@/components/HomeHeader.vue';
import WhatImUpTo from '@/components/WhatImUpTo.vue';
import Recommendations from '@/components/Recommendations.vue';
import ExternalLinks from '@/components/ExternalLinks.vue';
// import {provide} from 'vue';
// import { inject } from 'vue';

export default {
  name: 'Home',
  components: {
    // HomeHeader,
    WhatImUpTo,
    ExternalLinks,
    Recommendations
  },
  // mounted() {
  //   location.reload()
  // },
  data() {
    return {
      // firstLoad: sessionStorage.getItem('homeAnimationShow'),
      firstLoad: sessionStorage.getItem('homeAnimationShow')=='1', // ~~bruhhh this is so annoying!
      // ~~the localstorage and sessionstorage items are all converted to string, so the check was failing because 0 != '0'. so annoying.
      // ~~glad I finally found it. DO LOTS OF CONSOLE.LOG() OF EVERY RELEVANT VALUE TO CATCH SOONER NEXT TIME!!!

      // ~~ OLD - used to render a list of WhatImUpToItems but couldn't get link visited behavior to work properly so screw it lol
      // WhatImUpToItems: [
      //   // ~~ Leave link empty with '' if no link and the site will not display this item as a link :-)
      //   { date: 'Jan. 2022', link: 'python-fda-github', label: 'Analyzing FDA Food Data in Python'},
      //   { date: 'Dec. 2021', link: 'vue-website-github', label: 'Learning JavaScript, HTML, and CSS so I can make this website with Vue!'},
      //   { date: 'Jan. 2021', link: 'https://github.com/ImWesAdams/Coursera-Python-Data-Science', label: 'Coursera class on Data Science in Python'},
      //   { date: 'Jan. 2021', label: 'Test No Link'}
      // ]
    }
  },
  methods: {
    updateClickedStatus(upToItem) {
      const upToLinkClicked = this.ToDoItems.find(item => item.label === upToItem);
      upToLinkClicked.clicked = "1";
      console.log('test');
    }
    // onlyAnimateOnce() {
    //   console.log('test');
    //   this.firstLoad = false;
    // },
  },
  // mounted() {
  //   console.log('mounted home - firstLoad = ' + this.firstLoad);
  // },
  beforeUnmount() {
    // location.reload();
    sessionStorage.setItem('homeAnimationShow',0);
    // console.log('beforeUnmount home - firstLoad = ' + this.firstLoad);
  },
  // beforeUnmount() {
  //   provide('firstHomeLoad',false);
  //   console.log(this.firstHomeLoad);
  // },
  // watch: {
  //   '$route' (to, from) {
  //     console.log('Route changed from ' + from.path + ' to ' + to.path);
  //     console.log('watch home - homeAnimationShow = ' + sessionStorage.getItem('homeAnimationShow'));
  //     console.log('watch home - firstLoad = ' + this.firstLoad);
  //     console.log(this.firstLoad);
  //     console.log(this.firstLoadTest);
  //     // this.getTasks();
  //     }
  //   },
  // mounted:
  // this.firstLoad=sessionStorage.getItem('homeAnimationShow')
  //   function onlyAnimateOnce() {
  //     // this.firstLoad = !this.firstLoad;
  //     console.log(this.loadedBefore);
  //   }
}
</script>

<style scoped>

h1 {
  margin: 0;
  padding: 0;
  /* text-decoration: underline; */
  /* text-decoration-thickness: 3px; */
  /* text-decoration-color: grey; */
}
#welcome-header2 {
  margin: 0;
  padding: 0 0px 10px 0;
  font-size: 20px;
}

.blurryToClear {
  animation: blurryToClear 3s ease-out 1s;
}

.comeInFromAbove {
  animation: comeInFromAbove 3s ease-out 1s;
}

.comeInFromRight {
  animation: comeInFromRight 3s ease-out 1s;
}

.comeInFromLeft {
  animation: comeInFromLeft 3s ease-out 1s;
}

.fadeIn {
  animation: fadeIn 3s ease-out 1s;
}

.comeInFromBelow {
  animation: comeInFromBelow 3s ease-out 1s;
}

.stretchIn {
  animation: stretchIn 3s ease-out 1s;
}

@keyframes blurryToClear {
  from {
    filter:blur(10px);
  }
}

@keyframes comeInFromRight {
  from {
    transform: translateX(100vw);
  }
  to {
    transform: translateX(0vw);
  }
}

@keyframes stretchIn {
  from {
    transform: scale(0,0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes comeInFromLeft {
  from {
    transform: translateX(-100vw);
  }
  to {
    transform: translateX(0vw);
  }
}

@keyframes comeInFromBelow {
  from {
    transform: translateY(25vh);
  }
  to {
    transform: translateY(0vh);
  }
}

@keyframes comeInFromAbove {
  from {
    transform: translateY(-25vh);
  }
  to {
    transform: translateY(0vh);
  }
}

.externalLinks {
}

.all {
  margin-left: 10vw;
  margin-right: 10vw;
  text-align: center;
}

.home-body {
  overflow: hidden;
}

.up-to-list {
  height: 25vh;
  overflow-y: scroll;
  /* overflow-x: scroll; */
  /* background-color: gray; */
  /* border-style: solid; */
  /* border-width: 1px; */
  border-style: solid;
  /* box-shadow: 1px 1px 1px 1px rgba(38, 97, 156, 0.25); */
  /* background-color: rgba(250,250,250,0.5); */
  margin: 0 5vw;
  padding: 1px 0 3px 6px;
  align-self: flex-start;
  /* position: fixed; */
  /* display: flex; */
  /* flex-wrap: nowrap; */
  /* animation: move 3s infinite linear; */
}


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


.header {
  /* padding-top: 10px; */
  /* margin-bottom: 20px; */
}


.short-about {
  font-size: 15px;
  /* margin-bottom: 20px; */
  /* border:1px solid black; */
  padding: 2vh 0 0 0;
  /* display: flex; */
}


.short-about-text {
  /* padding: 0; */
  /* display: flex; */
  /* This doesn't actually seem to work right */
}


.up-to {
  /* margin-bottom: 0px; */
  padding-top: 2vh;
  /* padding-bottom: 0; */
  margin: 10px;
  /* text-decoration: underline; */
  /* text-decoration-thickness: 3px; */
  font-weight: bold;
  /* position: absolute; */
}

h2 {
  padding: 0;
  margin: 0;
}

img {
  display: inline;
  align-items: center;
  margin: 0 auto;
  height: 100%;
  width: auto;
}
</style>

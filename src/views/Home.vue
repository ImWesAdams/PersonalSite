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
        <div class="short-about" v-bind:class="{comeInFromLeft: firstLoad}">
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
        <div class="externalLinks" v-bind:class="{ comeInFromRight: firstLoad}"><ExternalLinks></ExternalLinks></div>
        <div class="home-body">
          <h2 class="up-to" v-bind:class="{ comeInFromBelow: firstLoad}">What have I been working on recently?</h2>
          <div class="up-to-list" v-bind:class="{ stretchIn: firstLoad}">
            <ul aria-labelledby="list-summary" class="up-to-ul">
              <li v-for="item in WhatImUpToItems" :key="item.id" class="up-to-item">
                <div v-if="item.link === ''">
                  <WhatImUpTo :label="item.label" :date="item.date"></WhatImUpTo>
                </div>
                <div v-else>
                  <WhatImUpTo :link="item.link" :label="item.label" :date="item.date"></WhatImUpTo>
                </div>
              </li>
            </ul>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src

// import HomeHeader from '@/components/HomeHeader.vue';
import WhatImUpTo from '@/components/WhatImUpTo.vue';
import ExternalLinks from '@/components/ExternalLinks.vue';
// import {provide} from 'vue';
// import { inject } from 'vue';

export default {
  name: 'Home',
  components: {
    // HomeHeader,
    WhatImUpTo,
    ExternalLinks,
  },
  // mounted() {
  //   location.reload()
  // },
  data() {
    return {
      // firstLoad: localStorage.getItem('homeAnimationShow'),
      firstLoad: localStorage.getItem('homeAnimationShow')=='1', // ~~bruhhh this is so annoying!
      // ~~the localstorage items are all converted to string, so the check was failing because 0 != '0'. so annoying.
      // ~~glad I finally found it. DO LOTS OF CONSOLE.LOG() OF EVERY RELEVANT VALUE TO CATCH SOONER NEXT TIME!!!
      WhatImUpToItems: [
        // ~~ Leave link empty with '' if no link and the site will not display this item as a link :-)
        { date: 'Jan. 2022', link: 'test2', label: 'Analyzing FDA Food Data in Python'},
        { date: 'Dec. 2021', label: 'Learning JavaScript, HTML, and CSS so I can make this website with Vue!'},
        { date: 'Jan. 2022', link: 'test2', label: 'Analyzing FDA Food Data in Python'},
        { date: 'Dec. 2021', label: 'Learning JavaScript, HTML, and CSS so I can make this website with Vue!'},
        { date: 'Jan. 2022', link: 'test2', label: 'Analyzing FDA Food Data in Python'},
        { date: 'Dec. 2021', label: 'Learning JavaScript, HTML, and CSS so I can make this website with Vue!'},
        { date: 'Jan. 2022', link: 'test2', label: 'Analyzing FDA Food Data in Python'},
        { date: 'Dec. 2021', label: 'Learning JavaScript, HTML, and CSS so I can make this website with Vue!'},
        { date: 'Jan. 2022', link: 'test2', label: 'Analyzing FDA Food Data in Python'},
        { date: 'Dec. 2021', label: 'Learning JavaScript, HTML, and CSS so I can make this website with Vue!'},
        { date: 'Jan. 2022', link: 'test2', label: 'Analyzing FDA Food Data in Python'},
        { date: 'Dec. 2021', label: 'Learning JavaScript, HTML, and CSS so I can make this website with Vue!'},
        { date: 'Jan. 2022', link: 'test2', label: 'Analyzing FDA Food Data in Python'},
        { date: 'Dec. 2021', label: 'Learning JavaScript, HTML, and CSS so I can make this website with Vue!'},
        { date: 'Jan. 2022', link: 'test2', label: 'Analyzing FDA Food Data in Python'},
        { date: 'Dec. 2021', label: 'Learning JavaScript, HTML, and CSS so I can make this website with Vue!'},
        { date: 'Jan. 2022', link: 'test2', label: 'Analyzing FDA Food Data in Python'},
        { date: 'Dec. 2021', label: 'Learning JavaScript, HTML, and CSS so I can make this website with Vue!'},
        { date: 'Jan. 2022', link: 'test2', label: 'Analyzing FDA Food Data in Python'},
        { date: 'Dec. 2021', label: 'Learning JavaScript, HTML, and CSS so I can make this website with Vue!'},
        { date: 'Jan. 2022', link: 'test2', label: 'Analyzing FDA Food Data in Python'},
        { date: 'Dec. 2021', label: 'Learning JavaScript, HTML, and CSS so I can make this website with Vue!'},
        { date: 'Jan. 2022', link: 'test2', label: 'Analyzing FDA Food Data in Python'},
        { date: 'Dec. 2021', label: 'Learning JavaScript, HTML, and CSS so I can make this website with Vue!'},
        { date: 'Jan. 2022', link: 'test2', label: 'Analyzing FDA Food Data in Python'},
        { date: 'Dec. 2021', label: 'Learning JavaScript, HTML, and CSS so I can make this website with Vue!'},
        { date: 'Jan. 2022', link: 'test2', label: 'Analyzing FDA Food Data in Python'},
        { date: 'Dec. 2021', label: 'Learning JavaScript, HTML, and CSS so I can make this website with Vue!'},
      ]
    }
  },
  methods: {
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
    localStorage.setItem('homeAnimationShow',0);
    // console.log('beforeUnmount home - firstLoad = ' + this.firstLoad);
  },
  // beforeUnmount() {
  //   provide('firstHomeLoad',false);
  //   console.log(this.firstHomeLoad);
  // },
  // watch: {
  //   '$route' (to, from) {
  //     console.log('Route changed from ' + from.path + ' to ' + to.path);
  //     console.log('watch home - homeAnimationShow = ' + localStorage.getItem('homeAnimationShow'));
  //     console.log('watch home - firstLoad = ' + this.firstLoad);
  //     console.log(this.firstLoad);
  //     console.log(this.firstLoadTest);
  //     // this.getTasks();
  //     }
  //   },
  // mounted:
  // this.firstLoad=localStorage.getItem('homeAnimationShow')
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
  text-decoration-thickness: 3px;
  /* text-decoration-color: grey; */
}
#welcome-header2 {
  margin: 0;
  padding: 0 0px 10px 0;
  font-size: 20px;
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
  overflow: scroll;
  /* background-color: gray; */
  /* border-style: solid; */
  /* border-width: 1px; */
  box-shadow: 1px 1px 1px 1px rgba(38, 97, 156, 0.25);
  background-color: rgba(250,250,250,0.5);
  margin: 0 5vw;
  /* display: flex; */
  /* flex-wrap: nowrap; */
  /* animation: move 3s infinite linear; */
}


.up-to-ul {
  margin: 0;
  padding: 0;
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

.up-to-item {
  font-size: 20px;
  margin-bottom: 7px;
}


.up-to {
  /* margin-bottom: 0px; */
  padding-top: 2vh;
  margin: 10px;
  /* text-decoration: underline; */
  text-decoration-thickness: 3px;
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

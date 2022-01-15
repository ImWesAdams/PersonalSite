<!-- The homepage to the site -->

<template>
  <div class="all">
    <div class="header" v-bind:class="{ fadeIn: firstLoad}">
      <div class="headshot-photo center">
        <img alt="Photo of Wes" src="../assets/wes_headshot_photo.jpeg">
      </div>
      <div class="text-header">
          <h1 id="welcome-header1">Welcome to Wes' Website!</h1>
          <h2 id="welcome-header2">&uarr; Wow, that's a lot of W's &uarr;</h2>
      </div>
    </div>
        <div class="short-about" v-bind:class="{blurryToClear: firstLoad}">
          <h2 class ="short-about-text">I'm a &#x1F522;<strong>Data Analyst and Scientist</strong>&#x1f9ee; and &#x1F5A5;<strong>Overall Nerd</strong>&#x1F913; with a passion for learning.
             I work with anything involving Data, especially analyzing, processing, streamlining, modeling, and productizing.
             Outside of work, I mostly exercise, code, cook, watch sports, and read.
           </h2>
        </div>
        <div class="externalLinks" v-bind:class="{ comeInFromAbove: firstLoad}"><ExternalLinks></ExternalLinks></div>
        <div class="home-body">
          <h2 class="up-to" v-bind:class="{ comeInFromLeft: firstLoad}">What have I been working on recently?</h2>
          <div class="up-to-list" v-bind:class="{ stretchIn: firstLoad}">
            <WhatImUpTo></WhatImUpTo>
        </div>
        <h2 class="up-to" v-bind:class="{ comeInFromRight: firstLoad}">Interested in some Recommendations?</h2>
        <div class="up-to-list" v-bind:class="{ comeInFromBelow: firstLoad }">
          <Recommendations></Recommendations>
        </div>
      </div>
  </div>
</template>

<script>

import WhatImUpTo from '@/components/WhatImUpTo.vue';
import Recommendations from '@/components/Recommendations.vue';
import ExternalLinks from '@/components/ExternalLinks.vue';

export default {
  name: 'Home',
  components: {
    WhatImUpTo,
    ExternalLinks,
    Recommendations
  },
  data() {
    return {
      firstLoad: sessionStorage.getItem('homeAnimationShow')=='1', // ~~wowwww this is so annoying!
      // ~~the localstorage and sessionstorage items are all converted to string, so the check was failing because 0 != '0'. so annoying.
      // ~~glad I finally found it. DO LOTS OF CONSOLE.LOG() OF EVERY RELEVANT VALUE TO CATCH SOONER NEXT TIME!!!
    }
  },
  methods: {
  },
  beforeUnmount() {
    // location.reload();
    sessionStorage.setItem('homeAnimationShow',0);
    // console.log('beforeUnmount home - firstLoad = ' + this.firstLoad);
  },

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
  animation: 3s ease-out 0s 1 blurryToClear;
}

.comeInFromAbove {
  animation: 3s ease-out 0s 1 comeInFromAbove;
}

.comeInFromRight {
  animation: 3s ease-out 0s 1 comeInFromRight;
}

.comeInFromLeft {
  animation: 3s ease-out 0s 1 comeInFromLeft;
}

.fadeIn {
  animation: 3s ease-out 0s 1 fadeIn;
}

.comeInFromBelow {
  animation: 3s ease-out 0s 1 comeInFromBelow;
}

.stretchIn {
  animation: 3s ease-out 0s 1 stretchIn;
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

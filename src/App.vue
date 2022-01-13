<template>
  <div id="all-background">
  <!-- <div id="wrapper">
    <div id="header">
      <div id="left-header">
        <router-link to="/" style = "text-decoration:none; color:inherit;" id = "name">Wes Adams</router-link>
      </div>
      <nav id="nav-items">
        <ul>
        <li><router-link to="/" class = "router" style="font-weight:normal; text-decoration:none;">Home</router-link></li>
        <li><router-link to="/AboutMe" class = "router" style="font-weight:normal; text-decoration:none;">About Me</router-link></li>
        <li><router-link to="/Resume" class = "router" style="font-weight:normal; text-decoration:none;">Resume and Skills</router-link></li>
        </ul>
      </nav>
    </div>
  </div> -->
  <!-- ~~ I got the gorgeous header template from here: https://codepen.io/tacosontitan/pen/zYxXzKo -->
  <div class="container">
	<div class="header-bar">
    <!-- <div class="name"> -->
    <!-- ~~ the clickbox for this router is out of wack because of the translate-y.
      was thinking about fixing like this in style (display:inline-block; position:relative; z-index:1; padding-top:10em; margin-top:-10em;)
      in accordance with this thread (https://stackoverflow.com/questions/11078509/how-to-increase-the-clickable-area-of-a-a-tag-button)
   -->
		<h1 class="name">
      <!-- <a href="/">Wes Adams</a> -->
      <router-link to="/" class="name-link" style=" text-decoration:none; color:inherit;">Wes Adams</router-link>
    </h1>
    <!-- </div> -->
		<ul class="slider-menu">
      <!-- <li><router-link to="/" class = "router" style="font-weight:inherit; text-decoration:none;" @click.once="onlyAnimateOnce">Home</router-link></li>
      <li><router-link to="/AboutMe" class = "router" style="font-weight:inherit; text-decoration:none;" @click.once="onlyAnimateOnce">About Me</router-link></li>
      <li><router-link to="/Skills" class = "router" style="font-weight:inherit; text-decoration:none;" @click.once="onlyAnimateOnce">Skills</router-link></li>
      <li><a href="Resume.pdf" target="_blank" style="font-weight:inherit; text-decoration:none;" @click.once="onlyAnimateOnce">Resume</a></li> -->
      <li><router-link to="/" class = "router" style="font-weight:inherit; text-decoration:none;">Home</router-link></li>
      <li><router-link to="/AboutMe" class = "router" style="font-weight:inherit; text-decoration:none;">About Me</router-link></li>
      <li><router-link to="/Skills" class = "router" style="font-weight:inherit; text-decoration:none;">Skills</router-link></li>
      <li><a href="Resume.pdf" target="_blank" style="font-weight:inherit; text-decoration:none;">Resume</a></li>
		</ul>
	</div>
</div>
<!-- <router-view :key="$route.fullPath"></router-view> -->
<router-view></router-view>
</div>
</template>

<script>

// import firstHomeLoad from './main.js';

// import { provide } from 'vue';
// import { createApp } from 'vue';
// var firstHomeLoad = true;

export default {
  name: 'app',
  // setup() {
  //   provide('firstHomeLoad',true)
  // },
  components: {
  },
  data() {
    return {
    }
  },
  // inject: ['firstHomeLoad','globalVariable'],
  methods: {
    // onlyAnimateOnce() {
    //   console.log('onlyAnimateOnce');
    // },
  },
  // watch: {
  //   '$route' (to, from) {
  //     console.log('Route changed from ' + from.path + ' to ' + to.path);
  //       console.log('watch app - homeAnimationShow = ' + sessionStorage.getItem('homeAnimationShow'));
  //       // this.getTasks();
  //     }
// },
mounted() {
  sessionStorage.setItem('homeAnimationShow',1);
  // console.log('mounted app - homeAnimationShow = ' + sessionStorage.getItem('homeAnimationShow'));
}
}

</script>

<style>

/* @import url('https://fonts.googleapis.com/css?family=Open+Sans'); */

#app {
  /* font-family: "Open Sans", sans-serif; */
  font-family: BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


/* #all-background {
  border: 500px solid gray;
} */

/* #all-background {
  background-color: gray;
  width: 100vw;
  height: 100vh;
} */

@import url('https://fonts.googleapis.com/css?family=Parisienne|Quicksand&display=swap');

.container {
	height: 100%;
  /* width: 150%; */
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
  padding-bottom: 1%;
  padding-top: 1%;
  /* margin: -5% -9999rem 0 -9999rem; /*~~ this stuff would expand the header off the screen to make it full of color, but nah not aesthetic
  padding: 6% 9999rem 1% 9999rem;
  background-image: linear-gradient(to bottom right, lightgray, white);
  background-color: lightgray; */
  /* margin: 0 auto; */
  /* padding: 0; */
}

.header-bar {
	position: relative;
	width: 65%;
	min-width: 300px;
	height: 50px;
  pointer-events: none;
	/* border: 10px solid transparent; */
	/* border-top: 10px solid #fffa; */
	/* border-left: 10px solid #fffa; */
  /* background-color: rgb(232,232,232); */
	/* box-shadow: 4px 4px 5px 0px rgba(38, 97, 156, 0.25) inset; */
}
.header-bar::after {
	content: '';
	position: absolute;
	top: -10px;
	right: -10px;
	width: 100%;
	height: 50px;
	/* border: 10px solid transparent; */
	/* border-bottom: 10px solid #fffa; */
	/* border-right: 10px solid #fffa; */
	transition: 0.3s linear all;
}

.header-bar > .name {
	position: absolute;
	top: calc(50% - 18px);
	left: 10px;
	transform: translateY(-50%);
	/* color: #fffc; */
	font-family: 'Parisienne', cursive;
  font-weight: bold;
	cursor: default;
	user-select: none;
  pointer-events: all;
  padding: 0 3px;
  /* box-shadow: 2px 2px 2px 2px rgba(38, 97, 156, 0.25); */
  border-width: 1px;
  /* border-style: none none ridge none; */
  /* border-width: 1px; */
  /* border-color: blue; */
  color: royalblue;
  text-align: center;
  align-content: center;
  font-size: 150%;
}

/* .header-bar > .name:hover {
  border-width: 3px;
  transition: 0.1s linear all;
} */

/* .header-bar > .name > a {
	position: absolute;
	top: calc(50% - 20px);
	left: 10px;
	transform: translateY(-50%);
	font-family: 'Parisienne', cursive;
	cursor: default;
	user-select: none;
} */
.slider-menu {
	position: absolute;
	top: 0;
	right: 0;
	display: flex;
	list-style-type: none;
	margin: 0;
	padding: 0;
	z-index: 1;
  pointer-events: all;
}
.slider-menu > li {
	display: inline-flex;
	/* padding: 14px; */
  margin: 14px;
	/* padding: 14px; */
	font-family: 'Quicksand', sans-serif;
	/* color: #fff; */
	cursor: pointer;
	/* transition: 0.3s linear all; */
	user-select: none;
}
.slider-menu > li:hover {
	/* color: #faa; */
	/* box-shadow: 0 50px 5px rgba(15, 10, 222, 0.15) inset; */
  /* cursor: pointer; */
  color: #0000FF;
  font-weight: bold;
  /* font-size: 110%; */
}

/* #header {
  box-sizing: border-box;
  background: #ffc301;
  padding: 10px 15px;
  display: table;
  width: 100%;
  height: 70px;
}

#wrapper {
  height: 50px;
}

#left-header {
  float: left;
}

#nav-items {
  vertical-align: middle;
  display: table-cell;
}

#nav-items ul {
  text-align: center;
}

#nav-items ul li {
  display: inline-block;
  vertical-align: top;
} */

h2 {
  font-weight: normal;
}

a:visited { /* ~~ router links count as a links so this gets rid of the visited color change */
  color: inherit;
}

.container a.router-link-exact-active {
  color: #42b983;
}

.container .name.router-link-exact-active {
  color: #2c3e50;
}

.resume-links {

  display: inline-flex;

  vertical-align: middle;
  text-align: center;
  /* padding: 10px; */

}

  ::-webkit-scrollbar {
    /* display: inline; */
  }
  /* ~~ OLD - scrollbar formatting */
  ::-webkit-scrollbar {
      width: 10px;
      height: 13px;
    }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--lightestgrey);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 15px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

</style>

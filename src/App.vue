<template>
  <div id="all-background">
  <!-- ~~ I started with a header template from here: https://codepen.io/tacosontitan/pen/zYxXzKo -->
  <div class="container">
	<div class="header-bar">
    <!-- ~~ the clickbox for this router was out of wack because of the translate-y.
      was thinking about fixing like this in style (display:inline-block; position:relative; z-index:1; padding-top:10em; margin-top:-10em;)
      in accordance with this thread (https://stackoverflow.com/questions/11078509/how-to-increase-the-clickable-area-of-a-a-tag-button)
   -->
		<h1 class="name">
      <router-link to="/" class="name-link" style=" text-decoration:none; color:inherit;">Wes Adams</router-link>
    </h1>
		<ul class="slider-menu">
      <li><router-link to="/" class = "router" style="font-weight:inherit; text-decoration:none;">Home</router-link></li>
      <li><router-link to="/Skills" class = "router" style="font-weight:inherit; text-decoration:none;">Skills</router-link></li>
      <li><a href="Resume.pdf" class = "router" target="_blank" style="font-weight:inherit; text-decoration:none;">Resume</a></li>
		</ul>
	</div>
</div>
<router-view></router-view>
<div class="bottom-buffer"></div>
</div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
  },
mounted() {
  sessionStorage.setItem('homeAnimationShow',1);
}
}

</script>

<style>


#app {
  /* font-family: "Open Sans", sans-serif; */
  font-family: BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


@import url('https://fonts.googleapis.com/css?family=Parisienne|Quicksand&display=swap');

.bottom-buffer {
  padding: 3vh;
}

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

.router {
  color: black;
}

.router:visited {
  color: inherit;
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

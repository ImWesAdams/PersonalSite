<template>
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
      <router-link to="/" class="name-link" style="font-weight:bold; text-decoration:none; color:inherit; border-style: solid;
      ">Wes Adams</router-link>
    </h1>
    <!-- </div> -->
		<ul class="slider-menu">
      <li><router-link to="/" class = "router" style="font-weight:normal; text-decoration:none;">Home</router-link></li>
      <li><router-link to="/AboutMe" class = "router" style="font-weight:normal; text-decoration:none;">About Me</router-link></li>
      <li><router-link to="/Resume" class = "router" style="font-weight:normal; text-decoration:none;">Resume and Skills</router-link></li>
		</ul>
	</div>
</div>
<router-view></router-view>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data() {
  },
}

</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Open+Sans');

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@import url('https://fonts.googleapis.com/css?family=Parisienne|Quicksand&display=swap');

.container {
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
  padding-bottom: 5px;
}

.header-bar {
	position: relative;
	width: 50%;
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
	top: calc(50% - 20px);
	left: 10px;
	transform: translateY(-50%);
	/* color: #fffc; */
	font-family: 'Parisienne', cursive;
	cursor: default;
	user-select: none;
  pointer-events: all;
}

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
	padding: 14px;
	margin-left: 2px;
	font-family: 'Quicksand', sans-serif;
	/* color: #fff; */
	cursor: pointer;
	transition: 0.3s linear all;
	user-select: none;
}
.slider-menu > li:hover {
	/* color: #faa; */
	box-shadow: 0 50px 5px rgba(15, 10, 222, 0.15) inset;
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
</style>

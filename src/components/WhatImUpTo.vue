<template>
  <div class="upto-all">
    <ul>
    <!-- <h1>hi</h1> -->
      <li>
        <label class="upto-date">Feb. 2022</label>
        <div class="to-do-list-item to-do-list-item-with-link"> <!-- check if a link is there or not -->
          <a href='python-fda-github' target="_blank" class = "upto-label-link">
            Analyzing FDA Food Data in Python
          </a>
        </div>
      </li>
      <li>
        <label class="upto-date">Jan. 2022</label>
        <div class="to-do-list-item to-do-list-item-with-link"> <!-- check if a link is there or not -->
          <a href='vue-website-github' target="_blank" class = "upto-label-link">
            Learning JavaScript, HTML, and CSS so I can make this website with Vue
          </a>
        </div>
      </li>
      <li>
        <label class="upto-date">Dec. 2021</label>
        <div class="to-do-list-item to-do-list-item-with-link"> <!-- check if a link is there or not -->
          <a href='https://github.com/ImWesAdams/Coursera-Python-Data-Science' target="_blank" class = "upto-label-link">
            Coursera class on Data Science in Python
          </a>
        </div>
      </li>
      <li>
        <label class="upto-date">Dec. 2021</label>
        <div class="to-do-list-item to-do-list-item-with-link"> <!-- check if a link is there or not -->
          <a target="_blank" class = "upto-label-link">
            Test No Link
          </a>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>

  export default {
  }
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

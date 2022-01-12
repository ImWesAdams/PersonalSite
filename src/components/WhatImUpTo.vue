<template>
  <div class="upto-all">
    <ul>
    <!-- <h1>hi</h1> -->
      <!-- <li class = "upto-list-item">
        <label class="upto-date">Feb. 2022</label>
        <div class="upto-item upto-item-with-link">
          <a href='python-fda-github' target="_blank" class = "upto-label-link">
            Analyzing FDA Food Data in Python
          </a>
        </div>
      </li>
      <li class = "upto-list-item">
        <label class="upto-date">Jan. 2022</label>
        <div class="upto-item upto-item-with-link">
          <a href='vue-website-github' target="_blank" class = "upto-label-link">
            Learning JavaScript, HTML, and CSS so I can make this website with Vue
          </a>
        </div>
      </li>
      <li class = "upto-list-item">
        <label class="upto-date">Dec. 2021</label>
        <div class="upto-item upto-item-with-link">
          <a href='https://github.com/ImWesAdams/Coursera-Python-Data-Science' target="_blank" class = "upto-label-link">
            Coursera class on Data Science in Python
          </a>
        </div>
      </li> -->
      <li v-for="upToItem in upToItems" :key="upToItem.link" class = "upto-list-item">
        <label class="upto-date">{{upToItem.date}}</label>
        <div class="upto-item"> <!-- check if a link is there or not with css href = '' below -->
          <a :key="upToItem.link" :href="upToItem.link">
            {{upToItem.name}}
          </a>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>

  export default {
    data() {
      return {

        upToItems: [
          // Don't include a link field and it will show as black text rather than formatted as link
          {date: 'Feb. 2022', name: 'Test No Link'},
          {date: 'Feb. 2022', name: 'Analyzing FDA Food Data in Python', link: 'link-to-fda'},
          {date: 'Jan. 2022', name: 'Practicing JavaScript, HTML, and CSS to make this website in Vue', link: 'link-to-site'},
          {date: 'Dec. 2021', name: 'Coursera class on Data Science in Python', link: 'https://github.com/ImWesAdams/Coursera-Python-Data-Science'}
        ],
      }
  }
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

.upto-list-item {
  /* margin: 4px 0; */
  font-size: 20px;
}

.upto-all {
  display: flex;
  text-align: center;
  align-items: center;
  margin: none;
  padding: none;
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

a[href = ""] {
  color: black;
}

/* a:visited {
  color: inherit;
} */

</style>

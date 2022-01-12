<template>
  <div class="upto-all">
    <ul>
        <!-- I'm cheating and reusing the formatting from my WhatImUpTo component without renaming everything :-) -->
      <li v-for="upToItem in upToItems" :key="upToItem.link" class = "upto-list-item">
        <label class="upto-date">{{upToItem.date}}</label>
        <label class="category">{{upToItem.category}}</label>
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
          {date: 'Feb. 2022', category: 'Test', name: 'Test No Link'},
          {date: 'Jan. 2022', category: 'Book', name: 'The Death and Life of Great American Cities by Jane Jacobs', link: 'https://www.goodreads.com/book/show/30833.The_Death_and_Life_of_Great_American_Cities'},
          {date: 'Jan. 2022', category: 'Music', name: 'You Will Never Know Why by Sweet Trip', link: 'https://music.youtube.com/playlist?list=OLAK5uy_mibyq2bJnpGxzf66jcgVdt7Dps6tUEZn8'}
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
  padding: 0 5px;
  /* font-weight: bold; */
}

.category {
  min-width: 100px;
  padding: 0 5px;
  font-style: italic;
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

<template>
  <div class = "upto-item-filters">
    <span v-for="category in uniqueCategories" :key="category" class="upto-item-filter">
        <div class="checkbox-div">
            <input type="checkbox" :value="category" v-model="checkedCategories" :id="category">
            <label :for="category">{{category}}</label>
      </div>
  </span>
  </div>
  <div class="upto-all">
    <ul class = "upto-items">
        <!-- I'm cheating and reusing the formatting from my WhatImUpTo component without renaming everything :-) -->
      <!-- <li v-for="upToItem in upToItems" :key="upToItem.link" class = "upto-list-item"> -->
      <li v-for="upToItem in upToItemsFiltered" :key="upToItem.link" class = "upto-list-item" @mouseover="showByIndex = upToItem" @mouseout="showByIndex = null">
        <label class="upto-date">{{upToItem.date}}</label>
        <label class="category">{{upToItem.category}}</label>
        <div class="upto-item"> <!-- check if a link is there or not with css href = '' below -->
          <a :key="upToItem.link" :href="upToItem.link">
            {{upToItem.name}}
          </a>
        </div>
        <div class="child-two" v-show="showByIndex === upToItem">
            {{upToItem.description}}
        </div>
      </li>
    </ul>
  </div>

</template>

<script>

  export default {
    data() {
      return {
        showByIndex: null,
        checkedCategories: [],
        upToItems: [
          // Don't include a link field and it will show as black text rather than formatted as link
          {date: 'Feb. 2022', category: 'Test', name: 'Test No Link'},
          {date: 'Jan. 2022', category: 'Music', name: 'Ram by Paul McCartney', description: 'Maybe the first Indie album ever?', link: 'https://music.youtube.com/playlist?list=OLAK5uy_lAB-UgnvLAy8sIC2U65IX5eRSnBeNyFqU'},
          {date: 'Jan. 2022', category: 'Book', name: 'The Death and Life of Great American Cities by Jane Jacobs', description: 'A book about cities and how "urban planning" can hurt them', link: 'https://www.goodreads.com/book/show/30833.The_Death_and_Life_of_Great_American_Cities'},
          {date: 'Jan. 2022', category: 'Music', name: 'You Will Never Know Why by Sweet Trip', description: 'Shoegaze, IDM, Dream Pop. Overall ear candy!', link: 'https://music.youtube.com/playlist?list=OLAK5uy_mibyq2bJnpGxzf66jcgVdt7Dps6tUEZn8'},
          {date: 'Dec. 2021', category: 'TV', name: 'Seinfeld', description: "It's just funny!", link: 'https://www.imdb.com/title/tt0098904/'},
        ],
      }
  },
  methods: {
    // filterCategories() {
    //   console.log('test filterCategories'+this.checkedCategories);
    // }
  },
  computed: {
    upToItemsFiltered() {
      // return this.upToItems.filter(function(item) {
      //   return item.category.indexOf(item.category) >= 0;
      if (this.checkedCategories.length == 0) {
        return this.upToItems;
      }
      else {
        // return this.checkedCategories;
        return this.upToItems.filter(upToItem => this.checkedCategories.includes(upToItem.category));
      }
    //   else {
    //     return this.upToItems.filter(function(item) {
    //     return item.category.indexOf(this.checkedCategories) >= 0;
    //   })
    // }
     // return this.jobs.filter(job => this.checkedUserIds.includes(job.userId))
    },
    uniqueCategories() {
      // return [...new Set(this.upToItems.category.map(x => x.item.Name))];
      var output = [];
      var keys   = [];

      this.upToItems.forEach(function (post) {
          var key = post['category'];

          if (keys.indexOf(key) === -1) {
              keys.push(key);
              output.push(key);
          }
      });

      return output;
      // return [this.upToItems.category];
      // console.log(this.upToItems.category);
    }
  },
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

input[type="checkbox"] {
  cursor: pointer;
}


input[type="checkbox"] + label {
  cursor: pointer;
  margin-right: 5px;
  font-size: 18px;
}

input[type="checkbox"]:hover + label:hover {
  /* font-weight: bold; */
  color: gray;
  /* transition: 0.15s linear all; */
  /* font-weight: bold; */
}

input[type="checkbox"]:checked + label {
  color: green;
  font-style: italic;
  /* background-color: green; */
  /* box-shadow: 3px orange; */
  /* font-size: 100px; */
  /* margin: 100px */
}

/* input[type="checkbox"]:checked {
  opacity: 0%;
} */

.checkbox-div {
  /* background-color: orange; */
  /* border-style: solid;
  border-width: 1px; */
}

.upto-date {
  min-width: 100px;
  padding: 0 5px;
  /* font-weight: bold; */
}


.upto-item-filters {
  /* background-color: rgb(250,250,250); */
  /* border-bottom-style: solid; */
  /* border-width: 1px; */
  display: flex;
  justify-content: center;
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
  text-align: center;
}

.upto-all {
  display: flex;
  text-align:justify;
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

<!-- ~~ https://stackoverflow.com/questions/52020624/smooth-vue-collapse-transition-on-v-if Vue2 example on handling transitions with JS functions -->

<template>
  <div class = "upto-item-filters">
    <span v-for="category in uniqueCategories" :key="category+'reco'" class="upto-item-filter">
      <!-- Ok I figured out the problem that was causing duplicate filters - the label :for field needs a unique input field to attach to or else it attaches to the first -->
        <div class="checkbox-div">
            <!-- <input type="checkbox" :value="category" v-model="checkedCategories" @change="filterCategories" :id="category+'reco'"> -->
            <input type="checkbox" :value="category" v-model="checkedCategories" :id="category+'reco'">
            <label :for="category+'reco'">{{category}}</label>
      </div>
  </span>
  </div>
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
      <div v-for="upToItem in upToItems" :key="upToItem.id" class = "upto-list-item">
        <transition name="fadeQuick">
      <li v-if="upToItemsFiltered2.includes(upToItem)" :key="upToItem.id" class = "upto-list-item">
        <!-- <div v-if="upToItemsFiltered2.includes(upToItem)"> -->
        <label class="upto-date">{{upToItem.date}}</label>
        <label class="category">{{upToItem.category}}</label>
        <div class="upto-item" @mouseover="showByIndex = upToItem" @mouseout="showByIndex = null">
        <transition name="fade">
        <div class="description-hover" v-if="showByIndex === upToItem">
            <a :key="upToItem.link" :href="upToItem.link">{{upToItem.description}}</a>
        </div>
      </transition>
      <transition name="fade">
      <div class="upto-item-name" v-if="showByIndex!=upToItem">
        <a :key="upToItem.id" :href="upToItem.link">
          {{upToItem.name}}
        </a>
      </div>
    </transition>
        </div>
      </li>
    </transition>
    </div>
    </ul>
  </div>

</template>

<script>

import uniqueId from 'lodash';

  export default {
    methods: {
    //   filterCategories() {
    //   console.log(this.checkedCategories);
    // }
    },
    data() {
      return {
        showByIndex: null,
        checkedCategories: [],
        upToItems: [
          // Don't include a link field and it will show as black text rather than formatted as link
          {id: uniqueId('recom-'), date: 'Feb. 2022', category: 'Test', name: 'Test No Link'},
          {id: uniqueId('recom-'), date: 'Jan. 2022', category: 'Music', name: 'Ram by Paul McCartney', description: 'Maybe the first Indie album ever?', link: 'https://music.youtube.com/playlist?list=OLAK5uy_lAB-UgnvLAy8sIC2U65IX5eRSnBeNyFqU'},
          {id: uniqueId('recom-'), date: 'Jan. 2022', category: 'Book', name: 'The Death and Life of Great American Cities by Jane Jacobs', description: 'A book about cities and how "urban planning" can hurt them.', link: 'https://www.goodreads.com/book/show/30833.The_Death_and_Life_of_Great_American_Cities'},
          {id: uniqueId('recom-'), date: 'Jan. 2022', category: 'Music', name: 'You Will Never Know Why by Sweet Trip', description: 'Shoegaze, IDM, Dream Pop. Overall ear candy!', link: 'https://music.youtube.com/playlist?list=OLAK5uy_mibyq2bJnpGxzf66jcgVdt7Dps6tUEZn8'},
          {id: uniqueId('recom-'), date: 'Dec. 2021', category: 'TV', name: 'Seinfeld', description: "It's just funny!", link: 'https://www.imdb.com/title/tt0098904/'},
        ],
      }
  },
  computed: {
    upToItemsFiltered2() {
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

@keyframes shrink {
  to {
    transform: scale(0)
  }
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  /* height: 200px; */
  /* opacity: 0; */
}

.fadeQuick-enter-active, .fadeQuick-leave-active {
  /* animation: shrink; */
  transition: all 0.5s ease;
}

.fadeQuick-enter-from, .fadeQuick-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: rotateX(90deg);
  /* max-height: 0px;
  width: 200px; */
}

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

.upto-item {
  /* display: flex; */
}

.description-hover {
  /* transition: 1s; */
  position: absolute;
  /* bottom: 0; */
  /* right: 2vw; */
  /* font-size: 1white; */
  /* margin-left: 25vw; */
  font-style: italic;
  text-decoration: none;
  /* margin-right: */
  /* animation: ease-in 1s; */
  /* text-align: right; */
  /* margin-left:  */
  background-color: white;
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

.upto-item-filters {
  /* background-color: rgb(250,250,250); */
  /* border-bottom-style: solid; */
  /* border-width: 1px; */
  display: flex;
  justify-content: center;
}

.upto-date {
  min-width: 100px;
  padding: 0 5px;
  /* vertical-align: middle; */
  /* position: relative; */
  /* text-align: center; */
  /* font-weight: bold; */
}

.category {
  min-width: 100px;
  padding: 0 5px;
  font-style: italic;
  /* text-align: center; */
  /* font-weight: bold; */
}

.upto-list-item {
  /* margin: 4px 0; */
  font-size: 20px;
  text-align: center;
  /* vertical-align: middle; */
}

.upto-all {
  display: flex;
  text-align: center;
  align-items: center;
  margin: none;
  padding: none;
  /* text-align:justify; */
  /* vertical-align: middle; */
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

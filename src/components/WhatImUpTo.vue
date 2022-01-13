<template>
  <div class = "upto-item-filters">
    <span v-for="category in uniqueCategories2" :key="category" class="upto-item-filter">
        <div class="checkbox-div">
            <input type="checkbox" :value="category" v-model="checkedCategories2" @change="filterCategories" :id="category">
            <label :for="category">{{category}}</label>
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
      <li v-for="upToItem in upToItemsFiltered2" :key="upToItem.link" class = "upto-list-item">
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
        checkedCategories2: [],
        upToItems: [
          // Don't include a link field and it will show as black text rather than formatted as link
          {date: 'Feb. 2022', category: 'Test', name: 'Test No Link'},
          {date: 'Feb. 2022', category: 'Data', name: 'Analyzing FDA Food Data in Python', link: 'link-to-fda'},
          {date: 'Jan. 2022', category: 'Web', name: 'Practicing JavaScript, HTML, and CSS to make this website in Vue', link: 'link-to-site'},
          {date: 'Dec. 2021', category: 'Data', name: 'Coursera class on Data Science in Python', link: 'https://github.com/ImWesAdams/Coursera-Python-Data-Science'}
        ],
      }
  },
  computed: {
    upToItemsFiltered2() {
      // return this.upToItems.filter(function(item) {
      //   return item.category.indexOf(item.category) >= 0;
      if (this.checkedCategories2.length == 0) {
        return this.upToItems;
      }
      else {
        // return this.checkedCategories;
        return this.upToItems.filter(upToItem => this.checkedCategories2.includes(upToItem.category));
      }
    //   else {
    //     return this.upToItems.filter(function(item) {
    //     return item.category.indexOf(this.checkedCategories) >= 0;
    //   })
    // }
     // return this.jobs.filter(job => this.checkedUserIds.includes(job.userId))
    },
    uniqueCategories2() {
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

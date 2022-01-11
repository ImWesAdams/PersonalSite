<template>
  <div class="stack-small">
    <!-- <h1>hi</h1> -->
    <label class="upto-date">{{date}}</label>
    <div v-if="link" class="to-do-list-item to-do-list-item-with-link"> <!-- check if a link is there or not -->
      <a href={{link}} target="_blank" class = "upto-label-link" @click.prevent="$emit('item-clicked')">
      <!-- <a href={{link}} target="_blank" class = "upto-label-link"> -->
      <!-- <a href={{link}} target="_blank" class = "upto-label-link" @click.prevent="testFunc($event)"> -->
        {{label}}
      </a>
    </div>
    <div v-else class="to-do-list-item to-do-list-item-without-link">
      <a class = "upto-label-nolink">
        {{label}}
      </a>
    </div>
  </div>


</template>

<script>

  export default {
    // components: {
    //   test: 'hi',
    // },
    props: {
      label: { required: true, type: String },
      link: { required: false, type: String},
      date: {required: true, type: String},
      clicked: {required: false, type: String}
    },
    data() {
      return {
        test: 'hi',
      };
    },
    methods: {
      testFunc(asd) {
        console.log(asd.target);
      }
  },
  // computed: {
  // }
}
</script>

<style scoped>

.upto-date {
  min-width: 100px;
  /* font-weight: bold; */
}

.stack-small {
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

.to-do-list-item > a:visited {
  /* text-decoration: none; */
  /* color: #0000EE;*/
  font-size: 100px;
}

.upto-label-link:hover {
  color:royalblue;
}

/* a:visited {
  color: inherit;
} */

</style>

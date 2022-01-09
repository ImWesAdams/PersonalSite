<template>
  <div class="stack-small">
    <!-- <h1>hi</h1> -->
    <label class="upto-date">{{date}}</label>
    <div v-if="link" class="to-do-list-item to-do-list-item-with-link"> <!-- check if a link is there or not -->
      <a href={{link}} target="_blank">
        <label class="upto-label">{{label}}</label>
      </a>
    </div>
    <div v-else class="to-do-list-item to-do-list-item-without-link">
      <a>
        <label class="upto-label">{{label}}</label>
      </a>
    </div>
  </div>


</template>

<script>

  export default {
    // components: {
    // },
    props: {
      label: { required: true, type: String },
      link: { required: false, type: String},
      date: {required: true, type: String},
    },
  //   data() {
  //     return {
  //     };
  //   },
  //   methods: {
  // },
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

</style>

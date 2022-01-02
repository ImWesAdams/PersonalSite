<template>
  <div class="stack-small">
    <div v-if="link" class="to-do-list-item-with-link"> <!-- check if a link is there or not -->
      <a href={{link}} target="_blank">
        <label class="checkbox-label">{{label}}</label>
      </a>
    </div>
    <div v-else class="to-do-list-item-without-link">
      <a>
        <label class="checkbox-label">{{label}}</label>
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
      link: { required: false, type: String}
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


</style>

<template>
  <div class="hello">
    <h1>{{ header1 }}</h1>
    <h2>{{ header2 }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    header1: String,
    header2: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 0;
  padding: 0;
  text-decoration: underline;
  text-decoration-thickness: 3px;
  /* text-decoration-color: grey; */
}
h2 {
  margin: 0;
  padding: 0;
  font-size: 20px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

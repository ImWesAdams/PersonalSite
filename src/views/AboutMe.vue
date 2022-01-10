<!-- <template>
<div id="basic-event" class="demo">
  <button @click="counter += 1">Add 1</button>
  <p>The button above has been clicked {{ counter }} times.</p>
</div>
</template>
<script>
// import * as Vue from 'vue';
// Vue.createApp({

import { createApp } from "vue";
createApp({
  data() {
    return {
      counter: 0
    }
  }
}).mount('#basic-event');
</script> -->

<!-- I keep getting error "TypeError: Cannot read properties of undefined (reading '__vccOpts')" -->

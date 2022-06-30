<template>
  <div id="app">
    <Home :luo="luos" :num="nums"></Home>
  </div>
</template>

<script>
import Home from "./src/views/home.vue";
export default {
  components: {
    Home,
  },
  data() {
    return {
      luos: {
      },
      nums: [123,120],
    };
  },
};
</script>

<style>
</style>
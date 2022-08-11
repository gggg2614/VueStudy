<template>
  <div>
    <span :v-for="luo">{{ luo.name }}</span>
    <span :key="index" v-for="(item, index) in num">
      {{ index }} {{ item }}
      <div></div>
    </span>
    <input type="button" value="pop" @click="pop" />
    <input type="button" value="push" @click="pusharr" />
    <input type="button" value="splice" @click="splicearr" />
    <input type="button" value="sort" @click="sortarr" />
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    luo: Object,
    num: [Array, Number, String],
  },
  methods: {
    pop() {
      this.num.pop();
    },
    pusharr() {
      this.num.push(this.num[0]++);
    },
    splicearr() {
      this.num.splice(0, 0, 12);
    },
    sortarr() {
      this.num.sort();
    },
  },
};
</script>

<style>
</style>
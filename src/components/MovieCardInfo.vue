<template>
  <ul class="list">
    <li v-for="(el, index) in arr" :key="el" class="el">
      <span>{{ el }}{{ arr.length === index + 1 ? "" : "," }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    arr: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  list-style: none;
  display: inline-block;

  .el {
    margin-left: 3px;
    display: inline-block;
  }
}
</style>

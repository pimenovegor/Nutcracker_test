<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "@/layouts/Header.vue";

export default {
  components: { Header },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

body {
  background: #363232;
}

#app {
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.preloader {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>

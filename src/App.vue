<template>
  <Header />
  <Boards msg="Welcome to Your Vue.js App" />
  <Footer />
</template>

<script>
import Boards from "./components/Boards.vue";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

export default {
  name: "App",
  components: {
    Header,
    Boards,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

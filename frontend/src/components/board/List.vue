<template>
  <h1>List</h1>
  <p @click="getList">게시판 불러오기</p>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    getList() {
      axios
        .get("http://localhost:3000/api/board")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>

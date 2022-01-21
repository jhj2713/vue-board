<template>
  <div class="container">
    <h1>게시판 상세보기</h1>
    <div class="board-wrap">
      <table class="table-board">
        <colgroup>
          <col width="15%" />
          <col width="*" />
        </colgroup>
        <tr>
          <th>제목</th>
          <td>{{ title }}</td>
        </tr>
        <tr>
          <th>내용</th>
          <td class="content" v-html="content"></td>
        </tr>
      </table>
    </div>
    <div class="go-list-wrap">
      <p @click="goList" class="btn-go-list">목록</p>
      <p @click="deleteBoard" class="btn-delete">삭제</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      body: this.$route.query,
      title: "",
      content: "",
      view: "",
      id: this.$route.query.id,
    };
  },
  mounted() {
    this.getView();
  },
  methods: {
    getView() {
      axios
        .get("http://localhost:3000/api/board/" + this.body.id, {
          params: this.body,
        })
        .then((res) => {
          this.view = res.data.view[0];
          this.title = this.view.title;
          this.content = this.view.content.replace(/(\n)/g, "<br/>");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    goList() {
      this.$router.push("/board/list");
    },
    deleteBoard() {
      if (confirm("삭제하시겠습니까?")) {
        axios
          .delete("http://localhost:3000/api/board", { params: this.body })
          .then((res) => {
            if (res.data.result) {
              alert("삭제되었습니다");
              this.goList();
            } else {
              alert("삭제중 오류가 발생했습니다\n다시 시도해주세요");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<style>
.table-board {
  border-top: 1px solid grey;
}
.table-board th,
.table-board td {
  border-bottom: 1px solid #eee;
}
.table-board td {
  padding: 10px;
  text-align: left;
}
.table-board td.content {
  height: 300px;
  vertical-align: top;
}
.go-list-wrap {
  display: flex;
  justify-content: center;
}
.btn-go-list {
  width: 35px;
  background: #35495e;
  color: white;
  padding: 10px;
  cursor: pointer;
}
.btn-delete {
  width: 35px;
  background: red;
  color: white;
  padding: 10px;
  cursor: pointer;
  margin-left: 10px;
}
</style>

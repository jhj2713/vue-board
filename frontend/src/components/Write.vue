<template>
  <div class="container">
    <h1>게시판 등록</h1>
    <div>
      <form>
        <table class="add-table">
          <colgroup>
            <col width="15%" />
            <col width="*" />
          </colgroup>
          <tr>
            <th>제목</th>
            <td><input type="text" v-model="title" ref="title" /></td>
          </tr>
          <tr>
            <th>내용</th>
            <td><textarea v-model="content" ref="content"></textarea></td>
          </tr>
        </table>
      </form>
    </div>
    <div class="btn-wrap">
      <p @click="goList" class="btn-list">목록</p>
      <p @click="addList" class="btn-add">등록</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      board_code: "news",
      title: "",
      content: "",
      user_id: "admin",
      form: "",
    };
  },
  methods: {
    goList() {
      this.$router.push({ path: "/board/list", query: this.body });
    },
    addList() {
      if (!this.title) {
        alert("제목을 입력해주세요");
        this.$refs.title.focus();
        return;
      }
      this.form = {
        board_code: this.board_code,
        title: this.title,
        content: this.content,
        user_id: this.user_id,
      };
      axios
        .post("http://localhost:3000/api/board", this.form)
        .then((res) => {
          if (res.data.success) {
            alert("등록되었습니다");
            this.goList();
          } else {
            alert("등록에 실패했습니다\n다시 이용해주세요");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
h1 {
  color: #43b984;
}
.container {
  margin: 20px 10%;
}
.add-table {
  border-top: 1px solid grey;
}
.add-table th,
.add-table td {
  border-bottom: 1px solid #eee;
}
.add-table td {
  padding: 10px;
}
.add-table td input {
  width: 80%;
  min-height: 30px;
  padding: 0 10px;
}
.add-table td textarea {
  width: 80%;
  min-height: 300px;
  padding: 10px;
}
.btn-wrap {
  text-align: center;
  display: flex;
  justify-content: center;
}
.btn-wrap p {
  cursor: pointer;
  margin: 10px;
}
.btn-add {
  background: #43b984;
  color: white;
  padding: 10px;
}
.btn-list {
  background: #35495e;
  color: white;
  padding: 10px;
}
</style>

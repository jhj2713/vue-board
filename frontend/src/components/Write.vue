<template>
  <div class="container">
    <h1>게시판 {{ id ? "수정" : "등록" }}</h1>
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
      <p v-if="!id" @click="addList" class="btn-add">등록</p>
      <p v-else @click="modifyBoard" class="btn-add">수정</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      board_code: this.$route.query.board_code,
      title: "",
      content: "",
      user_id: "admin",
      form: "",
      body: this.$route.query,
      id: this.$route.query.id,
    };
  },
  mounted() {
    if (this.id) {
      this.getView();
    }
  },
  methods: {
    goList() {
      this.$router.push({
        path: "/board/list/" + this.board_code,
        query: this.body,
      });
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
    getView() {
      axios
        .get("http://localhost:3000/api/board/" + this.body.id, {
          params: this.body,
        })
        .then((res) => {
          this.view = res.data.view[0];
          this.title = this.view.title;
          this.content = this.view.content;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    goView() {
      this.$router.push({ path: "/board/view", query: this.body });
    },
    modifyBoard() {
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
        id: this.id,
      };
      axios
        .put("http://localhost:3000/api/board", this.form)
        .then((res) => {
          if (res.data.success) {
            alert("수정되었습니다");
            this.goView();
          } else {
            alert("실행중 오류가 발생했습니다\n다시 시도해주세요");
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

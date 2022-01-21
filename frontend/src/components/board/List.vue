<template>
  <div class="list-container">
    <h2>게시판 리스트</h2>
    <div class="search-wrap">
      <input type="text" v-model="keyword" @keyup.enter="search" />
      <p class="btn-search" @click="search">검색</p>
    </div>

    <div class="list-wrap">
      <table class="table-list">
        <colgroup>
          <col width="7%" />
          <col width="*" />
          <col width="10%" />
          <col width="15%" />
        </colgroup>
        <tr>
          <th>no</th>
          <th>제목</th>
          <th>아이디</th>
          <th>날짜</th>
        </tr>
        <tr v-for="(row, idx) in list" :key="idx">
          <td>{{ no - idx }}</td>
          <td class="title">
            <a @click="findView(`${row.id}`)">{{ row.title }}</a>
          </td>
          <td>{{ row.user_id }}</td>
          <td>{{ row.regdate.substring(0, 10) }}</td>
        </tr>
        <tr v-if="list.length == 0">
          <td colspan="4">데이터가 없습니다</td>
        </tr>
      </table>
    </div>
    <div class="pagination" v-if="paging.totalCount > 0">
      <a @click="findPage(1)" class="first">&lt;&lt;</a>
      <a
        v-if="paging.start_page > 10"
        @click="findPage(`${paging.start_page - 1}`)"
        class="prev"
        >&lt;</a
      >

      <template v-for="(n, index) in paginavigation()">
        <template v-if="paging.page == n">
          <strong :key="index">{{ n }}</strong>
        </template>
        <template v-else>
          <a @click="findPage(`${n}`)" :key="index">{{ n }}</a>
        </template>
      </template>

      <a
        v-if="paging.total_page > paging.end_page"
        @click="findPage(`${paging.end_page + 1}`)"
        class="next"
        >&gt;</a
      >
      <a @click="findPage(`${paging.total_page}`)" class="last">&gt;&gt;</a>
    </div>

    <p @click="addBoard" class="btn-go-write">등록</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      body: "",
      board_code: "news",
      list: "",
      no: "",
      paging: "",
      start_page: "",
      page: this.$route.query.page ? this.$route.query.page : 1,
      keyword: this.$route.query.keyword,
      paginavigation: function () {
        var page_number = [];
        var start_page = this.paging.start_page;
        var end_page = this.paging.end_page;
        for (var i = start_page; i <= end_page; i++) {
          page_number.push(i);
        }
        return page_number;
      },
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      this.body = {
        board_code: this.board_code,
        keyword: this.keyword,
        page: this.page,
      };
      axios
        .get("http://localhost:3000/api/board", { params: this.body })
        .then((res) => {
          if (res.data.success) {
            this.list = res.data.list;
            this.paging = res.data.paging;
            this.no =
              this.paging.totalCount - (this.paging.page - 1) * this.paging.ipp;
          } else {
            alert("페이지 불러오기에 실패했습니다");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    search() {
      this.paging.page = 1;
      this.getList();
    },
    findPage(n) {
      if (this.page != n) {
        this.page = n;
        this.getList();
      }
    },
    addBoard() {
      this.$router.push("/board/write");
    },
    findView(id) {
      this.body.id = id;
      this.$router.push({ path: "/board/view", query: this.body });
    },
  },
};
</script>

<style>
.list-container {
  margin: 20px 10%;
}
h2 {
  color: #43b984;
}
.search-wrap {
  border: 1px solid grey;
  border-radius: 5px;
  margin: 20px;
}
.search-wrap input {
  width: 50%;
  height: 30px;
  border-radius: 3px;
  margin: 20px;
}
.search-wrap .btn-search {
  display: inline-block;
}
.table-list th {
  border-top: 1px solid grey;
}
.table-list th,
.table-list td {
  border-bottom: 1px solid #eee;
  padding: 5px 0;
}
.table-list td.title {
  text-align: left;
}
.btn-search,
.btn-go-write {
  background: #35495e;
  color: white;
  padding: 10px;
  cursor: pointer;
}
.pagination {
  margin: 20px 0 0 0;
  text-align: center;
}
.pagination strong,
.pagination a {
  padding: 6px;
}
.btn-go-write {
  width: 35px;
  text-align: left;
}
</style>

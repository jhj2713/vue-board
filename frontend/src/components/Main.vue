<template>
  <div class="user-container">
    <h2>회원정보</h2>
    <div class="user-form">
      <form>
        <table class="user-table">
          <colgroup>
            <col width="40%" />
            <col width="*" />
          </colgroup>
          <tr>
            <th>아이디</th>
            <td>
              <input type="text" v-model="user_id" disabled />
            </td>
          </tr>
          <tr>
            <th>닉네임</th>
            <td>
              <input type="text" v-model="nickname" disabled />
            </td>
          </tr>
        </table>
      </form>
    </div>
    <div class="btn-wrap">
      <p @click="logout" class="btn-logout">로그아웃</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user_id: this.$store.state.user.user_id,
      nickname: this.$store.state.user.nickname,
      error_message: "",
    };
  },
  mounted() {},
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
.user-container {
  padding: 20px 25%;
}
.user-form {
  margin: 50px 20px;
}
.user-table th,
.user-table td {
  border-bottom: 1px solid #eee;
}
.user-table td {
  padding: 10px;
}
.user-table td input {
  width: 80%;
  min-height: 30px;
  padding: 0 10px;
}
.btn-logout {
  color: #43b984;
  cursor: pointer;
}
.btn-logout:hover {
  color: #35495e;
}
</style>

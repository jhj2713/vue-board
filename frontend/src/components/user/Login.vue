<template>
  <div class="login-container">
    <h2>로그인</h2>
    <div class="login-form">
      <form>
        <table class="login-table">
          <colgroup>
            <col width="40%" />
            <col width="*" />
          </colgroup>
          <tr>
            <th>아이디</th>
            <td><input type="text" v-model="title" ref="title" /></td>
          </tr>
          <tr>
            <th>비밀번호</th>
            <td><input type="password" v-model="password" ref="password" /></td>
          </tr>
        </table>
      </form>
    </div>
    <div class="btn-wrap">
      <p @click="goLogin" class="btn-login">로그인</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user_id: "",
      password: "",
    };
  },
  mounted() {},
  methods: {
    goLogin() {},
  },
};
</script>

<style>
.login-container {
  padding: 20px 25%;
}
.login-form {
  padding: 30px;
}
.login-table th,
.login-table td {
  border-bottom: 1px solid #eee;
}
.login-table td {
  padding: 10px;
}
.login-table td input {
  width: 80%;
  min-height: 30px;
  padding: 0 10px;
}
.btn-login {
  background: #35495e;
  color: white;
  padding: 10px;
}
</style>

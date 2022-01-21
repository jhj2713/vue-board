<template>
  <div class="login-container">
    <h2>회원정보</h2>
    <div class="login-form">
      <form>
        <table class="login-table">
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
};
</script>

<style>
.login-container {
  padding: 20px 25%;
}
.login-form {
  margin: 50px 20px;
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
.btn-go-signup {
  color: #43b984;
  padding: 10px;
}
.error_message {
  color: red;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
}
</style>

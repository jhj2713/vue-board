<template>
  <div class="signup-container">
    <h2>회원가입</h2>
    <div>
      <form>
        <table class="signup-table">
          <colgroup>
            <col width="40%" />
            <col width="*" />
          </colgroup>
          <tr>
            <th>아이디</th>
            <td><input type="text" v-model="title" ref="title" /></td>
          </tr>
          <tr>
            <th>닉네임</th>
            <td><input type="text" v-model="nickname" ref="nickname" /></td>
          </tr>
          <tr>
            <th>비밀번호</th>
            <td><input type="password" v-model="password" ref="password" /></td>
          </tr>
          <tr>
            <th>비밀번호 확인</th>
            <td>
              <input
                type="password"
                v-model="password_confirm"
                ref="password_confirm"
              />
            </td>
          </tr>
        </table>
      </form>
    </div>
    <div class="btn-wrap">
      <p @click="goSignup" class="btn-signup">회원가입하기</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user_id: "",
      nickname: "",
      password: "",
      password_confirm: "",
    };
  },
  mounted() {},
  methods: {
    goSignup() {},
  },
};
</script>

<style>
.signup-container {
  padding: 20px 25%;
}
.signup-table th,
.signup-table td {
  border-bottom: 1px solid #eee;
}
.signup-table td {
  padding: 10px;
}
.signup-table td input {
  width: 80%;
  min-height: 30px;
  padding: 0 10px;
}
.btn-signup {
  background: #35495e;
  color: white;
  padding: 10px;
}
</style>

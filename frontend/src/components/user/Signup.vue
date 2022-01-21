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
            <td><input type="text" v-model="user_id" ref="user_id" /></td>
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
    <div>
      <p v-if="error_message" class="error_message">{{ error_message }}</p>
    </div>
    <div class="btn-wrap">
      <p @click="goLogin" class="btn-go-login">로그인하기</p>
      <p @click="goSignup" class="btn-signup">회원가입</p>
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
      error_message: "",
    };
  },
  mounted() {},
  methods: {
    goSignup() {
      if (this.user_id < 5) {
        this.error_message = "아이디를 5자 이상 입력해주세요";
      } else if (this.nickname < 2) {
        this.error_message = "닉네임을 2자 이상 입력해주세요";
      } else if (this.password < 7) {
        this.error_message = "비밀번호를 7자 이상 입력해주세요";
      } else if (this.password != this.password_confirm) {
        this.error_message = "비밀번호가 일치하지 않습니다";
      } else {
        this.error_message = "";
        this.$router.push("/");
      }
    },
    goLogin() {
      this.$router.push("/login");
    },
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
.btn-wrap {
  margin-top: 20px;
}
.btn-signup {
  background: #35495e;
  color: white;
  padding: 10px;
}
.btn-go-login {
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

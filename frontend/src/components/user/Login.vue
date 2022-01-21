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
            <td><input type="text" v-model="user_id" ref="user_id" /></td>
          </tr>
          <tr>
            <th>비밀번호</th>
            <td><input type="password" v-model="password" ref="password" /></td>
          </tr>
        </table>
      </form>
    </div>
    <p v-if="error_message" class="error_message">{{ error_message }}</p>

    <div class="btn-wrap">
      <p @click="goSignup" class="btn-go-signup">회원가입하기</p>
      <p @click="goLogin" class="btn-login">로그인</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user_id: "",
      password: "",
      error_message: "",
    };
  },
  mounted() {},
  methods: {
    goLogin() {
      if (!this.user_id) {
        this.error_message = "아이디를 입력해주세요";
      } else if (!this.password) {
        this.error_message = "비밀번호를 입력해주세요";
      } else {
        this.error_message = "";

        this.form = {
          user_id: this.user_id,
          password: this.password,
        };
        axios
          .post("http://localhost:3000/api/user/login", this.form)
          .then((res) => {
            if (res.data.success) {
              if (res.data.login) {
                this.$router.push("/");
              } else {
                this.error_message = "일치하는 회원 정보가 없습니다";
              }
            } else {
              alert("진행중 오류가 발생했습니다\n다시 시도해주세요");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    goSignup() {
      this.$router.push("/signup");
    },
  },
};
</script>

<style>
.login-container {
  padding: 20px 25%;
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

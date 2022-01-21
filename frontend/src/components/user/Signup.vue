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
            <td>
              <input
                type="text"
                v-model="user_id"
                ref="user_id"
                @change="resetCheck"
              />
              <p class="btn-check" @click="doublecheck">중복확인</p>
            </td>
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
import axios from "axios";

export default {
  data() {
    return {
      user_id: "",
      nickname: "",
      password: "",
      password_confirm: "",
      error_message: "",
      form: "",
      checked: false,
    };
  },
  mounted() {},
  methods: {
    goSignup() {
      if (this.user_id < 5) {
        this.error_message = "아이디를 5자 이상 입력해주세요";
      } else if (!this.checked) {
        this.error_message = "아이디 중복확인을 해주세요";
      } else if (this.nickname < 2) {
        this.error_message = "닉네임을 2자 이상 입력해주세요";
      } else if (this.password < 7) {
        this.error_message = "비밀번호를 7자 이상 입력해주세요";
      } else if (this.password != this.password_confirm) {
        this.error_message = "비밀번호가 일치하지 않습니다";
      } else {
        this.form = {
          user_id: this.user_id,
          nickname: this.nickname,
          password: this.password,
        };
        axios
          .post("http://localhost:3000/api/user/signup", this.form)
          .then((res) => {
            if (res.data.success) {
              console.log(res.data);
              alert("등록되었습니다");
              this.$router.push("/");
            } else {
              alert("등록에 실패했습니다\n다시 이용해주세요");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    goLogin() {
      this.$router.push("/login");
    },
    doublecheck() {
      axios
        .get("http://localhost:3000/api/user/check", {
          params: { user_id: this.user_id },
        })
        .then((res) => {
          if (res.data.success) {
            if (res.data.user.length > 0) {
              alert("사용할 수 없는 아이디입니다\n다른 아이디를 입력해주세요");
              this.checked = false;
            } else {
              alert("사용할 수 있는 아이디입니다");
              this.checked = true;
            }
          } else {
            alert("진행중 오류가 발생했습니다\n다시 시도해주세요");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    resetCheck() {
      this.checked = false;
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
.btn-check {
  display: flex;
  color: #35495e;
  cursor: pointer;
  justify-content: flex-end;
  margin: 5px 20px 5px 0;
}
.btn-check:hover {
  color: #43b984;
}
</style>

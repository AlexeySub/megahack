<template>

      <div class="container">
        <div class="row">
          <div class="col-md-5 mx-auto">
            <h1>Форма входа</h1>

            <form>

              <div v-show="visible" class="form-group derror">
                <b>Пожалуйста исправьте указанные ошибки:</b>
                <p v-for="error in errors">{{ error }}</p>
              </div>

              <div class="form-group">
        <input v-model="login" type="text" placeholder="Имя пользователя" name="uname" required>
              </div>

              <div class="form-group">
        <input v-model="password" type="password" placeholder="Пароль" name="psw" required>
              </div>

        <button class="btn btn-secondary" @click="btnclck">Войти</button>


                <button class="btn btn-secondary" @click="btnreg">Регистрация</button>


            </form>
      </div>
        </div>
      </div>


</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
              login: "",
              password: "",
              errors: [],
              visible: false
          }
        },
      methods: {
        btnclck: function (e) {
          e.preventDefault();
          if (this.login && this.password) {
            axios.post('http://127.0.0.1:8000/auth/', {
              login: this.login,
            password: this.password})
              .then(response => {
              const auth_token = response.data.auth_token;
                console.log(auth_token);

                sessionStorage.setItem('auth_token', auth_token);

                console.log(response);
              })
              .catch(function (error) {

                console.log(error);
              });
            this.$router.push({name: "home"})

          }
          else {
            this.visible=!this.visible;
            this.errors.push('Заполните все поля!');
          }
        },

        btnreg: function () {
          this.$router.push({name: "registr"})
        }

      }
    }
</script>

<style scoped>

  .derror {
    color: brown;
  }

  .container {
    text-align: center;
    margin-top: 50px;
  }

  .btn {
    background-color: #6c757d;
    border-radius: 5px;
    color: white;
  }

  .btn-secondary:not(:disabled):not(.disabled).active, .btn-secondary:not(:disabled):not(.disabled):active, .show>.btn-secondary.dropdown-toggle {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;;

  }

</style>

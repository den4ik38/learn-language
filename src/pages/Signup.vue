<template>
  <div class="wrapper">
    <form class="auth-form">
      <div class="header">Форма регистрации</div>
      <div class="main">
        <div class="input-group">
          <label for="nickName">Придумайте ваш Никнейм</label>
          <input name="'nickName'" type="text" class="mail" placeholder="example@mail.ru">
        </div>
        <div class="input-group">
          <label for="mail">Введите ваше Имя</label>
          <input name="'mail'" type="text" class="mail" placeholder="example@mail.ru">
        </div>
        <div class="input-group">
          <label for="mail">Введите вашу почту</label>
          <input name="'mail'" type="mail" class="mail" placeholder="example@mail.ru">
        </div>
        <div class="input-group">
          <label for="password">Придумайте пароль</label>
          <input type="password" name="password" class="password" placeholder="пароль должен быть не короче 6 символов">
        </div>
        <div class="input-group">
          <label for="password">Продублируйте пароль</label>
          <input type="password" name="password" class="password" placeholder="пароль должен быть не короче 6 символов">
        </div>
        <my-button class="form__btn" @click.prevent>Регистрация</my-button>
      </div>
      <div class="footer"><router-link class="form__router-link" to="/login">Уже есть аккаунт</router-link></div>
    </form>
  </div>
</template>
<script>

export default {
}
</script>
<style scoped>
.wrapper {
  min-height: calc(100vh - 140px);
  background-color: #c0c0c0;
  padding-top: 30px;
  padding-bottom: 30px;
}
  .auth-form {
    max-width: 400px;
    min-height: 300px;
    margin: 0 auto;
    border-radius: 15px;
    box-shadow: 0 0 7px grey;
    overflow: hidden;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    background-color: white;
  }
  .header {
    color: white;
    background-color: teal;
    text-align: center;
    min-height: 30px;
    width: 100%;
    align-items: center;
    padding-top: 6px;
  }
  .main {
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 200px;
  }
  .input-group {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  .input-group label {
    margin-bottom: 10px;
  }
  .input-group input {
    height: 30px;
  }
  .form__btn {
    display: flex;
    padding: 8px 10px;
    background: none;
    border: 1px solid teal;
    margin: 10px auto;
    cursor: pointer;
    box-shadow: 0 0 5px grey;
  }
  .form__btn:hover {
    text-decoration: underline;
    box-shadow: none;
  }
  .footer {
    color: white;
    background-color: teal;
    text-align: center;
    min-height: 30px;
    padding-top: 5px;
    width: 100%;
  }
  .form__router-link:hover {
    color: white;
  }
  
</style>
<template>
  <div class="wrapper">
    <div class="footer__container">
      <div class="footer__logo-section">
        <img class="footer__logo-img" src="../../public/logotip.png" alt="">
        <span class="main-line__section-logo-span">LEARN LANGUAGE</span>
      </div>
      <div class="footer__links-section">
        <div class="footer__links-container">
          <ul class="footer__links-list">
            <div class="footer__link-item"> <a href="" class="footer__link">Главная</a> </div>
            <div class="footer__link-item"> <a href="" class="footer__link">Тесты</a> </div>
          </ul>
        </div>
        <div class="footer__links-container">
          <ul class="footer__links-list">
            <div class="footer__link-item"> <a href="" class="footer__link">Как пользоваться</a> </div>
            <div class="footer__link-item"> <a href="" class="footer__link">Учим слова</a> </div>
          </ul>
        </div>
      </div>
      <div class="footer__social-section">
        <div class="footer__social-container">
          <img src="../../public/free-icon-telegram-2111710.png" alt="" class="footer__social-icon">
          <img src="../../public/free-icon-twitter-4494465.png" alt="" class="footer__social-icon">
          <img src="../../public/free-icon-vkontakte-4494490.png" alt="" class="footer__social-icon">
          <img src="../../public/free-icon-youtube-4494467.png" alt="" class="footer__social-icon">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'my-footer'
}
</script>
<style scoped>
  .wrapper {
    border-top: 0.5px solid rgba(128, 128, 128, 0.28);
    width: 100%;
    background-color: white;
  }
  .footer__container {
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .footer__logo-section {
    display: flex;
    align-items: center;
  }
  .footer__logo-img {
    width: 150px;
    height: 150px;
  }
  .footer__links-section {
    display: flex;
    justify-content: space-around;
  }
  .footer__links-container {
    display: flex;
    align-items: center;
  }
  .footer__links-list {
    display: flex;
    flex-direction: column;
    margin: 0 20px;
  }
  .footer__link-item {
    margin-top: 20px;
  }
  .footer__link {
    text-decoration: none;
    font-size: 16px;
    color: #3b7b2b;
  }
  .footer__social-section {
    display: flex;
    align-items: center;
  }
  .footer__social-container {
    display: flex;
  }
  .footer__social-icon {
    width: 40px;
    height: 40px;
    margin: 0 10px;
  }
  @media screen and (max-width: 815px) {
    .footer__social-container {
      flex-direction: column;
    }
    .footer__social-icon {
      width: 20px;
      height: 20px;
      margin-top: 10px;
    }
    .footer__container {
      justify-content: space-around;
    }
  }
  @media screen and (max-width: 615px) {
    .footer__link-item {
      margin-top: 0;
    }
    .main-line__section-logo-span {
      max-width: 100px;
    }
    .footer__link {
      font-size: 12px;
    }
    .footer__links-list {
      margin: 5px 10px;
    }
  }
  @media screen and (max-width: 500px) {
    .footer__links-section {
      flex-direction: column;
      justify-content: center;
    }
    .footer__logo-img {
      width: 100px;
      height: 100px;
    }
  }
  @media screen and (max-width: 500px) {
    .footer__logo-section {
      flex-direction: column;
    }
    .main-line__section-logo-span {
      text-align: center;
      margin-bottom: 10px;
    }
  }
</style>
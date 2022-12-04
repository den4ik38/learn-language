<template>
  <div class="wrapper">
    <div class="screen">
      <div class="first-line">
        <div class="first-line__section"><img src="@/../public/uk.png" alt="" class="icon"> <p class="first-line__section-text">ENGLISH</p> </div>
        <hr class="separator">
        <div class="first-line__section first-line__section_all-width">
          <span v-if="!$store.state.user.isAuth">Для сохранения прогресса необходимо зарегестрироваться</span> 
          <span v-else>Да прибудет с вами сила</span> 
        </div>
        <div class="first-line__section first-line__section_green"> <router-link class="nav__link" v-if="!$store.state.user.isAuth"  to="/login">Авторизация/Регистрация</router-link> <router-link v-if="$store.state.user.isAuth" to="/user-page" class="nav__link">{{$store.state.user.nickName}}</router-link> </div>
      </div>
      <div class="main-line">
        <div class="main-line__section">
          <div class="main-line__section-logo">
            <img src="../../public/logotip.png" alt="" class="main-line__section-logotip">
            <span class="main-line__section-logo-span">LEARN LANGUAGE</span>
          </div>
          <div class="main-line__section-nav">
            <navigation/>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile">
      <div class="logo">
        <img src="../../public/logotip.png" alt="" class="mobile__logo">
        <span class="logo-name">LEARN LANGUAGE</span>
      </div>
      <div class="hamburger-menu">
        <input id="menu-toggle" type="checkbox">
        <label class='menu-button-container' for="menu-toggle">
          <div class='menu-button'></div>
        </label>
        <ul class="menu">
          <li> <router-link class="nav__link" v-if="!$store.state.user.isAuth"  to="/login">Авторизация/Регистрация</router-link> <router-link v-if="$store.state.user.isAuth" to="/user-page" class="nav__link">{{$store.state.user.nickName}}</router-link> </li>
          <li> <router-link class="mobile-link" to="/" >Главная</router-link> </li>
          <li> <router-link class="mobile-link" to="/how-to-use" >Как пользоваться</router-link> </li>
          <li> <router-link class="mobile-link" to="/learn-page" >Учить</router-link> </li>
          <li> <router-link class="mobile-link" to="/test-page" >Тесты</router-link> </li>
          <li> <router-link class="mobile-link" to="/teacher-room" >Учительская</router-link> </li>
          <li v-if="($store.state.user.role === 'admin' || $store.state.user.role === 'moderator') && $store.state.user.isAuth"> <router-link class="mobile-link" to="/admin" >Админка</router-link> </li>
        </ul>
      </div>
    </div>
  </div>
  
</template>
<script>
import Navigation from '@/components/Navigation.vue'
export default {
  components: {
    Navigation
  }
}
</script>
<style scoped>

.wrapper {
  background-color: white;
}

.mobile {
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-shadow: 3px 0 3px 6px grey;
    position: relative;
    display: none;
  }
  .logo {
    display: flex;
    align-items: center;
  }
  .mobile__logo {
    width: 60px;
    height: 60px;
  }
  .hamburger-menu {
    width: 30px;
    height: 60px;
    margin-right: 20px;
    display: flex;
    align-items: center;
  }
  .mobile-link {
    text-decoration: none;
    color: black
  }

.menu {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
  box-shadow: 0 0 8px grey;
}
.menu > li {
  margin: 0 1rem;
  overflow: hidden;
}
.menu-button-container {
  display: flex;
  height: 100%;
  width: 30px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 4;
}
#menu-toggle {
  display: none;
}
.menu-button{
  display: block;
  background-color: black;
  position: absolute;
  height: 4px;
  width: 30px;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 2px;
}
.menu-button::before{
  display: block;
  background-color: black;
  position: absolute;
  height: 4px;
  width: 30px;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 2px;
}
.menu-button::after {
  display: block;
  background-color: black;
  position: absolute;
  height: 4px;
  width: 30px;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 2px;
}
.menu-button::before {
  content: '';
  margin-top: -8px;
}
.menu-button::after {
  content: '';
  margin-top: 8px;
}
#menu-toggle:checked + .menu-button-container .menu-button::before {
  margin-top: 0px;
  transform: rotate(405deg);
}
#menu-toggle:checked + .menu-button-container .menu-button {
  background: rgba(255, 255, 255, 0);
}
#menu-toggle:checked + .menu-button-container .menu-button::after {
  margin-top: 0px;
  transform: rotate(-405deg);
}
.menu {
    position: absolute;
    top: 0;
    margin-top: 50px;
    right: 0;
    flex-direction: column;
    width: 280px;
    justify-content: center;
    align-items: center;
    z-index: 4;
  }
  #menu-toggle ~ .menu li {
    height: 0;
    margin: 0;
    padding: 0;
    border: 0;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  #menu-toggle:checked ~ .menu li {

    height: 2.5em;
    padding: 0.5em;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  .menu > li {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0.5em 0;
    width: 100%;
    color: black;
    background-color: white;
  }
  .menu > li:first-child {
    background-color: #3b7b2b;
    color: white;
  }
  .menu > li:not(:last-child) {
    border-bottom: 1px solid #444;
  }



  
  .screen {
    display: flex;
    flex-direction: column;
    box-shadow: 3px 0 3px 6px grey;
    z-index: 2;
  }
  .first-line {
    width: 100%;
    display: flex;
    vertical-align: center;
    border-bottom: 0.5px solid grey;
  }
  .first-line__section {
    padding: 10px 20px;
    text-align: center;
    width: 250px;
    display: flex;
  }
  .first-line__section_green {
    background-color: #3b7b2b;
    color: white;
    justify-content: center;
  }
  .separator {
    background-color: #acb5c0;
    border: none;
    height: 25px;
    width: 1px;
    margin: 6px 0;
  }
  .first-line__section-text {
    margin-left: 15px;
  }
  .first-line__section_all-width {
    width: calc(100% - 501px);
  }
  .nav__link {
    color: white;
    text-decoration: none;
  }
  .icon {
    width: 26px;
    height: 18px;
  }

  .main-line__section {
    width: 100%;
    display: flex;
  }
  .main-line__section-logo {
    display: flex;
    align-items: center;
    width: 250px;
    margin-left: 5%;
  }
  .main-line__section-logotip {
    width: 100px;
    height: 100px;
  }
  .main-line__section-nav {
    display: flex;
    align-items: center;
  }
  .main-line__section-logo-span {
    margin-left: 15px;
  }

  @media screen and (max-width: 1000px) {
    .screen {
      display: none;
    }
    .mobile {
      display: flex;
    }
  }
</style>
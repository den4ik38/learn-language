<template>
  <div class="nav__wrapper">
    <ul class="nav__list">
      <li class="nav__list-item"><router-link to="/" class="nav__link">
        Главная
      </router-link></li>
      <li class="nav__list-item"><router-link to="/how-to-use" class="nav__link">
        Как пользоваться
      </router-link></li>
      <li class="nav__list-item"><a @click.prevent="routerWithParam(0)" class="nav__link">
        Учить
      </a></li>
      <li class="nav__list-item"><a @click.prevent="routerWithParam(1)" class="nav__link">
        Тесты
      </a></li>
      <li v-if="checkTeacherLaw()" class="nav__list-item"><router-link to="/teacher-room" class="nav__link">
        Учительская
      </router-link></li>
      <li v-if="!$store.state.user.isAuth" class="nav__list-item"><router-link to="/login" class="nav__link">
        Авторизация
      </router-link></li>
      <li v-if="!$store.state.user.isAuth" class="nav__list-item"><router-link to="/signup" class="nav__link">
        Регистрация
      </router-link></li>
      <li v-if="($store.state.user.role === 'admin' || $store.state.user.role === 'moderator') && $store.state.user.isAuth" class="nav__list-item"><router-link to="/admin" class="nav__link">
        Админка
      </router-link></li>
      <li v-if="$store.state.user.isAuth" class="nav__list-item"><div class="user-block">
        <div class="user-photo"></div><router-link to="/user-page" class="nav__link">
        {{$store.state.user.nickName}}
      </router-link>
      </div></li>
    </ul>
  </div>
</template>

<script>

  export default {
    methods: {
      routerWithParam(param) {
        this.$store.commit('user/setActiveStep', param)
        switch(param) {
          case 0:
            this.$router.push('/learn-page')
            break;
          case 1: 
            this.$router.push('/test-page')
            break;
        }
      },
      checkTeacherLaw() {
        let i =null
        this.$store.state.user.childs.forEach((item)=>{
          if (item.confirmChild === true) {
            i += 1
          }
        })
        if (this.$store.state.user.childs && i && this.$store.state.user.isAuth) {
          return true
        } else {return false}
      }
    }
  }
</script>

<style scoped>
  .nav__wrapper {
    width: 100%;
    height: 40px;
    display: flex;
    background-color: teal;
  }
  .nav__list {
    width: 100%;
    max-width: 800px;
    margin: auto;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .nav__list-item {
    list-style: none;
  }
  .nav__link {
    text-decoration: none;
    color: white;
    cursor: pointer;
  }
  .nav__link:hover {
    text-decoration: underline;
  }
  .user-block {
    display: flex;
    align-items: center;
  }
  .user-photo {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: grey;
  }
</style>
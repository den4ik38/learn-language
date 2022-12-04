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
      <li v-if="($store.state.user.role === 'admin' || $store.state.user.role === 'moderator') && $store.state.user.isAuth" class="nav__list-item"><router-link to="/admin" class="nav__link">
        Админка
      </router-link></li>
    </ul>
  </div>
</template>

<script>
import checkChilds from '@/mixins/checkChilds'
  export default {
    mixins: [checkChilds],
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
    }
  }
</script>

<style scoped>
  .nav__wrapper {
    height: 40px;
    display: flex;
  }
  .nav__list {
    align-items: center;
    display: flex;
    flex-direction: row;
  }
  .nav__list-item {
    list-style: none;
    margin-left: 20px;
  }
  .nav__link {
    text-decoration: none;
    font-weight: bold;
    color: #3b7b2b;
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
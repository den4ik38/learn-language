<template>
  <div class="wrapper">
    <div class="left-menu">
      <div class="menu-item" @click="switchMenu" :class="{ active: isActive === 1 }">Добавить слово</div>
      <div v-if="$store.state.user.role === 'admin'" class="menu-item" @click="switchMenu" :class="{ active: isActive === 2 }">Получить пользователя/лей</div>
      <div class="menu-item" @click="switchMenu" :class="{ active: isActive === 3 }">Редактировать слово</div>
    </div>
    <div class="content">
      <add-word-form v-if="isActive === 1"/>
      <div v-if="isActive === 2 && $store.state.user.role === 'admin'" class="users">
        <div class="users__find-form">
          <select v-model="userFindOption" name="userIdOrMail" id="userIdOrMail" class="users__finf-form-select">
            <option selected disabled>Выберите формат поиска</option>
            <option value="id">поиск по id</option>
            <option value="mail">поиск по mail'у</option>
            <option value="all">Найти всех пользователей</option>
          </select>
          <input v-model="userSearchRow" type="text" :disabled="(userFindOption === 'all' || userFindOption === '')" placeholder="Веедите искомый id или mail" class="users__find-form-input">
          <button @click.stop="findUsers(userFindOption)" class="users__finf-form-btn">Найти</button>
        </div>
        <div v-for="user in users" :key="user.id" class="users__item">
          <div class="user__container">
            <div class="users__item-info">{{user.name}}</div>
            <div class="users__item-info">{{user.id}}</div>
            <div class="users__item-info">{{user.mail}}</div>
            <div class="users__item-info">{{user.nickName}}</div>
          </div>
          <div :class="{visible : !showsBlocks.includes(user.id)}" class="users__all-info">
            <user-form :user="user"/>
          </div>
          <img @click="showUserInfo(user.id), turnArrow($event)" class="users__more-arrow" src="@/../public/images/down-arrow.png" alt="">
        </div>
      </div>
      <div class="redactor" v-if="isActive === 3">
        <div class="redactor__find-word">
          <input v-model="searchRow" name="redactor-input" type="text" class="redactor__input" placeholder="Введите искомое слово">
          <button @click="searchString" :disabled="(searchRow === '')" class="redactor__find-btn">Найти</button>
        </div>
        <div v-if="redactedWords.length > 0" class="redactor__find-result">
          <div @click="edit($event)" v-for="word in redactedWords" :key="word.id" class="redactor__find-words">{{word.word}}
          </div>
        </div>
        <add-word-form v-for="edit in editedWord" :key="edit.id" :redMode="true" :worder="editedWord[0]"/>
      </div>
    </div>
  </div>
  <my-footer/>
</template>
<script>
import AddWordForm from '@/components/UI/AddWordForm.vue'
import UserForm from '@/components/UserForm.vue';
import MyFooter from '@/components/MyFooter.vue';
import {useCards} from '@/hooks/useCards'
import {useUsers} from '@/hooks/useUsers'


export default {
  components: { AddWordForm, UserForm, MyFooter },
  data() {
    return {
      isActive: 1,
    }
  },
  setup(props) {
    const {cards, searchRow, redactedWords, searchString, editedWord, edit} = useCards()
    const {users, findUsers, showUserInfo, userSearchRow, userFindOption, showsBlocks} = useUsers()
    return {
      cards,
      searchRow,
      redactedWords,
      searchString,
      editedWord,
      edit,
      users, findUsers, showUserInfo, userSearchRow, userFindOption, showsBlocks
    }
  },
  methods: {
    switchMenu(event) {
      switch(event.target.textContent) {
        case 'Добавить слово':
          this.isActive = 1
          break;
        case 'Получить пользователя/лей':
          this.isActive = 2
          break;
        case 'Редактировать слово':
          this.isActive =  3
          break;
      }
    },
    turnArrow(event) {
      event.target.classList.toggle('reverse')
    }
    
  }
}
</script>
<style scoped>
  .wrapper {
    max-width: 1000px;
    width: 100%;
    display: flex;
    margin: 0 auto;
    min-height: calc(100vh - 140px);
    padding-bottom: 20px;
  }
  .left-menu {
    min-width: 300px;
    border-right: 1px solid grey;
  }
  .menu-item {
    margin-left: 10px;
    width: calc(100% - 10px);
    text-align: center;
    padding: 8px;
    cursor: pointer;
  }
  .menu-item:hover {
    background-color: lightblue;
  }
  .active {
    background-color: lightblue;
  }
  .content {
    padding-left: 20px;
    width: 100%;
  }
  .users__find-form {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 10px 20px;
    border-bottom: 1px solid grey;
  }
  .users__finf-form-select {
    width: 150px;
  }
  .users__find-form-input {
    width: 250px;
    padding: 0 10px;
  }
  .users__finf-form-btn {
    padding: 5px 10px;
    border: 1px solid teal;
  }
  .users__item {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: rgb(238, 235, 235);
    box-shadow: 0 0 6px grey;
    margin-top: 15px;
  }
  .user__container {
    padding: 10px 20px;
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
  .users__more-arrow {
    width: 25px;
    margin: 0 auto;
    cursor: pointer;
  }
  .reverse {
    transform: rotate(180deg);
  }
  .visible {
    display: none;
  }
  .redactor__find-word {
    padding: 20px;
    border-bottom: 1px solid rgba(128, 128, 128, 0.46)
  }
  .redactor__input {
    width: 300px;
    padding: 5px 10px;
  }
  .redactor__find-btn {
    padding: 5px 10px;
    background: none;
    border: 1px solid teal;
    margin-left: 30px;
  }
  .redactor__find-result {
    padding: 20px;
    border-bottom: 1px solid rgba(128, 128, 128, 0.46);
    display: flex;
    flex-wrap: wrap;
  }
  .redactor__find-words {
    background-color: silver;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    margin-left: 10px;
    cursor: pointer;
    margin-top: 6px;
  }

</style>
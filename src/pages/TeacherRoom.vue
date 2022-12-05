<template>
  <div class="wrapper">
    <div class="header">
      <div class="header__item" @click="switchMenu" :class="{ active: isActive === 1 }">Информация об учениках</div>
      <div class="header__item" @click="switchMenu" :class="{ active: isActive === 2 }">Создать задание</div>
    </div>
    <div class="content">
      <div class="childs__list" v-if="isActive === 1">
        <div v-if="isActive === 1 && childs.length > 0" class="childs__comment">Нажмите на имя для получения полной информации</div>
        <div v-for="child in childs" :key="child.id" class="childs__item" @click="findChild(child.id)">{{child.name}} {{child.nickName}}</div>
      </div>
      <div v-for="childInfo in seenInfoChild" :key="childInfo.id" v-if="isActive === 1" class="child__info-block">
        <div class="progress-info__blocks">
          <div class="param">Время за обучением</div> <div class="value">{{msToTime(sessionAllTime)}}</div>
        </div>
        <div class="progress-info__blocks">
          <div class="param">Последнее занятие</div> <div class="value">{{msToTime(lastSession)}}</div>
        </div>
        <div class="progress-info__blocks">
          <div class="param">Изученные карточки</div> <div class="value">{{childInfo.step1.length}} карточек было изученно</div>
        </div>
        <div class="progress-info__blocks">
          <div class="param">Количество слов на 2 уровне</div> <div class="value">{{childInfo.step2.length}} слова прошли первый уровень</div>
        </div>
        <div class="progress-info__blocks">
        <div class="param">Количество слов на 3 уровне</div> <div class="value">{{childInfo.step3.length}} слова прошли второй уровень</div>
        </div>
        <div class="progress-info__blocks">
        <div class="param">Количество слов на 4 уровне</div> <div class="value">{{childInfo.step4.length}} слова прошли третий уровень</div>
        </div>
        <div class="progress-info__blocks">
          <div class="param">Количество усвоенных слов</div> <div class="value">{{childInfo.complete.length}} слов(-о/а)</div>
        </div>
        <hr>
        <div class="progress-info__blocks">
          <div class="param">Время потраченное на задание</div> <div class="value">{{childInfo.step4.length}} слова прошли третий уровень</div>
        </div>
        <div class="progress-info__blocks">
          <div class="param">На каком этапе выполнение</div> <div class="value">{{childInfo.complete.length}} слов(-о/а)</div>
        </div>
      </div>
      <div v-if="isActive === 2" class="make-exercise">
        <div class="redactor__find-word">
          <div class="redactor__title">Шаг 1. Выберите слова, которые хотите дать в качестве задания. Для поиска введите слово на английском языке, после чего нажмите кнопку "Найти"</div>
          <input v-model="searchRow" name="redactor-input" type="text" class="redactor__input" placeholder="Введите искомое слово">
          <my-button @click="searchString" class="redactor__find-btn">Найти</my-button>
        </div>
        <div v-if="redactedWords.length > 0" class="redactor__find-result">
          <div class="redactor__title">Шаг 2. Здесь будут показаны все слова, содержащие поисковую строку. При помощи клика на слово, выберите желаемое слово.</div>
          <div class="redactor__find-words-container">
            <div @click="addToExercise($event)" v-for="word in redactedWords" :key="word.id" class="redactor__find-words">{{word.word}}</div>
          </div>
        </div>
        <div v-if="wordsToExercise.length > 0" class="exercise">
          <div class="exercise__title">Следующие слова будут переданы выбранным ученикам в качестве задания:</div>
          <div class="exercise__container">
            <div v-for="word in wordsToExercise" :key="word.id" class="exercise__item">{{word.word}} <span @click="delForWordsToEx(word.id)" class="del__btn">x</span></div>
          </div>
        </div>
        <div v-if="wordsToExercise.length > 0" class="destination">
          <div class="destination__title">Выберите учеников, кто получит это задание:</div>
          <div class="childs__list">
            <div v-for="child in childs" :key="child.id" class="childs__item" @click="addToSendExerciseList(child.id)">{{child.name}} {{child.nickName}}</div>
          </div>
          <div v-if="destinations.length > 0" class="destinations__container">
            <div v-for="man in destinations" :key="man.id" class="destinations__item">{{man.name}} {{man.nickName}} <span @click="delForDestinations(man.id)" class="del__btn">х</span></div>
          </div>
        </div>
          <my-button v-if="destinations.length > 0" @click="sendExercise" class="send-btn">Отправить</my-button>
      </div>
    </div>
    <my-dialog :show="myDialogVisible" >Задание сформировано и отправлено</my-dialog>
  </div>
</template>
<script>
import MyDialog from '@/components/UI/MyDialog';
import {useCards} from '@/hooks/useCards'
import {useUsers} from '@/hooks/useUsers'

export default {
  components: {
    MyDialog,
  },
  data() {
    return {
      myDialogVisible: this.myDialogVisible,
      isActive: 1,
    }
  },
  methods: {
    switchMenu(event) {
      switch(event.target.textContent) {
        case 'Информация об учениках':
          this.isActive = 1
          break;
        case 'Создать задание':
          this.isActive = 2
          break;
      }
    },
    msToTime(duration) {
      let  seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)));
      hours = (hours < 10) ? "0" + hours : hours;
      minutes = (minutes < 10) ? "0" + minutes : minutes;
      seconds = (seconds < 10) ? "0" + seconds : seconds;
      return hours + " час(-а/ов) " + minutes + " минут(-а/ы) " + seconds + " секунд(-а/ы) "
    }
  },
  setup(props) {
    const {cards, searchRow, redactedWords, searchString, wordsToExercise, addToExercise, delForWordsToEx} = useCards()
    const { findChild, howLongLastSession, allTimeOnExercise, addToSendExerciseList, delForDestinations, sendExercise, 
      sessionAllTime, lastSession, childs, destinations, seenInfoChild, myDialogVisible} = useUsers(redactedWords, wordsToExercise)
    return {
      cards, searchRow, redactedWords, searchString, wordsToExercise, addToExercise, delForWordsToEx,
      findChild, howLongLastSession, allTimeOnExercise, addToSendExerciseList, delForDestinations, sendExercise, 
      sessionAllTime, lastSession, childs, destinations, seenInfoChild, myDialogVisible
    }
  }
}
</script>
<style scoped>

  .wrapper {
    padding-top: 30px;

  }
  .header {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
  }
  .header__item {
    width: 50%;
    padding: 10px 20px;
    cursor: pointer;
    text-align: center;
  }
  .active {
    background-color: rgba(211, 211, 211, 0.603);
    cursor: default;
  }
  .content {
    max-width: 800px;
    margin: 0 auto;
    padding: 10px 20px;
    background-color: rgba(211, 211, 211, 0.603);
  }
  .childs__list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .childs__comment {
    width: 100%;
    margin-bottom: 20px;
  }
  .childs__item {
    background-color: silver;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    margin-left: 10px;
    cursor: pointer;
  }
  .progress-info__blocks {
    display: flex;
    margin-top: 20px;
    border-bottom: 1px solid lightgray;
  }
  .param {
    width: 30%;
  }
  .value {
    padding-left: 20px;
  }
  .redactor__find-word {
    padding: 20px;
    border-bottom: 1px solid rgba(128, 128, 128, 0.46)
  }

  .redactor__title {
    margin-bottom: 20px;
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
  }
  .redactor__find-words-container {
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
  .exercise {
    padding: 20px;
    border-bottom: 1px solid lightgrey;
  }
  .exercise__title {
    margin: 10px 0;
  }
  .exercise__container {
    width: 100%;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    display: flex;
  }
  .exercise__item {
    margin-left: 10px;
  }

  .destination {
    padding: 20px;
    border-bottom: 1px solid lightgrey;
  }
  .destination__title {
    margin: 10px 0;
  }
  .destinations__container {
    width: 100%;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    margin-top: 20px;
  }
  .destinations__item {
    margin-left: 10px;
  }

.send-btn {
  padding: 5px 10px;
  background: none;
  border: 1px solid teal;
  cursor: pointer;
  box-shadow: 0 0 5px grey;
  margin-top: 15px;
  margin-left: 20px;
}
.del__btn {
  cursor: pointer;
  font-weight: bold;
}
@media screen and (max-width: 500px) {
  .param {
    font-size: 14px;
  }
  .value {
    font-size: 14px;
  }
  .redactor__find-word {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .redactor__input {
    width: 100%;
    margin: 10px auto;
  }
  .redactor__find-btn {
    margin: 10px auto;
  }
}
</style>
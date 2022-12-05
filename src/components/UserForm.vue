<template>
  <div class="wrapper">
    <h1 class="title">Информация об аккаунте {{user? user.name : $store.state.user.name}}</h1>
    <div class="info-block">
      <div class="name__block-info">Никнейм</div>
      <div class="value__block-info">{{user? user.nickName : $store.state.user.nickName}}</div>
    </div>
    <div class="info-block">
      <div class="name__block-info">Имя</div>
      <div class="value__block-info">{{user? user.name : $store.state.user.name}}</div>
    </div>
    <div class="info-block">
      <div class="name__block-info">Персональный id</div>
      <div class="value__block-info">{{user? user.id : $store.state.user.id}}</div>
    </div>
    <div class="info-block">
      <div class="name__block-info">Электронная почта</div>
      <div class="value__block-info">{{user? user.mail : $store.state.user.mail}}</div>
    </div>
    <div class="info-block">
      <div class="name__block-info">Пароль входа</div>
      <div class="value__block-info"><my-button class="change-password__btn">Изменить пароль</my-button></div>
    </div>
    <div class="info-block">
      <div class="name__block-info">Дата регистрации</div>
      <div class="value__block-info">{{user? user.registrDate : $store.state.user.registrDate}}</div>
    </div>
    <div class="info-block">
      <div class="name__block-info">Наставники</div>
      <div class="value__block-info sensei-block">
        <div v-for="sensei in $store.state.user.senseis" :key="sensei.id" class="">
          <div class="continer-for-teacher">
            <div class="request__info-block" style="font-weight:bold">{{sensei.nickName}}</div>
            <my-button v-if="!sensei.confirmSensei" @click="confirmSensei(sensei.id)" class="request__info-block-btn">подтвердить наставника</my-button>
            <my-button v-else class="request__info-block-btn">Удалить наставника</my-button>
          </div>
        </div>
      </div>
      
    </div>
    <div class="info-block">
      <div class="name__block-info">Подопечные  аккаунты</div>
      <div class="value__block-info value__block-info_flex">
        <div class="childs-container">
          <div v-for="child in $store.state.user.childs" style="display: flex; flex-direction:column" class="childs-item">
            <div class="childs-item__row" style="text-align: center; font-weight: bold;">{{child.id}}</div>
            <div class="childs-item__row" style="text-align: center; font-weight: bold;">{{child.nickName}}</div>
            <my-button v-if="child.confirmChild" class="request__info-block-btn">Отписаться от ученика</my-button>
            <my-button v-else disab="true" style="box-shadow: none;" class="request__info-block-btn">Ожидает подтверждения</my-button>
          </div>
        </div>
        <hr>
        <input type="text" class="request__info-block" placeholder="Введите id подопечного аккаунта">
        <my-button class="request__info-block-btn">Запросить подтверждение</my-button>
      </div>
    </div>
    <div class="progress-info">
      <div class="progress-info__blocks">
        <div class="param">Время за обучением</div> <div class="value">{{msToTime(sessionAllTime)}}</div>
      </div>
      <div class="progress-info__blocks">
        <div class="param">Последнее занятие</div> <div class="value">{{msToTime(lastSession)}}</div>
      </div>
      <div class="progress-info__blocks">
        <div class="param">Изученные карточки</div> <div class="value">{{$store.state.user.step1.length}} карточек было изученно</div>
      </div>
      <div class="progress-info__blocks">
        <div class="param">Количество слов на 2 уровне</div> <div class="value">{{$store.state.user.step2.length}} слова прошли первый уровень</div>
      </div>
      <div class="progress-info__blocks">
       <div class="param">Количество слов на 3 уровне</div> <div class="value">{{$store.state.user.step3.length}} слова прошли второй уровень</div>
      </div>
      <div class="progress-info__blocks">
       <div class="param">Количество слов на 4 уровне</div> <div class="value">{{$store.state.user.step4.length}} слова прошли третий уровень</div>
      </div>
      <div class="progress-info__blocks">
        <div class="param">Количество усвоенных слов</div> <div class="value">{{$store.state.user.complete.length}} слов(-о/а)</div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  props: {
    user: {
      type: Object
    }
  },
  data() {
    return {
      sessionAllTime: 0,
      lastSession: 0
    }
  },
  methods: {
    confirmSensei(id) {
      this.$store.commit('user/setConfirmSensei', id)
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
  mounted() {
    if (this.$store.state.user.session[this.$store.state.user.session.length - 1].endSession) {
      this.lastSession = this.$store.state.user.session[this.$store.state.user.session.length - 1].endSession - this.$store.state.user.session[this.$store.state.user.session.length - 1].startedSession
    } else {
      this.lastSession = this.$store.state.user.session[this.$store.state.user.session.length - 2].endSession - this.$store.state.user.session[this.$store.state.user.session.length - 2].startedSession
    }
    this.$store.state.user.session.forEach((item)=>{
      if (item.endSession){
        this.sessionAllTime += item.endSession - item.startedSession
      }
    })
  }
}
</script>
<style scoped>
  .wrapper {
    max-width: 800px;
    margin: 0 auto;
    padding: 30px 15px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 8px grey;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .title {
    font-size: 32px;
    padding-left: 10%;
  }
  .info-block {
    width: 100%;
    display: flex;
    margin: 15px auto;
    border-bottom: 1px solid lightgray;
  }
  .name__block-info {
    margin: 10px 15px;
    width: 30%;
  }
  .childs-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .childs-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: fit-content;
    align-items: center;
  }
  .value__block-info {
    margin: 10px 15px;
    display: flex;
  }
  .sensei-block {
    flex-wrap: wrap;
    justify-content: center;
  }
  .value__block-info_flex {
    display: flex;
    flex-direction: column;
  }
  .request__info-block {
    text-align: center;
    margin: 5px;
    padding: 5px 10px;
  }
  .continer-for-teacher {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .request__info-block-btn {
    padding: 5px 10px;
    margin: 5px;
    background: none;
    border: 1px solid teal;
    box-shadow: 0px 0px 5px grey;
    cursor: pointer;
  }
  .request__info-block-btn:hover {
    box-shadow: none;
    text-decoration: underline;
  }
  .progress-info {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
  .progress-info__blocks {
    display: flex;
    margin-top: 10px;
    border-bottom: 1px solid lightgray;
  }
  .change-password__btn {
    padding: 5px 10px;
    background: none;
    border: 1px solid teal;
    box-shadow: 0px 0px 5px grey;
    cursor: pointer;
  }
  .change-password__btn:hover {
    box-shadow: none;
    text-decoration: underline;
  }
  .param {
    width: 30%;
  }
  .value {
    padding-left: 20px;
  }
  
</style>
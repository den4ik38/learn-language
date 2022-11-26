<template>
  <div class="card__wrapper" v-if="card.visibility === true">
    <div class="card">
      <div class="card__header">
        <div class="notes">
        <span v-if="$store.state.user.activeStep < 3" @click="colorNotesShow" class="header__notes">Цветовые подсказки</span>
          <my-dialog v-model:show="colorNotes">
            <div class="colornotes__row">
              <div class="row__piece row__piece_color" style="background: brown"></div>
              <div class="row__piece row__piece_text"> - Человек</div>
            </div>
            <div class="colornotes__row">
              <div class="row__piece row__piece_color" style="background: violet"></div>
              <div class="row__piece row__piece_text"> - Время и числа</div>
            </div>
            <div class="colornotes__row">
              <div class="row__piece row__piece_color" style="background: darkblue"></div>
              <div class="row__piece row__piece_text"> - Глаголы и образ жизни</div>
            </div>
            <div class="colornotes__row">
              <div class="row__piece row__piece_color" style="background:lightslategrey"></div>
              <div class="row__piece row__piece_text"> - Еда</div>
            </div>
            <div class="colornotes__row">
              <div class="row__piece row__piece_color" style="background:green"></div>
              <div class="row__piece row__piece_text"> - Животные и природа</div>
            </div>
            <div class="colornotes__row">
              <div class="row__piece row__piece_color" style="background:darkred"></div>
              <div class="row__piece row__piece_text"> - События и места</div>
            </div>
            <div class="colornotes__row">
              <div class="row__piece row__piece_color" style="background:orange"></div>
              <div class="row__piece row__piece_text"> - Дом</div>
            </div>
          </my-dialog>
        <span v-if="$store.state.user.activeStep === 1" @click="belongNotesShow" class="header__notes">Подсказки выделения</span>
        <my-dialog v-model:show="belongNotes">
            <div class="colornotes__row">
              <div class="row__piece" style="text-decoration: underline; textDecorationStyle: wavy">Слово</div>
              <div class="row__piece row__piece_text"> - Прилагательное</div>
            </div>
            <div class="colornotes__row">
              <div class="row__piece" style="text-decoration: underline;t">Слово</div>
              <div class="row__piece row__piece_text"> - Существительное</div>
            </div>
            <div class="colornotes__row">
              <div class="row__piece" style="border: 1px solid; borderRadius: 5px; padding: 5px">Слово</div>
              <div class="row__piece row__piece_text"> - Местоимения</div>
            </div>
            <div class="colornotes__row">
              <div class="row__piece" style="textDecoration: underline; textDecorationStyle: double">Слово</div>
              <div class="row__piece row__piece_text"> - Глагол</div>
            </div>
            <div class="colornotes__row">
              <div class="row__piece" style="textDecoration: underline; textDecorationStyle: dotted">Слово</div>
              <div class="row__piece row__piece_text"> - Числительное</div>
            </div>
            <div class="colornotes__row">
              <div class="row__piece" style="textDecoration: underline; textDecorationStyle: dashed">Слово</div>
              <div class="row__piece row__piece_text"> - Наречие</div>
            </div>
          </my-dialog>
        </div>
        <div class="header__word" :style="checkBelongAndCategory(card)">{{card.word.toUpperCase()}}</div>
        
      </div>
      <div class="card__body">
        <div class="card__control" :class="{card__control_reverse:!showIknow}">
          <div v-if="showIknow" class="card__control_btns">
            <input ref="iknowCheck" type="checkbox" class="card__checkbox">
            <p class="card__word_text" @click="toogleCheckbox">Я знаю это слово</p>
          </div>
          <div class="card__control_btns">
              <button class="card__next" :disabled="!disabledButton" @click.stop="nextCard">Далее >></button>
          </div>
        </div>
        <div class="card__test_section">
          <div class="card__options_sections">
            <div class="card__option_container">
              <button class="card__options" :disabled="disabledButton" @click.stop="checkAnswer">{{card.variants[0].word}}</button>
              <div v-if="this.$store.state.user.activeStep !== 4" class="card__option_picture" :style="card.variants[0].image"></div>
            </div>
            <div class="card__option_container">
              <button class="card__options" :disabled="disabledButton" @click.stop="checkAnswer">{{card.variants[1].word}}</button>
              <div v-if="this.$store.state.user.activeStep !== 4" class="card__option_picture" :style="card.variants[1].image"></div>
            </div>
            <button class="show-ticket" v-if="showTicketButton" @click="showDialog">Показать правильный ответ</button>
            <div class="card__option_container">
              <button class="card__options" :disabled="disabledButton" @click.stop="checkAnswer">{{card.variants[2].word}}</button>
              <div v-if="this.$store.state.user.activeStep !== 4" class="card__option_picture" :style="card.variants[2].image"></div>
            </div>
            <div class="card__option_container">
              <button class="card__options" :disabled="disabledButton" @click.stop="checkAnswer">{{card.variants[3].word}}</button>
              <div v-if="this.$store.state.user.activeStep !== 4" class="card__option_picture" :style="card.variants[3].image"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <my-dialog v-model:show="dialogVisible">
    <ticket-item :showIknow="false" :card="card" @nextTicket="this.dialogVisible = false"/>
  </my-dialog>
</template>
<script>
import MyDialog from './MyDialog.vue'
import TicketItem from './TicketItem.vue'
export default {
  components: { MyDialog, TicketItem },
  props: {
    card: {
      type: Object,
      required: true
    },
    showIknow: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      colorNotes: false,
      belongNotes: false,
      dialogVisible: false,
      disabledButton: false,
      showTicketButton: false,
    }
  },
  methods: {
    showDialog() {
      this.dialogVisible = true
    },
    colorNotesShow(){
      this.colorNotes = true
    },
    belongNotesShow(){
      this.belongNotes = true
    },
    checkAnswer(event) {
      if (this.card.translate === event.target.textContent) {
        if(this.$refs.iknowCheck && this.$refs.iknowCheck.checked && this.$store.state.user.exercise.length<1) {
          this.$store.commit('user/acceptAnswerStep4', this.card.id)
          this.$store.commit(`user/clearAnswerFromStep${this.$store.state.user.activeStep}`, this.card.id)
        }
        if (this.$store.state.user.exercise.length < 1) {
          if (this.$store.state.user.activeStep<4) {
            this.$store.commit(`user/acceptAnswerStep${this.$store.state.user.activeStep+1}`, this.card.id)
          } else {
            if (this.$store.state.user.exam.enabled === true) {
              this.$store.commit('user/setAddExamCorrectAnswer', this.card.id)
            } else {
              this.$store.commit(`user/cardComplete`, this.card.id)
            }
          }
          if (this.$store.state.user.exam.enabled === false) {
            this.$store.commit(`user/clearAnswerFromStep${this.$store.state.user.activeStep}`, this.card.id)
          }
        }
        if (this.$store.state.user.exercise.length>0) {
          this.$emit('excerciseCounter')
        }
        event.target.classList.add('correct')
        this.disabledButton = true
        if (this.$store.state.user.exam.enabled === true) {
          this.$store.commit('user/setExamCounter')
        }
      } else {
        event.target.classList.add('incorrect')
        this.disabledButton = true
        this.showTicketButton = true
        if (this.$store.state.user.exam.enabled === true) {
          this.$store.commit('user/setExamCounter')
        }
      }
    },
    toogleCheckbox() {
      this.$refs.iknowCheck.checked = !this.$refs.iknowCheck.checked
    },
    nextCard() {
      this.disabledButton = false
      this.showTicketButton = false
      this.$store.commit('user/setUpdateLastSeen')
      this.$emit('nextCard')
    },
    checkCategory(item) {
      if (this.$store.state.user.activeStep <= 2) {
        switch(item.category) {
        case 'человек':
          return {color: 'brown'}
          break;
        case 'время и числа':
          return {color: 'violet'}
          break;
        case 'характеристики':
          return {color: 'darkgoldenrod'}
          break;
        case 'глаголы и образ жизни':
          return {color: 'darkblue'}
          break;
        case 'еда':
          return {color: 'lightslategrey'}
          break;
        case 'животные и природа':
          return {color: 'green'}
          break;
        case 'события и места':
          return {color: 'darkred'}
          break;
        case 'дом':
          return {color: 'orange'}
          break;
        default:
          return {color: 'none'}
      }
      }
    },
    checkBelong(item) {
      if (this.$store.state.user.activeStep === 1) {
        switch(item.belong) {
        case 'прилагательное':
          return {textDecoration: 'underline', textDecorationStyle: 'wavy'}
          break;
        case 'существительное':
          return {textDecoration: 'underline'}
          break;
          case 'местоимения':
          return {border: '1px solid', borderRadius: '5px', padding: '5px'}
          break;
          case 'глагол':
          return {textDecoration: 'underline',textDecorationStyle: 'double'}
          break;
          case 'числительное':
          return {textDecoration: 'underline', textDecorationStyle: 'dotted'}
          break;
          case 'наречие':
          return {textDecoration: 'underline', textDecorationStyle: 'dashed'}
          break;
        default: 
          return {textDecoration: 'none'}
      }
      }
    },
    checkBelongAndCategory(item) {
      if (this.checkBelong(item)) {
        const obj = this.checkBelong(item)
        obj.color = this.checkCategory(item).color
        return obj
      } else if (this.checkCategory(item)) {
        const obj = {}
        obj.color = this.checkCategory(item).color
        return obj
      } else {return false}
    }
  }
}
</script>
<style scoped>
  .card__wrapper {
    margin: 30px auto;
    max-width: 600px;
    display: flex;
    box-shadow: 2px 2px 8px rgba(0,0,0, 0.3);
    padding: 15px;
  }
  .card {
    width: 100%;
  }
  .card__header {
    width: 100%;
    height: 30px;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
  }

  .notes {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
  }
  .header__notes {
    cursor: pointer;
  }
  .card__body {
    width: 100%;
  }
  .card__control {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
  }
  .card__control_reverse {
    flex-direction: row-reverse;
  }
  .card__control_btns {
    display: flex;
    align-items: center;
  }
  .card__word_text {
    margin-left: 10px;
    cursor: pointer;
  }
  .card__test_section {
    width: 100%;
  }
  .card__options_sections {
    margin: auto;
    flex-wrap: wrap;
    justify-content: space-around;
    display: flex;
  }
  .card__options {
    margin: 20px auto;
    padding: 5px 30px;
    min-width: 200px;
    background-color: lightgrey;
    text-align: center;
    cursor: pointer;
    box-shadow: 2px 2px 4px rgba(0,0,0, 0.3);
  }
  .show-ticket {
    width: 80%;
    background: none;
    border: 2px solid teal;
    padding: 5px;
    margin-top: 10px;
    box-shadow: 2px 2px 4px rgba(0,0,0, 0.3);
    cursor: pointer;
  }
  .show-ticket:hover {
    box-shadow: none;
    text-decoration: underline;
  }
  .card__option_picture {
    width: 200px;
    height: 200px;
    margin: auto;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .card__options:hover {
    box-shadow: 0 0 8px rgba(0, 106, 255, 0.8);
    text-decoration: underline;
  }
  .card__next {
    background: none;
    padding: 5px 10px;
    cursor: pointer;
    box-shadow: 2px 2px 4px rgba(0,0,0, 0.3);
    border: 1px solid lightgrey;
  }
  .card__next:hover {
    box-shadow: none;
  }
  .correct {
    background: greenyellow;
  }
  .incorrect {
    background: darkred;
  }
  .colornotes__row {
    display: flex;
    justify-content: space-between;
    align-items:center;
  }
  .row__piece {
    margin-bottom: 8px;
  }
  .row__piece_color {
    width: 20px;
    height: 20px;
  }
</style>
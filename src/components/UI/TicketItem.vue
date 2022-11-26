<template>
  <div class="card__wrapper" v-if="card.visibility===true">
    <div class="card">
      <div class="card__info">
        <div class="card__info_blocks">
          <div class="card__info_container">Часть речи: </div>
          <div class="card__info_container" :style="checkBelong(card)"> {{card.belong}}</div>
        </div>
        <div class="card__info_blocks">
          <div class="card__info_container">Категория: </div>
          <div class="card__info_container" :style="checkCategory(card)"> {{card.category}}</div>
        </div>
      </div>
      <div class="card__header">
        <div class="card__essence" :style="checkBelongAndCategory(card)">{{card.word.toUpperCase()}}</div>
        <div class="card__essence" :style="checkBelongAndCategory(card)">{{card.transcrip.toUpperCase()}}</div>
        <div class="card__essence" :style="checkBelongAndCategory(card)">{{card.translate.toUpperCase()}}</div>
      </div>
      <div class="card__header">
        <div @click="showDialog" class="card_mnemo_text">Мнемотекст</div>
        <div @click="listenSound" class="card__essence card__sound">Произношение</div>
      </div>
      <div class="card__body">
        <div class="card__test_section" :style="card.picture">
        </div>
        <div class="card__control" :class="{card__control_reverse:!showIknow}">
          <div v-if="showIknow" class="card__control_btns">
            <input ref="iknowCheckBox" type="checkbox" class="card__checkbox">
            <p class="card__word_text" @click="toogleCheckbox">Я знаю это слово</p>
          </div>
          <div class="card__control_btns">
              <button class="card__next" @click="nextTicket">Запомнил >></button>
          </div>
        </div>
      </div>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <div>
        {{card.mnemoText}}
      </div>
    </my-dialog>
  </div>
</template>
<script>
import MyDialog from './MyDialog.vue'
export default {
  components: { MyDialog },
  props: {
    card: {
      type: Object,
      required: true,
    },
    showIknow: {
      type: Boolean
    }
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    checkCategory(item) {
      switch(item.category) {
        case 'человек':
          return {color: 'brown'}
          break;
        case 'время и числа':
          return {color: 'violet'}
          break;
        case 'глаголы и образ жизни':
          return {color: 'darkblue'}
          break;
        case 'еда':
          return {color: 'lightslategrey'}
          break;
        case 'характеристики':
          return {color: 'darkgoldenrod'}
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
    },
    checkBelong(item) {
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
    },
    checkBelongAndCategory(item) {
      const obj = this.checkBelong(item)
      obj.color = this.checkCategory(item).color
      return obj
    },
    nextTicket() {
      this.$emit('nextTicket')
      if (this.$store.state.user.activeStep === 0) {
      this.$store.commit('user/acceptAnswerStep1', this.card.id)
      this.$store.commit('user/setUpdateLastSeen')
      }
    },
    showDialog() {
      this.dialogVisible = true
    },
    toogleCheckbox() {
      this.$refs.iknowCheckBox.checked = !this.$refs.iknowCheckBox.checked
    },
    listenSound() {
      const audio = new Audio()
      audio.src = this.card.sound
      audio.autoplay = true
    }
  },
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
  .card__info_blocks {
    display: flex;
    justify-content: space-between;
    margin: 0 20px;
  }
  .card__info {
    display: flex;
    justify-content: space-evenly;
  }
  .card__info_container {
    font-size: 14px;
    margin: 0 5px;
    padding: 3px;
  }

  .card__essence {
    padding: 3px;
  }
  .card__header {
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
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
    cursor: pointer;
  }
  .card__word_text {
    margin-left: 10px;
  }
  .card__test_section {
    width: 100%;
    min-height: 300px;
    position: relative;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .card_mnemo_text {
    text-align: center;
    justify-content: center;
    cursor: pointer;
  }
  .card_mnemo_text:hover {
    text-decoration: underline;
  }
  .card__sound {
    cursor: pointer;
  }
  .card__sound:hover {
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
</style>

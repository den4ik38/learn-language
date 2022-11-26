<template>
  <div class="wrapper">
    <div v-if="$store.state.user.exercise.length === 0" class="btn__wrapper">
      <button @click="changeStep(1)" class="btn__wrapper_item">1 Раунд</button>
      <button :disabled="($store.state.user.step2.length < 10)" @click="changeStep(2)" class="btn__wrapper_item">2 Раунд</button>
      <button :disabled="($store.state.user.step3.length < 10)" @click="changeStep(3)" class="btn__wrapper_item">3 Раунд</button>
      <button :disabled="($store.state.user.step4.length < 10)" @click="changeStep(4)" class="btn__wrapper_item">4 Раунд</button>
      <button @click="changeStep(9)" class="btn__wrapper_item">Экзамен</button>
    </div>
    <div>
      <test-list :cards="cards" @loadMoreCards="addCards" :reloadCards="reloadCards"/>
    </div>
  </div>
  <my-footer/>
</template>

<script>
import TestList from '@/components/TestList.vue'
import MyFooter from '@/components/MyFooter.vue';

  export default {
  components: { TestList, MyFooter },
  data() {
    return {
      cards: [],
      page: 1,
      allAnswer: [],
      reloadCards: false
    }
  },
  methods: {
    pushRandomizeCaseAnswer() {
      if (this.cards) {
        this.cards.forEach((item) => {
        const obj = {}
        obj.word = item.translate
        obj.image = item.picture
        this.allAnswer.push(obj)
        }
      )
      this.cards.forEach(item => {
        const obj = {}
        obj.word = item.translate
        obj.image = item.picture
        item.variants.push(obj)
        while (item.variants.length !== 4) {
          const challendger = this.allAnswer[Math.floor(Math.random()*this.allAnswer.length)]
          if (item.variants.every(function(variant){ return variant.word !== challendger.word})){
            item.variants.push(challendger)
          }
        }
      item.variants = item.variants.sort(function(){return Math.random()-0.5})})
      }
    },
    addCards() {
      this.page +=1
      this.allAnswer = []
      this.cards.forEach(item=>{
        const obj = {}
        obj.word = item.translate
        obj.image = item.picture
        this.allAnswer.push(obj)
      })
      this.loadCards(this.page)
        this.cards = this.$store.state.cards.cards
        this.pushRandomizeCaseAnswer()
    },
    changeStep(num) {
      if (num !== 9) {
        this.$store.commit('user/setActiveStep', num)
        let arrIds = []
        switch(num) {
          case 1 :
            if (this.$store.state.user.step1.length > 0) {
              arrIds = this.$store.state.user.step1
            }
            break;
          case 2 :
            arrIds = this.$store.state.user.step2
            break;
          case 3 :
            arrIds = this.$store.state.user.step3
            break;
          case 4 :
            arrIds = this.$store.state.user.step4
            break;
        }
        if (arrIds.length < 1 && num === 1) {
          this.cards = []
          this.page = 1
          this.loadCards(this.page)
          this.cards = this.$store.state.cards.cards
          while (this.$store.state.cards.cards.length === 0 || this.$store.state.cards.cards === false) {
            this.page += 1
            this.loadCards(this.page)
            this.cards = this.$store.state.cards.cards
          }
        } else {
          this.cards = []
          this.page = 1
          this.loadCards(this.page)
          this.findCardsToStep(arrIds)
          while (this.cards.length < arrIds.length) {
              this.page++
              this.loadCards(this.page)
              this.findCardsToStep(arrIds)
          }
        }
        if (this.$store.state.cards.cards !== false) {
          this.pushRandomizeCaseAnswer()
          this.reloadCards = !this.reloadCards
        }
      } else {
        this.$store.commit('user/setActiveStep', 4)
        this.$store.commit('user/setExamEnabled', true)
        this.page = 1
        this.loadCards(this.page)
        this.cards = this.$store.state.cards.cards
        this.pushRandomizeCaseAnswer()
        this.reloadCards = !this.reloadCards
      }
    },
    findCardsToStep(arr) {
      if (this.$store.state.cards.cards) {
        this.$store.state.cards.cards.forEach(item=>{
          if (arr.includes(item.id)) {
            this.cards.push(item)
          }
          })
      }
    },
    loadCards(page) {
      if (this.$store.state.user.activeStep === 2 && this.$store.state.user.step2.length < 10) {
      this.$store.dispatch('cards/fetchCards', 999)
      } else if (this.$store.state.user.activeStep === 3 && this.$store.state.user.step3.length < 10) {
      this.$store.dispatch('cards/fetchCards', 999)
      } else if (this.$store.state.user.activeStep === 4 && this.$store.state.user.step4.length < 10 && !this.$store.state.user.exam.enabled) {
      this.$store.dispatch('cards/fetchCards', 999)
      } else {
        this.$store.dispatch('cards/fetchCards', page)
      }
      
    },
    searchExerciseCards() {
      this.$store.state.cards.cards.forEach(item=>{
          if (this.$store.state.user.exercise[0].listIds.includes(item.id)) {
            this.cards.push(item)
          }
          })
    }
  }, 
  beforeMount() {
    if (this.$store.state.user.exercise.length > 0) {
          this.loadCards(this.page)
          this.$store.commit('user/setActiveStep', this.$store.state.user.exercise[0].step)
          this.searchExerciseCards()
          while (this.cards.length < this.$store.state.user.exercise[0].listIds.length) {
            this.page++
            this.loadCards(this.page)
            this.searchExerciseCards()
          }
    } else {
        this.loadCards(this.page)
        this.cards = this.$store.state.cards.cards
      }
    this.pushRandomizeCaseAnswer()
  },
  mounted() {
    this.changeStep(1)
  }
}
</script>

<style scoped>
.wrapper {
  min-height: calc(100vh - 140px);
}
  .btn__wrapper {
    max-width: 800px;
    margin: 15px auto;
    display: flex;
    justify-content: space-evenly;
  }
  .btn__wrapper_item {
    padding: 5px 10px;
    background: none;
    border: 1px solid teal;
    margin: 0 10px;
    cursor: pointer;
    box-shadow: 0 0 6px grey;
  }
</style>
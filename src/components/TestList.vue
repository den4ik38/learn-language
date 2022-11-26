<template>
  <div v-if="lodanig" class="loading">Идет подгрузка карточек, ожидайте</div>
  <div v-if="(cards.length === 0 || !cards) && lodanig === false" class="loading">Этот раунд вновь станет доступным, когда в нем наберется не менее 10 карточек</div>
  <div>
    <test-item
    v-for="card in cards"
    :key="card.id"
    :card="card"
    :showIknow="this.$store.state.user.activeStep === 1? true:false"
    @nextCard="nextCardHandler"
    @excerciseCounter="addCorrectCounter"
    />
  </div>
  <my-dialog v-model:show="youResultVisible">
    <div class="result__container">
      <div class="result__title">Ваш результат на этом этапе</div>
      <div class="result__info">
        Правильных ответов: {{count}}
        <br>
        Неправильных ответов: {{cards.length - count}}
      </div>
      <div v-if="count !== this.$store.state.user.exercise[0].listIds.length" class="result__subtitle">Главное не сдавайтесь, у вас все получится</div>
      <div v-if="count === this.$store.state.user.exercise[0].listIds.length" class="result__subtitle">Так держать, идем на следующий уровень</div>
    </div>
  </my-dialog>
</template>
<script>
import TestItem from './UI/TestItem.vue'
import MyDialog from './UI/MyDialog.vue'

export default {
  components: { TestItem, MyDialog },
  props: {
    cards: {
      type: Array,
      required: true
    },
    reloadCards: {
      type: Boolean
    }
  },
  data() {
      return {
        youResultVisible: false,
        dialogVisible: false,
        ticketVisible: false,
        lodanig: false,
        count: 0
      }
    }, 
    methods: {
    addCorrectCounter(){
      this.count+=1
    },
    seenResultOnStep(){
      this.youResultVisible = true
    },
    nextCardHandler() {
          for (let i=0; i<=this.cards.length-1; i++) {
            if (i === this.cards.length-1) {
              if (this.$store.state.user.exercise.length > 0 && this.$store.state.user.exercise[0].step === 4 && this.count === this.$store.state.user.exercise[0].listIds.length) {
                this.$store.commit('user/exerciseToComplete', this.$store.state.user.exercise[0].listIds)
                this.$router.push('/learn-page')
              } else if (this.$store.state.user.exercise.length > 0 && this.$store.state.user.exercise[0].step < 4 && this.count === this.$store.state.user.exercise[0].listIds.length) {
                this.$store.commit('user/setExerciseStep', this.$store.state.user.exercise[0].step +1)
                this.$store.commit('user/setActiveStep', this.$store.state.user.activeStep +1)
                this.seenResultOnStep()
                setTimeout(()=>{
                  this.count = 0
                  this.cards[i].visibility = false
                  this.cards[0].visibility = true 
                  this.youResultVisible = false
                },4000)
              } else if (this.$store.state.user.exercise.length > 0) {
                this.seenResultOnStep()
                setTimeout(()=>{
                  this.count = 0
                  this.cards[i].visibility = false
                  this.cards[0].visibility = true 
                  this.youResultVisible = false
                },4000)
              }
              if (this.$store.state.user.exercise.length === 0) {
                this.$emit('loadMoreCards')
                this.lodanig = true
                setTimeout(()=>{
                  if (this.cards && this.cards.length !==0) {
                    this.cards[0].visibility = true
                    this.lodanig = false
                  } else {
                    this.lodanig = false
                  }
                }, 1000)
                return
              }
            }
            else if (this.cards[i].visibility === true) {
              this.cards[i].visibility = false
              this.cards[i+1].visibility = true
              return
            }
          }
    }
  },
  mounted() {
    if (this.cards.length > 0) {
    this.cards[0].visibility = true

    }
  },
  watch: {
    reloadCards() {
        this.cards[0].visibility = true
    }
  }
  
}
</script>
<style scoped>
  .result__title {
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
  }
  .result__info {
    text-align: center;
    font-size: 17px;
    margin-bottom: 15px;
  }
  .result__subtitle {
    font-size: 20px;
    text-align: center;
  }
  .loading {
    font-size: 21px;
    font-weight: bold;
    text-align: center;
  }
</style>
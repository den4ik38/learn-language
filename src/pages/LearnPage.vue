<template>
  <div class="wrapper">
    <ticket-list 
    :tickets="cards"
    @nextTicket="nextTicketHandler"
    :showIknow="$store.state.user.activeStep ===0"
    />
    <div v-if="this.$store.state.user.exercise.length > 0 && this.$store.state.user.exercise[0].step>0" class="message">
      У вас есть невыполненные задания.<br> Новые карточки появятся, когда задание будет выполнено.
    </div>
    <div v-if="this.$store.state.user.exercise.length < 1 && (this.$store.state.cards.cards.length === 0 || !this.$store.state.cards.cards)" class="message">
      Поздравляем!!!<br> Вы ознакомились со всеми карточками на текущий момент <br> Переходите к тестам
    </div>
  </div>
  <my-footer/>
</template>

<script>

import TicketList from '@/components/TicketList.vue'
import MyFooter from '@/components/MyFooter.vue';

  export default {
    components: {
      TicketList,
      MyFooter
    },
    data() {
      return {
        cards: [],
        page: 1
      }
    },
    methods: {
      nextTicketHandler() {
        for (let i=0; i<=this.cards.length-1; i++) {
            if (i === this.cards.length-1) {
              if (this.$store.state.user.exercise.length > 0) {
                this.$store.commit('user/setExerciseStep', 1)
                this.$store.commit('user/setActiveStep', 1)
                this.$router.push('/test-page')
              } else {
                this.page +=1
                this.$store.dispatch('cards/fetchCards', this.page)
                this.cards = this.$store.state.cards.cards
                if (this.$store.state.cards.cards === false || this.$store.state.cards.cards.length === 0) {
                  this.cards = []
                } else {
                this.cards[0].visibility = true
                }
              }

              return
            }
            if (this.cards[i].visibility === true) {
              this.cards[i].visibility = false
              this.cards[i+1].visibility = true
              return
            }
          }
      }
    },
    beforeMount() {
      this.$store.commit('user/setActiveStep', 0)
      this.$store.dispatch('cards/fetchCards', this.page)
      if (this.$store.state.user.exercise.length > 0) {
        if (this.$store.state.user.exercise[0].step > 0) {
          this.cards = []
        } else {
          this.$store.state.cards.cards.forEach(item=>{
          if (this.$store.state.user.exercise[0].listIds.includes(item.id)) {
            this.cards.push(item)
          }
        })
        }
      } else {
        this.cards = this.$store.state.cards.cards
      }
    },
    mounted() {
      if (this.cards.length > 0) {
        this.cards[0].visibility = true
      }
    }
  }
</script>


<style scoped>
.wrapper {
  min-height: calc(100vh - 140px);
}
  .message {
    margin: 20px auto;
    text-align: center;
    font-size: 20px;

  }
</style>
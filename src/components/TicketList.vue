<template>
  <div>
    <ticket-item
    v-for="ticket in tickets" :key="ticket.id"
    :card="ticket"
    :showIknow="showIknow"
    @nextTicket="nextTicket"
    />
  </div>
</template>
<script>
import TicketItem from './UI/TicketItem.vue'

export default {
  components: { TicketItem },
  props: {
    tickets: {
      type: Array,
      required: true,
    },
    showIknow: {
      type: Boolean
    }
  },
  methods: {
    nextTicket() {
      this.$emit('nextTicket')
    }
  }
}
</script>
<style>
  
</style>
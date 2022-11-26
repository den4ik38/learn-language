<template>
  <div>
    <navigation/>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation.vue'
  export default {
    components: {
      Navigation
    },
    beforeMount() {
      this.$store.dispatch('user/getUser')
    }
  }
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  scroll-behavior: smooth;
}
</style>

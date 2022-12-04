<template>
  <div class="wrapper">
    <my-header class="header"/>
    <router-view></router-view>
    <my-footer/>
  </div>
</template>

<script>
  import MyHeader from '@/components/MyHeader.vue'
  import MyFooter from '@/components/MyFooter.vue';

  export default {
    components: {
      MyHeader,
      MyFooter
    },
    methods: {
        onScrollHeader() {
          const header = document.querySelector('.header')
          let prevScroll = window.pageYOffset
          let currentScroll
          window.addEventListener('scroll', () => {
            currentScroll = window.pageYOffset
            const headerHidden = () => header.classList.contains('header_hidden')
            if (currentScroll > prevScroll && !headerHidden() && prevScroll > 150) { 
              header.classList.add('header_hidden')
            }
            if (currentScroll < prevScroll && headerHidden()) {
              header.classList.remove('header_hidden') 
            }
            prevScroll = currentScroll 
          })
        }
    },
    beforeMount() {
      this.$store.dispatch('user/getUser')
    },
    mounted() {
      this.onScrollHeader()
    }
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Comic Sans MS', cursive, sans-serif;
    scroll-behavior: smooth;
  }
  .header {
    position: sticky;
    top: 0;
    transition: 1s;
    z-index: 5;
  }
  .header_hidden {
    transform: translateY(-105%);
  }
</style>

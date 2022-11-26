<template>
  <div class="wrapper">
    <div class="meet-section">
      <div class="meet__title">
        Освойте лексический минимум в 1000 слов максимально быстро
      </div>
      <div class="meet__warning">
        Обязательно прочитайте раздел "Как пользоваться"
      </div>
    </div>
  </div>
  <my-footer/>
</template>
<script>
import MyFooter from '@/components/MyFooter.vue';

export default {
  components: {MyFooter}
}
</script>

<style scoped>
  .wrapper {
  min-height: calc(100vh - 140px);
  }
.meet-section {
  margin: 0 auto;
  background-image: url('../../public/images/meet-screen.jpg');
  width: 100%;
  max-width: 1440px;
  height: 650px;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
.meet__title {
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  color: white;
  padding-top: 30px;
}
.meet__warning {
  position: absolute;
  bottom: 5%;
  left: 2%;
  color: white;
  font-size: 24px;
}
</style>
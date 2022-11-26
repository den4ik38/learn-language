<template>
  <div class="wrapper">
    <user-form
    />
  </div>
  <my-footer/>
</template>

<script>
import UserForm from '@/components/UserForm.vue';
import MyFooter from '@/components/MyFooter.vue';

  export default {
  components: { UserForm, MyFooter }
}
</script>

<style scoped>
.wrapper {
  min-height: calc(100vh - 140px);
}
</style>

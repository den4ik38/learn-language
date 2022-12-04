<template>
  <div class="wrapper">
    <user-form
    />
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue';

  export default {
  components: { UserForm }
}
</script>

<style scoped>
.wrapper {
  min-height: calc(100vh - 140px);
}
</style>

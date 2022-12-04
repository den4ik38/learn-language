<template>
  <button :disabled="disab" :class="{button_dis: disab}" class="button">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'my-button',
  props: {
    disab: {
      type: Boolean
    }
  }
}
</script>
<style scoped>
  .button {
  text-decoration: none;
  display: inline-block;
  padding: 5px 15px;
  border-radius: 30px;
  background-image: linear-gradient(45deg, #0d3c9a 0%, #2cabb0 50%, #3b7b2b 100%);
  background-position: 100% 0;
  background-size: 200% 200%;
  font-size: 16px;
  font-weight: 300;
  color: white;
  box-shadow: 0 16px 32px 0 rgba(0, 40, 120, .35);
  transition: .5s;
  cursor: pointer;
}
.button:hover {
  box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);
  background-position: 0 0;
}
.button_dis {
  background-image: none;
  background-color: lightgrey;
  color: grey;
}
</style>
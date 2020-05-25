<template>
  <div class="container" v-if="show">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    show: Boolean,
  },
};
</script>

<style scoped lang="scss">
.container {
  position: absolute;
  top: 10vh;
  left: 0;
  z-index: 10;
  width: 85%;
  min-height: 20vh;
  margin: auto;
  background: white;
  box-shadow: 4px 3px 10px 5px rgba(0, 0, 0, 0.5);
}
</style>

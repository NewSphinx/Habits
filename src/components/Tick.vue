<template>
  <div class="container" :class="[theme ? 'tick-dark' : 'tick-light']">
    <check-icon v-if="value" />
    <x-icon v-else />
    <!-- <button @click="flipTheme">Change theme</button> -->
  </div>
</template>

<script>
import { CheckIcon, XIcon } from 'vue-feather-icons';

export default {
  data() {
    return {
      // a default value to initialize
      value: false,
      theme: true,
    };
  },
  components: {
    CheckIcon,
    XIcon,
  },
  props: ['checked'],
  watch: {
    checked() {
      if (this.checked) this.value = true;
      else this.value = false;
    },
  },
  methods: {
    flipTheme() {
      this.theme = !this.theme;
    },
  },
};
</script>

<style scoped lang="scss">
$tick-color-dark: #a2f5bf;
$tick-color-light: #1f9d55;

.container {
  border: 1px solid black;
  max-width: 25px;
  max-height: 25px;
}

.tick-dark {
  color: $tick-color-dark;
}
.tick-light {
  color: $tick-color-light;
}
</style>

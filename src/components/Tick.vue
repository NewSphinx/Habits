<template>
  <div>
    <v-btn fab small text @click="flipValue">
      <v-icon v-if="value" color="blue">done</v-icon>
      <v-icon v-else>clear</v-icon>
    </v-btn>
    <!-- <button @click="flipTheme">Change theme</button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // a default value to initialize
      value: false,
      theme: true,
    };
  },
  components: {},
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
    flipValue() {
      this.value = !this.value;
    },
  },
  created() {
    if (this.checked) this.value = true;
    else this.value = false;
  },
};
</script>

<style scoped lang="scss"></style>

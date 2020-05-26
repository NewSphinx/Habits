<template>
  <div class="mt-4 mx-2">
    <div class="question">
      <h4>{{ question }}</h4>
    </div>
    <div class="details mt-4">
      <v-btn large>
        <v-icon>cached</v-icon>
        {{ repeat }}
      </v-btn>
      <v-btn large class="ml-4">
        <v-icon>alarm</v-icon>
        {{ time }}
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: 'Did you do it?',
      repeat: 'Everyday',
      time: '08:00',
    };
  },
};
</script>

<style lang="scss" scoped></style>

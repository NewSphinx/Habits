<template>
  <div class="container">
    <div class="question">
      {{ localQuestion }}
    </div>
    <div class="details">
      <div class="repeat">
        <repeat-icon size="16" class="icon" />
        <p>
          {{ localRepeat }}
        </p>
      </div>
      <div class="time">
        <clock-icon size="16" class="icon" />
        <p>{{ localTime }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { RepeatIcon, ClockIcon } from 'vue-feather-icons';

export default {
  data() {
    return {
      localQuestion: 'Did you do this today?',
      localRepeat: 'Everyday',
      localTime: '08:00',
    };
  },
  components: {
    RepeatIcon,
    ClockIcon,
  },
  props: {
    item: {
      question: String,
      repeat: String,
      time: Date,
    },
  },
};
</script>
<style scoped lang="scss">
.container {
  padding: 10px 0 10px 5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .question {
  }
  .details {
    display: flex;
    margin-top: 10px;
    div {
      display: flex;
      margin-right: 20px;
    }
  }
}
p {
  margin: 0 0 0 10px;
}
.icon {
  margin: auto;
}
</style>

<template>
  <div class="about">
    <div class="nav">
      <chevron-left-icon @click="$router.go(-1)" />
      <h3 class="title">{{ $route.params.name }}</h3>
      <edit-icon />
      <more-vertical-icon />
    </div>
    <Question />
    <Overview />
    <Strength />
    <History />
    <Streaks />
    <Frequency />
  </div>
</template>

<script>
import { ChevronLeftIcon, EditIcon, MoreVerticalIcon } from 'vue-feather-icons';
import Question from '@/components/Question.vue';
import Overview from '@/components/Overview.vue';
import Strength from '@/components/Strength.vue';
import History from '@/components/History.vue';
import Streaks from '@/components/Streaks.vue';
import Frequency from '@/components/Frequency.vue';

export default {
  data() {
    return {};
  },
  components: {
    Question,
    Overview,
    Strength,
    History,
    Streaks,
    Frequency,
    ChevronLeftIcon,
    EditIcon,
    MoreVerticalIcon,
  },
  watch: {
    $route() {
      console.log(this.$route);
    },
  },
};
</script>

<style scoped lang="scss">
.nav {
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr;
  place-items: center;
  .title {
    justify-self: start;
    margin-left: 20px;
  }
}
</style>

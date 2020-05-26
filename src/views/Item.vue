<template>
  <div>
    <v-toolbar class="item-toolbar">
      <v-btn fab small text @click="$router.go(-1)">
        <v-icon>chevron_left</v-icon>
      </v-btn>
      <v-toolbar-title class="pl-2">
        {{ $route.params.name }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn fab text>
        <v-icon>create</v-icon>
      </v-btn>
      <v-btn fab text>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <Question />
      <Overview />
      <Strength />
      <History />
      <Streaks />
      <Frequency />
    </v-content>
  </div>
</template>

<script>
import Question from '@/components/Question.vue';
import Overview from '@/components/Overview.vue';
import Strength from '@/components/Strength.vue';
import History from '@/components/History.vue';
import Streaks from '@/components/Streaks.vue';
import Frequency from '@/components/Frequency.vue';

export default {
  components: {
    Question,
    Overview,
    Strength,
    History,
    Streaks,
    Frequency,
  },
};
</script>

<style lang="scss">
.item-toolbar {
  .v-toolbar__content {
    padding: 4px 0px;
  }
}
</style>

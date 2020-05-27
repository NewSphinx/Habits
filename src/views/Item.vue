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
      <v-btn fab text @click="showEditItemDialog = true">
        <v-icon>create</v-icon>
      </v-btn>
      <v-btn fab text @click="showExport = true">
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>

    <!-- Dialog for Edit item -->

    <v-dialog v-model="showEditItemDialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Edit Habit</v-card-title>
        <v-text-field class="mx-4" placeholder="Name"></v-text-field>
        <v-text-field class="mx-4" placeholder="Question"></v-text-field>
        <v-select
          :items="['Everyday', 'Twice a week', '5 Times a week']"
          label="Repeat"
          class="mx-4"
        ></v-select>
        <p @click="showTimePicker = true" class="mx-4">Reminder</p>
        <v-dialog v-model="showTimePicker" persistent max-width="290">
          <v-time-picker></v-time-picker>
          <v-btn color="green darken-1" @click="showTimePicker = false">Discard</v-btn>
          <v-btn class="mt-2" color="green darken-1" @click="showTimePicker = false">Save</v-btn>
        </v-dialog>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="showEditItemDialog = false">Discard</v-btn>
          <v-btn color="green darken-1" text @click="showEditItemDialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Export Option -->

    <v-dialog v-model="showExport" max-width="290">
      <v-card>
        <v-card-title class="heading">Export this data</v-card-title>
      </v-card>
    </v-dialog>

    <v-content>
      <Question />
      <Overview />
      <h4 class="title pl-3 py-2">Strength</h4>
      <Strength />
      <History />
      <Streaks />
      <h4 class="title pl-3 py-2">Frequency</h4>
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
  data() {
    return {
      showEditItemDialog: false,
      showTimePicker: false,
      showExport: false,
    };
  },
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

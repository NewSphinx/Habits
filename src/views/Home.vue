<template>
  <div>
    <!-- top bar -->

    <v-toolbar>
      <v-toolbar-title>
        <span class="cyan darken-3 white--text pa-2">Habits</span>
        <span class="ml-1" right>Tracker</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn fab small text @click="showAddItemDialog = true">
        <v-icon>add_circle_outline</v-icon>
      </v-btn>
      <v-btn fab small class="mx-4" text @click="showFilterDialog = true">
        <v-icon>filter_list</v-icon>
      </v-btn>
      <v-btn fab small text @click="showSettingsDialog = true">
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>

    <!-- Dialog for Add item -->

    <v-dialog v-model="showAddItemDialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Create Habit</v-card-title>
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
          <v-btn color="green darken-1" text @click="showAddItemDialog = false">Discard</v-btn>
          <v-btn color="green darken-1" text @click="showAddItemDialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Dialog for Filter Item -->

    <v-dialog v-model="showFilterDialog" max-width="290">
      <v-card>
        <div class="pt-4 px-4">
          <v-checkbox label="Hide archived"></v-checkbox>
        </div>
        <div class="px-4">
          <v-checkbox label="Hide completed"></v-checkbox>
        </div>
        <div class="pt-4 px-4 d-flex justify-center align-center">
          <p>Sort</p>
          <v-spacer></v-spacer>
          <v-btn fab text class="pb-4">
            <v-icon>chevron_right</v-icon>
          </v-btn>
        </div>
      </v-card>
    </v-dialog>

    <!-- Dialog for Setting -->

    <v-dialog v-model="showSettingsDialog" max-width="290">
      <v-card>
        <div class="pt-4 px-4">
          <v-switch label="Dark Mode"></v-switch>
        </div>
        <div class="px-4">
          <p>Settings</p>
        </div>
        <div class="pa-4">
          <p>About</p>
        </div>
      </v-card>
    </v-dialog>

    <!-- table items and values -->

    <v-simple-table class="mt-4" v-if="items[0]">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left" v-for="(item, index) in items[0].data" :key="index">
              {{ item.date }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.name">
            <td>
              <router-link :to="{ name: 'item', params: { name: item.name } }">
                {{ item.name }}
              </router-link>
            </td>
            <td v-for="(date, index) in item.data" :key="index" class="pa-0">
              <Tick :checked="date.value"></Tick>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import Tick from '@/components/Tick.vue';

export default {
  data() {
    return {
      showAddItemDialog: false,
      showFilterDialog: false,
      showSettingsDialog: false,
      showTimePicker: false,
    };
  },
  name: 'Home',
  components: {
    Tick,
  },
  computed: {
    items() {
      console.log(this.$store.state);
      return this.$store.state.items;
    },
  },
  // created() {
  //   this.$store.dispatch('fillTestData');
  // },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  font-weight: bold;
  color: #4aaaa8;
}
</style>

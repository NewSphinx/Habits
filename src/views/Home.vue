<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>
        <span class="cyan darken-3 white--text pa-2">Habits</span>
        <span class="ml-1" right>Tracker</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn fab small text>
        <v-icon>add_circle_outline</v-icon>
      </v-btn>
      <v-btn fab small class="mx-4" text>
        <v-icon>filter_list</v-icon>
      </v-btn>
      <v-btn fab small text>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <v-simple-table class="mt-4">
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
import { format } from 'date-fns';
import Tick from '@/components/Tick.vue';

export default {
  data() {
    return {
      items: {},
    };
  },
  name: 'Home',
  components: {
    Tick,
  },
  created() {
    const testItems = [
      {
        name: 'Coding',
        data: [
          {
            date: new Date().setDate(13),
            value: true,
          },
          {
            date: new Date().setDate(20),
            value: true,
          },
          {
            date: new Date().setDate(24),
            value: true,
          },
          {
            date: new Date().setDate(25),
            value: true,
          },
          {
            date: new Date(),
            value: true,
          },
        ],
      },
      {
        name: 'Exercise',
        data: [
          {
            date: new Date().setDate(13),
            value: true,
          },
          {
            date: new Date().setDate(14),
            value: true,
          },
          {
            date: new Date().setDate(21),
            value: true,
          },
          {
            date: new Date().setDate(25),
            value: true,
          },
          {
            date: new Date(),
            value: true,
          },
        ],
      },
    ];
    const formatedItems = testItems.map((item) => {
      const obj = item;
      if (obj.data) {
        // get the latest date first
        obj.data.sort(() => -1);
        // eslint-disable-next-line arrow-body-style
        obj.data = obj.data.map((data) => {
          return {
            // eslint-disable-next-line radix
            date: parseInt(format(data.date, 'dd')),
            value: data.value,
          };
        });
      }
      return obj;
    });
    const noEmptyCells = formatedItems.map((item) => {
      const newObj = { name: '', data: [] };
      newObj.name = item.name;
      if (item.data) {
        let currentDateItem;
        item.data.map((data) => {
          if (currentDateItem && data.date + 1 !== currentDateItem) {
            // check if latest date comes after the last one in array
            // loop through the difference of currentDateItem and data.date
            for (let i = currentDateItem - 1; i >= data.date; i -= 1) {
              if (i === data.date) {
                newObj.data.push(data);
              } else {
                newObj.data.push({
                  date: i,
                  value: false,
                });
              }
            }
          } else {
            newObj.data.push(data);
          }
          currentDateItem = data.date;
          return null;
        });
      }
      return newObj;
    });
    this.items = JSON.parse(JSON.stringify(noEmptyCells));
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  font-weight: bold;
  color: #4aaaa8;
}
</style>

<template>
  <div class="container mt-4">
    <h4 class="title">Overview</h4>
    <div class="specs">
      <div class="score">
        <div class="amount">
          <v-progress-circular :value="score" :color="up">{{ score }}</v-progress-circular>
        </div>
        <p>Score</p>
      </div>
      <div>
        <p>
          {{ monthly }}%
          <v-icon color="green" v-if="up === 'green'">arrow_drop_up</v-icon>
          <v-icon color="red" v-else>arrow_drop_down</v-icon>
        </p>
        <p class="name">Month</p>
      </div>
      <div>
        <p>
          {{ yearly }}%<v-icon color="green" v-if="up === 'green'">arrow_drop_up</v-icon>
          <v-icon color="red" v-else>arrow_drop_down</v-icon>
        </p>
        <p class="name">Year</p>
      </div>
      <div>
        <p>{{ total }}</p>
        <p class="name">Total</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import {
  // eslint-disable-next-line no-unused-vars
  getDaysInMonth,
  // eslint-disable-next-line no-unused-vars
  getDaysInYear,
  startOfYear,
  // eslint-disable-next-line no-unused-vars
  getMonth,
  isSameMonth,
  isSameYear,
  startOfMonth,
  lastDayOfMonth,
  differenceInDays,
} from 'date-fns';

export default {
  data() {
    return {
      up: 'green',
      score: 0,
      monthly: 0,
      yearly: 0,
      total: 0,
      itemIndex: null,
    };
  },
  computed: {
    ...mapGetters({
      items: 'getByIndex',
    }),
  },
  watch: {
    items() {
      const currentTime = new Date();
      const daysElapsedThisMonth = differenceInDays(currentTime, startOfMonth(currentTime));
      let completedThisMonth = 0;
      let completedPrevMonth = 0;
      let completedThisYear = 0;
      let prevMonthScore = 1;
      let totalCompleted = 0;
      // there is an edge case: on the last day of the month,
      // getMonth() - 1 could result in the same month's first date
      // ( time diff between your tz and utc) hence this weird looking solution
      const prevMonthDate = new Date(currentTime.getFullYear(), currentTime.getMonth() - 1, 15);
      const prevMonthDays = differenceInDays(
        lastDayOfMonth(prevMonthDate),
        startOfMonth(prevMonthDate),
      );
      this.items.data.map((item) => {
        if (item.value) {
          if (isSameMonth(item.date, currentTime)) {
            completedThisMonth += 1;
          }
          if (isSameMonth(item.date, prevMonthDate)) {
            completedPrevMonth += 1;
          }
          if (isSameYear(item.date, currentTime)) {
            completedThisYear += 1;
          }
          totalCompleted += 1;
        }
        return null;
      });
      if (completedPrevMonth > 0) {
        // eslint-disable-next-line operator-linebreak
        prevMonthScore =
          Math.floor((completedPrevMonth / prevMonthDays) * 100) === 0
            ? 1
            : Math.floor((completedPrevMonth / prevMonthDays) * 100);
      }
      this.score = Math.floor((completedThisMonth / daysElapsedThisMonth) * 100);
      this.monthly = Math.floor(this.score / prevMonthScore);
      this.yearly = Math.floor(
        (completedThisYear / differenceInDays(currentTime, startOfYear(currentTime))) * 100,
      );
      this.total = totalCompleted;
    },
  },
  methods: {},
  created() {},
};
</script>
<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 0 10px 10px;
  .title {
    margin: 10px 0;
  }
  .specs {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
    p {
      margin-bottom: 0;
    }
    .score {
      .amount {
        display: flex;
      }
    }
    .name {
      padding-top: 5px;
    }
  }
}
</style>

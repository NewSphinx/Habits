<template>
  <div class="container">
    <h4 class="title">History</h4>
    <div class="calendar" v-if="items">
      <!-- <div v-for="(month, index) in calendar.data" :key="index" class="month"> -->
      <!-- <div v-for="(day, index) in items" :key="index" class="day"> -->
      <div
        :class="[day.value ? 'cell filled' : 'cell empty']"
        v-for="(day, index) in localItems"
        :key="index"
        class="day"
      ></div>
      <!-- </div> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
// import { getDaysInMonth, format } from 'date-fns';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      localItems: [],
    };
  },
  computed: {
    ...mapGetters({
      items: 'getAllItems',
    }),
  },
  methods: {
    add100Dummy() {
      for (let i = 0; i < 101; i += 1) {
        this.localItems.push({
          value: false,
        });
      }
    },
  },
  mounted() {
    this.localItems = JSON.parse(JSON.stringify(this.items));
    this.add100Dummy();
    this.add100Dummy();
    this.add100Dummy();
  },
};
</script>
<style lang="scss" scoped>
.container {
  padding: 10px 0 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.calendar {
  height: 140px;
  width: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  .cell {
    height: 20px;
    width: 20px;
    border: 1px solid white;
    padding: 2px;
    font-size: 11px;
    color: white;
  }
  .cell.filled {
    background-color: rgb(117, 141, 113);
  }
  .cell.empty {
    background-color: rgb(221, 221, 221);
    color: black;
  }
}
</style>

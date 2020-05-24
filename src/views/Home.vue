<template>
  <div class="container">
    <div class="nav">
      <div class="logo">
        <h3>Habits</h3>
      </div>
      <div class="options">
        <plus-icon />
        <filter-icon />
        <more-vertical-icon />
      </div>
    </div>
    <HomeList />
  </div>
</template>

<script>
// eslint-disable-next-line
import { db, habitsCollection } from '@/firebase';
import Tick from '@/components/Tick.vue';
import HomeList from '@/components/HomeList.vue';
import { PlusIcon, MoreVerticalIcon, FilterIcon } from 'vue-feather-icons';

export default {
  name: 'Home',
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    flipCheck() {
      this.checked = !this.checked;
    },
  },
  components: {
    // eslint-disable-next-line
    Tick,
    HomeList,
    PlusIcon,
    MoreVerticalIcon,
    FilterIcon,
  },
};
</script>

<style scoped lang="scss">
.container {
  .nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    .logo {
      justify-self: start;
    }
    .options {
      justify-self: end;
      align-self: center;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      * {
        margin-left: 20px;
      }
    }
  }
}
</style>

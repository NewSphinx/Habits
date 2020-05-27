<template>
  <div class="container">
    <h4 class="title">Best Streaks</h4>
    <div class="streak-container">
      <div
        class="streak"
        v-for="item in set"
        :key="item.value"
        :style="createWidthString(item.width * 6)"
      >
        {{ item.value }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      set: [
        {
          value: 12,
          width: 3,
        },
        {
          value: 7,
          width: 2,
        },
        {
          value: 15,
          width: 4,
        },
      ],
    };
  },
  methods: {
    createWidthString(width) {
      return `width: ${width}0px`;
    },
  },
  created() {},
};
</script>

<style scoped lang="scss">
.container {
  padding: 10px 0 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .streak-container {
    min-height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    .streak {
      border-top: 1px solid white;
      text-align: center;
      height: 20px;
      background-color: rgb(194, 156, 156);
    }
  }
}
</style>

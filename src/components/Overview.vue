<template>
  <div class="container mt-4">
    <h4 class="title">Overview</h4>
    <div class="specs">
      <v-progress-circular :value="20"></v-progress-circular>
      <div>
        <p>20%</p>
        <p>Month</p>
      </div>
      <div>
        <p>12%</p>
        <p>Year</p>
      </div>
      <div>
        <p>10</p>
        <p>Total</p>
      </div>
    </div>
  </div>
</template>

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
  }
}
</style>

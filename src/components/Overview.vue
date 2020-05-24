<template>
  <div class="container">
    <h4 class="title">Overview</h4>
    <div class="specs">
      <div>strength</div>
      <div>Score</div>
      <div>Month</div>
      <div>Year</div>
      <div>Total</div>
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
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>

<template>
  <div class="list">
    <div class="names">
      <p v-for="item in items" :key="item">
        <router-link :to="{ name: 'Item', params: { name: item } }">{{ item }}</router-link>
      </p>
    </div>
    <div class="Dates"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ['Coding', 'Exercise'],
    };
  },
};
</script>
<style scoped lang="scss">
.list {
  min-height: 50vh;
  display: grid;
  grid-template-columns: 1fr 3fr;

  .names {
    display: flex;
    flex-direction: column;
    margin: 20px 0 0 10px;
    align-items: start;
    p {
      margin-bottom: 0;
      a {
        font-weight: bold;
        color: #20504f;
        text-decoration: none;
        margin-bottom: 10px;
      }
    }
  }

  .dates {
  }
}
</style>

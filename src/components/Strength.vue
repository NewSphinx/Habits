<script>
import { Line } from 'vue-chartjs';

export default {
  data() {
    return {};
  },
  extends: Line,
  mounted() {
    const options = {
      responsive: true,
      maintainAspectRatio: false,
    };
    const data = {
      labels: ['May-4', 'May-3', 'May-2', 'May-1', 'April-4', 'April-3'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          borderColor: '#64c9c9',
          fill: 'none',
          data: [40, 20, 60, 2, 1, 12],
        },
      ],
    };
    this.renderChart(data, options);
  },
  computed: {
    items() {
      return this.$store.state.items[0].data;
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  padding: 10px 0 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .chart {
    height: 20vh;
    width: 100%;
  }
}
</style>

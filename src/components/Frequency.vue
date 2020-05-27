<script>
import { Bubble } from 'vue-chartjs';

export default {
  data() {
    return {};
  },
  extends: Bubble,
  mounted() {
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
    };
    const data = {
      datasets: [
        {
          label: 'monday',
          data: [{ x: 5, y: 5.5, r: 4 }],
          backgroundColor: '#ff6384',
          hoverBackgroundColor: '#ff6384',
        },
        {
          label: 'monday',
          data: [{ x: 11, y: 2.5, r: 8 }],
          backgroundColor: '#ff6384',
          hoverBackgroundColor: '#ff6384',
        },
        {
          label: '',
          data: [{ x: 20, y: 7, r: 1 }],
          hoverBackgroundColor: '#FFF',
        },
        {
          label: '',
          data: [{ x: 0, y: 0, r: 1 }],
          hoverBackgroundColor: '#FFF',
        },
      ],
    };
    this.renderChart(data, options);
  },
  // computed: {
  //   items() {
  //     return this.$store.state.items[0].data;
  //   },
  // },
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

<script>
import { Line } from 'vue-chartjs';
import { mapGetters } from 'vuex';

import { endOfWeek, isSameDay, subWeeks, getDate, getMonth, format } from 'date-fns';

export default {
  data() {
    return {
      labels: [],
      data: [],
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                suggestedMin: 0,
                suggestedMax: 100,
              },
            },
          ],
        },
        layout: {
          padding: {
            top: 50,
            bottom: 20,
          },
        },
      },
    };
  },
  extends: Line,
  computed: {
    ...mapGetters({
      items: 'getByIndex',
    }),
  },
  methods: {
    makeChart() {
      const weeks = [];
      const dataList = [];
      let currentEndOfWeek = null;
      let currentCount = 0;
      this.labels = [];
      this.data = [];

      this.items.data.map((item) => {
        // Populate the data into EndOfWeeks and NoOfCompleted arrays
        if (currentEndOfWeek) {
          if (isSameDay(endOfWeek(item.date), currentEndOfWeek)) {
            if (item.value) {
              currentCount += 1;
            }
          } else {
            weeks.push(currentEndOfWeek);
            dataList.push(currentCount);
            currentCount = 0;
            currentEndOfWeek = endOfWeek(item.date);
            if (item.value) currentCount += 1;
          }
        } else {
          currentEndOfWeek = endOfWeek(item.date);
          if (item.value) currentCount += 1;
        }
        return null;
      });

      if (weeks.length < 16) {
        // Fill empty values for atmost 16 prev weeks that have no data
        const len = weeks.length;
        let lastEndOfWeek = weeks[weeks.length - 1];
        for (let i = 0; i < 16 - len; i += 1) {
          lastEndOfWeek = subWeeks(lastEndOfWeek, 1);
          weeks.push(lastEndOfWeek);
          dataList.push(0);
        }
      }
      dataList.reverse().map((item) => this.data.push(Math.floor((item / 7) * 100)));
      let currentMonth = null;
      weeks.reverse().map((item) => {
        // This helps populate the array with month names when they change otherwise dates
        if (currentMonth) {
          if (currentMonth !== getMonth(item)) {
            currentMonth = getMonth(item);
            this.labels.push(String(format(item, 'MMM yyyy')));
          } else {
            this.labels.push(String(format(item, 'dd MMM yyyy')));
          }
        } else {
          currentMonth = getMonth(item);
          this.labels.push(String(getDate(item)));
        }
        return null;
      });

      const data = {
        labels: this.labels,
        datasets: [
          {
            label: 'percentage completed this week',
            backgroundColor: '#f87979',
            borderColor: '#64c9c9',
            fill: 'none',
            data: this.data,
          },
        ],
      };
      this.renderChart(data, this.options);
    },
  },
  watch: {
    items() {
      this.makeChart();
    },
  },
  mounted() {
    if (this.items) this.makeChart();
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

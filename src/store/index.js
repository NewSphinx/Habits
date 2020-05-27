import Vue from 'vue';
import Vuex from 'vuex';
// import { format } from 'date-fns';

Vue.use(Vuex);
const testItems = [
  {
    name: 'Coding',
    data: [
      {
        date: 27,
        value: true,
      },
      {
        date: 26,
        value: false,
      },
      {
        date: 25,
        value: true,
      },
      {
        date: 24,
        value: true,
      },
      {
        date: 23,
        value: false,
      },
      {
        date: 22,
        value: false,
      },
      {
        date: 21,
        value: false,
      },
      {
        date: 20,
        value: true,
      },
      {
        date: 19,
        value: false,
      },
      {
        date: 18,
        value: false,
      },
      {
        date: 17,
        value: false,
      },
      {
        date: 16,
        value: false,
      },
      {
        date: 15,
        value: false,
      },
      {
        date: 14,
        value: false,
      },
      {
        date: 13,
        value: true,
      },
    ],
  },
  {
    name: 'Exercise',
    data: [
      {
        date: 27,
        value: true,
      },
      {
        date: 26,
        value: false,
      },
      {
        date: 25,
        value: true,
      },
      {
        date: 24,
        value: false,
      },
      {
        date: 23,
        value: false,
      },
      {
        date: 22,
        value: false,
      },
      {
        date: 21,
        value: true,
      },
      {
        date: 20,
        value: false,
      },
      {
        date: 19,
        value: false,
      },
      {
        date: 18,
        value: false,
      },
      {
        date: 17,
        value: false,
      },
      {
        date: 16,
        value: false,
      },
      {
        date: 15,
        value: false,
      },
      {
        date: 14,
        value: true,
      },
      {
        date: 13,
        value: true,
      },
    ],
  },
];
export default new Vuex.Store({
  state: {
    items: testItems,
  },
  mutations: {
    // cleanData(state) {
    //   const formatedItems = testItems.map((item) => {
    //     const obj = item;
    //     if (obj.data) {
    //       // get the latest date first
    //       obj.data.sort(() => -1);
    //       // eslint-disable-next-line arrow-body-style
    //       obj.data = obj.data.map((data) => {
    //         return {
    //           // eslint-disable-next-line radix
    //           date: parseInt(format(data.date, 'dd')),
    //           value: data.value,
    //         };
    //       });
    //     }
    //     return obj;
    //   });
    //   const noEmptyCells = formatedItems.map((item) => {
    //     const newObj = { name: '', data: [] };
    //     newObj.name = item.name;
    //     if (item.data) {
    //       let currentDateItem;
    //       item.data.map((data) => {
    //         if (currentDateItem && data.date + 1 !== currentDateItem) {
    //           // check if latest date comes after the last one in array
    //           // loop through the difference of currentDateItem and data.date
    //           for (let i = currentDateItem - 1; i >= data.date; i -= 1) {
    //             if (i === data.date) {
    //               newObj.data.push(data);
    //             } else {
    //               newObj.data.push({
    //                 date: i,
    //                 value: false,
    //               });
    //             }
    //           }
    //         } else {
    //           newObj.data.push(data);
    //         }
    //         currentDateItem = data.date;
    //         return null;
    //       });
    //     }
    //     return newObj;
    //   });
    //   console.log(noEmptyCells);
    //   state.items = JSON.parse(JSON.stringify(noEmptyCells));
    // },
  },
  actions: {
    // fillTestData({ commit }) {
    //   commit('cleanData');
    // },
  },
  modules: {},
});

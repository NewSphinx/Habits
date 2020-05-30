import Vue from 'vue';
import Vuex from 'vuex';
// import { format } from 'date-fns';

Vue.use(Vuex);
const testItems = [
  {
    name: 'Coding',
    data: [
      {
        date: new Date('March 17, 2020'),
        value: true,
      },
      {
        date: new Date().setDate(26),
        value: false,
      },
      {
        date: new Date().setDate(25),
        value: true,
      },
      {
        date: new Date().setDate(24),
        value: true,
      },
      {
        date: new Date().setDate(23),
        value: false,
      },
      {
        date: new Date().setDate(22),
        value: false,
      },
      {
        date: new Date().setDate(21),
        value: false,
      },
      {
        date: new Date().setDate(20),
        value: true,
      },
      {
        date: new Date().setDate(19),
        value: false,
      },
      {
        date: new Date().setDate(18),
        value: false,
      },
      {
        date: new Date().setDate(17),
        value: false,
      },
      {
        date: new Date().setDate(16),
        value: false,
      },
      {
        date: new Date().setDate(15),
        value: false,
      },
      {
        date: new Date().setDate(14),
        value: false,
      },
      {
        date: new Date().setDate(13),
        value: true,
      },
    ],
  },
  {
    name: 'Exercise',
    data: [
      {
        date: new Date().setDate(27),
        value: true,
      },
      {
        date: new Date().setDate(26),
        value: false,
      },
      {
        date: new Date().setDate(25),
        value: true,
      },
      {
        date: new Date().setDate(24),
        value: true,
      },
      {
        date: new Date().setDate(23),
        value: false,
      },
      {
        date: new Date().setDate(22),
        value: false,
      },
      {
        date: new Date().setDate(21),
        value: false,
      },
      {
        date: new Date().setDate(20),
        value: true,
      },
      {
        date: new Date().setDate(19),
        value: false,
      },
      {
        date: new Date().setDate(18),
        value: false,
      },
      {
        date: new Date().setDate(17),
        value: false,
      },
      {
        date: new Date().setDate(16),
        value: false,
      },
      {
        date: new Date().setDate(15),
        value: false,
      },
      {
        date: new Date().setDate(14),
        value: false,
      },
      {
        date: new Date().setDate(13),
        value: true,
      },
    ],
  },
];
export default new Vuex.Store({
  state: {
    items: testItems,
    selectedIndex: null,
  },
  mutations: {
    setSelectedIndex(state, payload) {
      state.selectedIndex = payload;
    },
  },
  actions: {
    setSelectedIndex({ commit }, payload) {
      commit('setSelectedIndex', payload);
    },
  },
  getters: {
    getAllItems: (state) => state.items,
    getByIndex: (state) => state.items[state.selectedIndex],
  },
  modules: {},
});

// fillTestData({ commit }) {
//   commit('cleanData');
// },

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

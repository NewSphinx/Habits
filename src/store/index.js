import Vue from 'vue';
import Vuex from 'vuex';
import { cloneDeep } from 'lodash';

Vue.use(Vuex);
const testItems = [
  {
    name: 'Coding',
    data: [
      {
        date: new Date().setMonth(2),
        value: true,
      },
      {
        date: new Date().setMonth(3),
        value: false,
      },
      {
        date: new Date().setMonth(0),
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
    getByIndex: (state) => {
      if (!state.selectedIndex) {
        const newArr = cloneDeep(state.items[state.selectedIndex]);
        newArr.data.sort((a, b) => {
          if (a.date > b.date) return -1;
          return 1;
        });
        return newArr;
      }
      return state.items[0];
    },
  },
});

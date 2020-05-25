import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: 'id',
    darkTheme: true,
    data: {},
  },
  mutations: {
    flipDarkTheme() {
      this.state.darkTheme = !this.state.darkTheme;
      if (this.state.darkTheme) {
        // out app in larger screens doesn't cover the entire width
        document.getElementsByTagName('body')[0].className = 'bg-black';
      } else {
        document.getElementsByTagName('body')[0].className = '';
      }
    },
  },
  actions: {},
  modules: {},
});

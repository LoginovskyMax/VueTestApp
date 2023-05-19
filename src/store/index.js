import { createStore } from 'vuex';

export default createStore({
  state: {
    clickedCategoryId: 0,
    clickedSecondCategoryId: 0,
    clickedThirdCategoryId: 0,
  },
  getters: {

  },
  mutations: {
    setId(state, id) {
      state.clickedCategoryId = id;
    },
    setIdSecond(state, id) {
      state.clickedSecondCategoryId = id;
    },
    setIdThird(state, id) {
      state.clickedThirdCategoryId = id;
    },
  },
  actions: {
  },
  modules: {
  },
});

import service from "../services/service";

const state = {
  colors: [],
  drinks: []
};

const getters = {
  colors(state) {
    return state.colors;
  },
  colorsCategory(state) {
    return state.colors.filter(color => color.category === "hue");
  },
  drinks(state) {
    return state.drinks;
  }
};

const mutations = {
  setColor(state, colors) {
    state.colors = colors;
  },
  setDrinks(state, drink) {
    state.drinks = drink;
  }
};

const actions = {
  fetchColors(context) {
    return service.fetchColors().then(snapshot => {
      context.commit("setColor", snapshot.val());
    });
  },
  fetchDrinks(context) {
    return service.fetchDrinks().then(snapshot => {
      context.commit("setDrinks", snapshot.val());
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};

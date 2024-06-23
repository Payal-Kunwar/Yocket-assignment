import { createStore } from 'vuex';

const store = createStore({
  state: {
    cities: [
      { name: 'Yapkashnagar', distance: 60 },
      { name: 'Lihaspur', distance: 50 },
      { name: 'Narmis City', distance: 40 },
      { name: 'Shekharvati', distance: 30 },
      { name: 'Nuravgram', distance: 20 }
    ],
    vehicles: [
      { type: 'EV Bike', range: 60, count: 2 },
      { type: 'EV Car', range: 100, count: 1 },
      { type: 'EV SUV', range: 120, count: 1 }
    ],
    citySelections: [],
    vehicleSelections: [],
    fugitiveLocation: '',
    result: {}
  },
  mutations: {
    setCitySelections(state, selections) {
      state.citySelections = selections;
    },
    setVehicleSelections(state, selections) {
      state.vehicleSelections = selections;
    },
    setResult(state, result) {
      state.result = result;
    },
    resetGame(state) {
      state.citySelections = [];
      state.vehicleSelections = [];
      state.result = {};
      state.fugitiveLocation = '';
    },
    setFugitiveLocation(state, location) {
      state.fugitiveLocation = location;
    }
  },
  actions: {
    simulateFugitiveLocation({ commit, state }) {
      const randomIndex = Math.floor(Math.random() * state.cities.length);
      commit('setFugitiveLocation', state.cities[randomIndex].name);
    },
    determineResult({ commit, state }) {
      const capturingCop = state.citySelections.find(cop => cop.city === state.fugitiveLocation);
      if (capturingCop) {
        commit('setResult', { captured: true, cop: capturingCop.name });
      } else {
        commit('setResult', { captured: false });
      }
    }
  }
});

export default store;

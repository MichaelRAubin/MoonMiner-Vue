import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cheese: 0,
    upgrades: [{
      pickaxe: {
        price: 10,
        quantity: 0,
        multiplier: 1
      },
      drill: {
        price: 20,
        quantity: 0,
        multiplier: 5
      },
      dynamite: {
        price: 30,
        quantity: 0,
        multiplier: 10
      },
    }],
    autoUpgrades: [{
      dozer: {
        price: 50,
        quantity: 0,
        multiplier: 20
      },
    }]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

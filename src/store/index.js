import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    availCheese: 0,
    totalCheese: 0,

    mUpgrades: [{
      name: "Pickaxe",
      price: 10,
      quantity: 0,
      multiplier: 1,
      img: "miner.png"
    },
    {
      name: "Drill",
      price: 20,
      quantity: 0,
      multiplier: 5,
      img: "drill.png"
    },
    {
      name: "Dynamite",
      price: 30,
      quantity: 0,
      multiplier: 10,
      img: "dynamite.png"
    }],

    aUpgrades: [
      {
        name: "Dozer",
        price: 50,
        quantity: 0,
        multiplier: 20,
        img: "bulldozer.png"
      }],

    inventory: []

  },

  mutations: {

  },

  actions: {
    mine({ dispatch, commit, state }) {
      state.availCheese++
      state.totalCheese++
    }
  }

})

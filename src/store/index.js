import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    availCheese: 0,
    totalCheese: 0,
    cheeseTime: 0,

    upGrades: [{
      id: "100",
      name: "Pickaxe",
      price: 5,
      quantity: 0,
      multiplier: 1,
      img: "miner.png",
      auto: false
    },

    {
      name: "Drill",
      id: "200",
      price: 10,
      quantity: 0,
      multiplier: 5,
      img: "drill.png",
      auto: false
    },

    {
      name: "Dynamite",
      id: "300",
      price: 20,
      quantity: 0,
      multiplier: 10,
      img: "dynamite.png",
      auto: false
    },

    {
      name: "Dozer",
      id: "400",
      price: 30,
      quantity: 0,
      multiplier: 20,
      img: "bulldozer.png",
      auto: true
    }
    ],

    cart: {
      items: []
    }
  },

  mutations: {
    updateQuantity(state, { upGrade, quantity, price }) {
      upGrade.quantity = quantity;
      upGrade.price = price;
    }
  },

  actions: {
    mine({ dispatch, commit, state }) {
      state.availCheese++
      state.totalCheese++
    },

    async addUpGrade({ dispatch, commit, state }, upGrade) {
      let found = state.upGrades.find(i => i.id == upGrade.id);
      if (found) {
        upGrade.quantity++;
        upGrade.price *= 2;
        commit("updateQuantity", { upGrade: found, quantity: upGrade.quantity, price: upGrade.price });
      } else {
        return
      }

    },
  }
})

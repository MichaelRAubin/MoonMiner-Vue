import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    availCheese: 0,
    totalCheese: 0,
    cheeseTime: 0,
    totalModifier: 0,

    upGrades: [{
      id: "100",
      name: "Pickaxe",
      price: 10,
      quantity: 0,
      modifier: 5,
      img: "miner.png",
      auto: false
    },

    {
      name: "Drill",
      id: "200",
      price: 50,
      quantity: 0,
      modifier: 10,
      img: "drill.png",
      auto: false
    },

    {
      name: "Dynamite",
      id: "300",
      price: 100,
      quantity: 0,
      modifier: 30,
      img: "dynamite.png",
      auto: false
    },

    {
      name: "Dozer",
      id: "400",
      price: 1000,
      quantity: 0,
      modifier: 50,
      img: "bulldozer.png",
      auto: true
    }
    ]
  },

  mutations: {
    updateQuantity(state, { upGrade, quantity, price, modifier }) {
      upGrade.quantity = quantity;
      upGrade.price = price;
    },
    updateCheese(state) {
      state.availCheese += state.totalModifier
      state.totalCheese += state.totalModifier
      state.availCheese++
      state.totalCheese++
    }
  },

  actions: {
    async mine({ dispatch, commit, state }) {
      commit("updateCheese")
    },
    async addUpGrade({ dispatch, commit, state }, upGrade) {
      let found = state.upGrades.find(i => i.id == upGrade.id);
      if (found) {
        upGrade.quantity++;
        state.availCheese -= upGrade.price;
        state.totalModifier += (upGrade.modifier + upGrade.quantity);
        upGrade.price *= 2;
        commit("updateQuantity", { upGrade: found, quantity: upGrade.quantity, price: upGrade.price, modifier: upGrade.modifier });
      } else {
        return
      }
    },
    //TODO need to complete
    async startInterval({ dispatch, commit, state }) {
      let collectAutoUpgrades
      let collectionInterval = setInterval(collectAutoUpgrades, 3000)
      return collectionInterval
    },
    //TODO need to complete
    async collectAutoUpgrades({ dispatch, commit, state }, upGrade) {
      let found = state.upGrades.find(i => i.name == upGrade.name)
      if (found.name = "dozer") {
      }
    },
  }
})

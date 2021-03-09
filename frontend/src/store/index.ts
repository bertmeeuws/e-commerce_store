import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [],
  },
  mutations: {
    addToCart(state: any, payload: any) {
      //checking if already in cart
      const file = state.cart.find((item: any) => item.id === payload.id);
      if (file) {
        //already exists
        var index = state.cart.map((item: any) => item.id).indexOf(payload.id);
        state.cart[index].count++;
        console.log("Already exists, incrementing");
      } else {
        state.cart.push({ ...payload, count: 1 });
        console.log("Does not exist already");
      }

      console.log(file);
    },
    deleteFromCart(state: any, payload: number) {
      //getting index first
      var removeIndex = state.cart.map((item: any) => item.id).indexOf(payload);
      ~removeIndex && state.cart.splice(removeIndex, 1);
    },
  },
  actions: {},
  modules: {},
});

import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [],
  },
  mutations: {
    addToCart(state: any, payload: any) {
      console.log(payload);
      if (state.cart.length !== 0) {
        console.log("Cart length is higher than 0");
        let found = false;
        for (let i = 0; i >= state.cart.length; i++) {
          console.log(i);
          if (state.cart[i].id === payload) {
            //Item already exists
            console.log(state.cart[i]);
            state.cart[i].count++;
            console.log("Found");
            found = true;
          }
        }
        if (found) {
          console.log("Adding new");
          state.cart.push({ ...payload, count: 1 });
        }
      } else {
        console.log("Empty, adding");
        state.cart.push({ ...payload, count: 1 });
      }
    },
    deleteFromCart(state: any, payload: number) {
      var removeIndex = state.cart.map((item: any) => item.id).indexOf(payload);

      ~removeIndex && state.cart.splice(removeIndex, 1);
    },
  },
  actions: {},
  modules: {},
});

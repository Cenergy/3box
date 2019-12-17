export default {
  addCart(context, payload) {
    let oldProduct = state.cartList.find(item => item.iid === payload.iid);
    if (oldProduct) {
      context.commit("addToCart", oldProduct);
    } else {
      payload.count = 1;
      context.commit("addToCart", payload);
    }
  }
};

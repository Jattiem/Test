import { createStore } from 'vuex'

export default createStore({
  state: {
    products: null,
    users: null,
    product: null
  },
  getters: {
  },
  mutations: {
    setProducts(state, products){
      state.products = products
    },
    setUsers(state, users){
      state.users = users
    },
    setProduct(state, product){
      state.product = product
    }
  },
  actions: {
    async getProducts(context){
      let fetched = await fetch('https://pointofsalecmapi.herokuapp.com/products');
      let res = await fetched.json();
      context.commit('setProducts',res.products)
  }
  },
  modules: {
  }
})

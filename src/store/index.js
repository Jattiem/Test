import router from '@/router'
import { createStore } from 'vuex'

export default createStore({
  state: {
    products: null,
    product: null,
    user: null,
    token: null,
    cart: null,
    users: null
  },
  getters: {
  },
  mutations: {
    setProducts(state, products){
      state.products = products
    },
    setUser(state, user){
      state.user = user
    },
    setProduct(state, product){
      state.product = product
    },
    setToken(state, token){
      state.token = token
    },
    setUserCart(state, cart){
      state.cart = cart
    },
    setUsers(state, users){
      state.users = users
    }
  },
  actions: {
    async getProducts(context){
      let fetched = await fetch('https://pointofsalecmapi.herokuapp.com/products');
      let res = await fetched.json();
      context.commit('setProducts',res.products)
    },

    async getUsers(context){
      let fetched = await fetch ('https://pointofsalecmapi.herokuapp.com/users');
      let res = await fetched.json();
      context.commit('setUsers', res.users)
    },

    async getProduct(context, id){
      let fetched = await fetch('https://pointofsalecmapi.herokuapp.com/products/' + id);
      let res = await fetched.json();
      context.commit('setProduct',res.product)
    },

    async editProduct(context,payload){
      fetch('https://pointofsalecmapi.herokuapp.com/products/'+payload.product_id, {
          method:'PUT',
          body: JSON.stringify(payload),
          headers:{
              'Content-type': 'application/json; charset=UTF-8'
          }
      })
      .then((res)=> res.json())
      .then((data)=> context.dispatch('getProducts'));
  },
  async deleteProduct(context,payload){
      fetch('hhttps://pointofsalecmapi.herokuapp.com/products/'+payload, {
          method:'DELETE'
      })
      .then((res)=> res.json())
      .then((data)=> context.dispatch('getProducts'))
  },

    register(context, payload){
      const {fullname, email, password, number} = payload
      fetch('https://pointofsalecmapi.herokuapp.com/users', {
      method: 'POST',
      body: JSON.stringify({
          user_fullname: fullname,
          email: email,
          password: password,
          phone_number: number
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.msg == "The provided email exists. Please enter another one") {
          alert("The provided email exists. Please enter another one");
        } else {
          alert('Registration Successful');
          context.commit('setToken',data.token);
          setTimeout(()=>{
            router.push('/login'), 5000
          })
        }

      });

    },

    login(context, payload){
      const { email, password } = payload
      fetch('https://pointofsalecmapi.herokuapp.com/users', {
      method: 'PATCH',
      body: JSON.stringify({
          email: email,
          password: password,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.msg == 'Email Not Found. Please register') {
          alert(data.msg)
        } else {
          if (data.msg == 'Password is Incorrect') {
            alert(data.msg)
          } else {
            alert(`Welcome, ${data.user[0].user_fullname}`)
            context.commit('setUser',data.user[0])
            context.commit('setToken',data.token)
            setTimeout(()=>{
              router.push('/products'), 5000
            })
          }
        }

      });

    },
    async getUserCart(context, id){
      let fetched = await fetch('https://pointofsalecmapi.herokuapp.com/user/' + id + '/cart');
      let res = await fetched.json();
      context.commit('setUserCart', res.cart)
    }
  },
  modules: {
  }
})

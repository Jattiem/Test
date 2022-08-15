import router from '@/router'
import { createStore } from 'vuex'

export default createStore({
  state: {
    products: null,
    product: null,
    user: null,
    token: null
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
    }
  },
  actions: {
    async getProducts(context){
      let fetched = await fetch('https://pointofsalecmapi.herokuapp.com/products');
      let res = await fetched.json();
      context.commit('setProducts',res.products)
    },

    async getProduct(context, id){
      let fetched = await fetch('https://pointofsalecmapi.herokuapp.com/products/' + id);
      let res = await fetched.json();
      context.commit('setProduct',res.product)
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
          alert('Email Not Found. Please register')
        } else {
          if (data.msg == 'Password is Incorrect') {
            alert('Password is Incorrect')
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

    }
  },
  modules: {
  }
})

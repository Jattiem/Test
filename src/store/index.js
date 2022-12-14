import router from '@/router'
import { toRaw } from 'vue'
import { createStore } from 'vuex'


// export default createStore({
//   state: {
//     products: null,
//     product: null,
//     user: null,
//     token: null,
//     cart: null,
//     users: null,
//     total: 0
//   },
//   getters: {
//   },
//   mutations: {
//     setProducts(state, products){
//       state.products = products
//     },
//     setUser(state, user){
//       state.user = user
//     },
//     setProduct(state, product){
//       state.product = product
//     },
//     setToken(state, token){
//       state.token = token
//     },
//     setUserCart(state, cart){
//       state.cart = cart
//     },
//     setUsers(state, users){
//       state.users = users
//     },  
//     setTotal(state, total){
//       state.total = total
//     }
//   },
//   actions: {
//     async getProducts(context){
//       let fetched = await fetch('https://pointofsalecmapi.herokuapp.com/products');
//       let res = await fetched.json();
//       context.commit('setProducts',res.products)
//     },

//     async getUsers(context){
//       let fetched = await fetch ('https://pointofsalecmapi.herokuapp.com/users');
//       let res = await fetched.json();
//       context.commit('setUsers', res.users)
//     },

//     async getProduct(context, id){
//       let fetched = await fetch('https://pointofsalecmapi.herokuapp.com/products/' + id);
//       let res = await fetched.json();
//       context.commit('setProduct',res.product)
//     },

//     async editProduct(context,payload){
//       fetch('https://pointofsalecmapi.herokuapp.com/products/'+payload.product_id, {
//           method:'PUT',
//           body: JSON.stringify(payload),
//           headers:{
//               'Content-type': 'application/json; charset=UTF-8'
//           }
//       })
//       .then((res)=> res.json())
//       .then((data)=> context.dispatch('getProducts'));
//   },

//   async addProduct(context,payload){
//     fetch('https://pointofsalecmapi.herokuapp.com/products', {
//         method:'POST',
//         body: JSON.stringify(payload),
//         headers:{
//             'Content-type': 'application/json; charset=UTF-8'
//         }
//     })
//     .then((res)=> res.json())
//     .then((data)=> context.dispatch('getProducts'));
// },

//   async deleteProduct(context,payload){
//       fetch('https://pointofsalecmapi.herokuapp.com/products/'+payload, {
//           method:'DELETE'
//       })
//       .then((res)=> res.json())
//       .then((data)=> context.dispatch('getProducts'))
//   },

//     register(context, payload){
//       const {fullname, email, password, number} = payload
//       fetch('https://pointofsalecmapi.herokuapp.com/users', {
//       method: 'POST',
//       body: JSON.stringify({
//           user_fullname: fullname,
//           email: email,
//           password: password,
//           phone_number: number
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//       })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.msg == "The provided email exists. Please enter another one") {
//           alert("The provided email exists. Please enter another one");
//         } else {
//           alert('Registration Successful');
//           context.commit('setToken',data.token);
//           setTimeout(()=>{
//             router.push('/login'), 5000
//           })
//         }

//       });

//     },

//     login(context, payload){
//       const { email, password } = payload
//       fetch('https://pointofsalecmapi.herokuapp.com/users', {
//       method: 'PATCH',
//       body: JSON.stringify({
//           email: email,
//           password: password,
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//       })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.msg == 'Email Not Found. Please register') {
//           alert(data.msg)
//         } else {
//           if (data.msg == 'Password is Incorrect') {
//             alert(data.msg)
//           } else {
//             alert(`Welcome, ${data.user[0].user_fullname}`)
//             context.commit('setUser',data.user[0])
//             context.commit('setToken',data.token)
//             context.dispatch('getUserCart')
//             setTimeout(()=>{
//               router.push('/products'), 5000
//             })
//           }
//         }

//       });

//     },
//     async getUserCart(context){
//       let fetched = await fetch('https://pointofsalecmapi.herokuapp.com/users/' + context.state.user.user_id + '/cart');
//       let res = await fetched.json();
//       context.commit('setUserCart', res.cart)
//       context.dispatch('getTotalCart')
//     },

//     addCart(context, payload){
//       const {title, category, description, image, price, created_by} = payload
//       fetch('https://pointofsalecmapi.herokuapp.com/users/' + context.state.user.user_id + '/cart', {
//       method: 'POST',
//       body: JSON.stringify({
//           title: title,
//           category: category,
//           description: description,
//           image: image,
//           price: price,
//           created_by: created_by
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//       })
//       .then((response) => response.json())
//       .then((data) => {
//           if (data.results == 'There is no user with that id') {
//             alert(data.results)
//           } else {
//             alert('Item Added')
//             context.dispatch('getUserCart')
//           }
//     })
//   },
//   getTotalCart(context){
//     let total = 0;
//     toRaw(context.state.cart).forEach(product => {
//       total = total + product.price
//     });
//     context.commit('setTotal', total)
//   },
//   deleteCart(context){
//     fetch('https://pointofsalecmapi.herokuapp.com/users/' + context.state.user.user_id + '/cart', {
//     method: 'DELETE'
//     })
//     .then((res) => res.json())
//     .then((data) =>{
//       if (data.result == 'There is no user with that ID') {
//         alert(data.result)
//       } else {
//         alert(
//           'The purchase of ' + context.state.user.user_fullname + ' with a total of R' + Math.round((context.state.total + Number.EPSILON)*100)/100)
//         context.dispatch('getUserCart')
//       }
//     })
//   }
//   },
//   modules: {
//   }
// })


export default createStore({
  state: {
    products: null,
    product: null,
    user: null,
    token: null,
    cart: null,
    users: null,
    total: 0
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
    },  
    setTotal(state, total){
      state.total = total
    }
  },
  actions: {
    async getProducts(context){
      let fetched = await fetch('https://computer-hardware-capstone.herokuapp.com/products');
      let res = await fetched.json();
      context.commit('setProducts',res.products)
    },

    async getUsers(context){
      let fetched = await fetch ('https://computer-hardware-capstone.herokuapp.com/users');
      let res = await fetched.json();
      context.commit('setUsers', res.users)
    },

    async getProduct(context, id){
      let fetched = await fetch('https://computer-hardware-capstone.herokuapp.com/products/' + id);
      let res = await fetched.json();
      context.commit('setProduct',res.product)
    },

    async editProduct(context,payload){
      fetch('https://computer-hardware-capstone.herokuapp.com/products/'+payload.id, {
          method:'PUT',
          body: JSON.stringify(payload),
          headers:{
              'Content-type': 'application/json; charset=UTF-8'
          }
      })
      .then((res)=> res.json())
      .then((data)=> context.dispatch('getProducts'));
  },

  async addProduct(context,payload){
    fetch('https://computer-hardware-capstone.herokuapp.com/products', {
        method:'POST',
        body: JSON.stringify(payload),
        headers:{
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then((res)=> res.json())
    .then((data)=> context.dispatch('getProducts'));
},

  async deleteProduct(context,payload){
      fetch('https://computer-hardware-capstone.herokuapp.com/products/'+payload, {
          method:'DELETE'
      })
      .then((res)=> res.json())
      .then((data)=> context.dispatch('getProducts'))
  },

    register(context, payload){
      const {fullname, email, password, phonenumber} = payload
      fetch('https://computer-hardware-capstone.herokuapp.com/users', {
      method: 'POST',
      body: JSON.stringify({
          fullname: fullname,
          email: email,
          password: password,
          phonenumber: phonenumber
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
      fetch('https://computer-hardware-capstone.herokuapp.com/users', {
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
            context.dispatch('getUserCart')
            setTimeout(()=>{
              router.push('/products'), 5000
            })
          }
        }

      });

    },
    async getUserCart(context){
      let fetched = await fetch('https://computer-hardware-capstone.herokuapp.com/users/' + context.state.user.id + '/cart');
      let res = await fetched.json();
      context.commit('setUserCart', res.cart)
      context.dispatch('getTotalCart')
    },

    addCart(context, payload){
      const {brand,Model, category, description, img, price} = payload
      fetch('https://computer-hardware-capstone.herokuapp.com/users/' + context.state.user.id + '/cart', {
      method: 'POST',
      body: JSON.stringify({
          brand: brand,
          Model: Model,
          category: category,
          description: description,
          img: img,
          price: price,
          // created_by: created_by
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      })
      .then((response) => response.json())
      .then((data) => {
          if (data.results == 'There is no user with that id') {
            alert(data.results)
          } else {
            alert('Item Added')
            context.dispatch('getUserCart')
          }
    })
  },
  getTotalCart(context){
    let total = 0;
    toRaw(context.state.cart).forEach(product => {
      total = total + product.price
    });
    context.commit('setTotal', total)
  },
  deleteCart(context){
    fetch('https://computer-hardware-capstone.herokuapp.com/users/' + context.state.user.user_id + '/cart', {
    method: 'DELETE'
    })
    .then((res) => res.json())
    .then((data) =>{
      if (data.result == 'There is no user with that ID') {
        alert(data.result)
      } else {
        alert(
          'The purchase of ' + context.state.user.user_fullname + ' with a total of R' + Math.round((context.state.total + Number.EPSILON)*100)/100)
        context.dispatch('getUserCart')
      }
    })
  }
  },
  modules: {
  }
})
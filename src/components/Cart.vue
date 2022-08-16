<template>
  <div class="cart" v-if="user">
    <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h1 class="offcanvas-title" id="offcanvasScrollingLabel">Cart<i class="bi bi-cart-fill"></i></h1>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>{{user.user_fullname}}'s Cart </p>
    <div v-if="cart" id="cart">
      <div id="card" v-for="product in cart" :key="product" :product="product">
          <img :src="product.image" alt="Cart Item" class="img-fluid">
          <h3>{{product.title}}</h3>
          <h5>R{{product.price}}</h5>
      </div>
      <div id="total">
        <h2>R{{total}}</h2>
      </div>
    </div>
    <div v-else>
        <div class="loader">
          <div class="loaderBar"></div>
        </div>
    </div>
  </div>
  <div class="offcanvas-footer">
    <button type="button" id="clearButton" @click="clear()">Clear</button>
  </div>
</div>
  </div>
</template>

<script>
import ProductCards from '../components/ProductCards.vue'

export default {
  components:{ProductCards},
    computed:{
      user(){
        return this.$store.state.user
      },
      cart(){
        return this.$store.state.cart
      },
      total(){
        return Math.round((this.$store.state.total + Number.EPSILON)*100)/100
      }
    },
    methods:{
      clear(){
        this.$store.dispatch('deleteCart')
      }
    }
}
</script>

<style scoped>

.cart {
  position: fixed;
  background-color: rgb(242, 242, 242) ;
  width: 100%;
  z-index: 10;
}

.cart a {
  font-weight: bold;
  color: black;
  text-decoration: none;
}

.cart a.router-link-exact-active {
  color: rgb(0, 162, 255);
}

.cart a:hover {
  color: rgb(0, 162, 255);
}

h1{
  color: rgb(0, 162, 255) ;
}

#offcanvasScrolling {
  padding: 30px;
  background-color: #f2f2f2;
  font-size: 25px;
}


#offcanvas{
    font: bold;
}

.offcanvas{
  width: 25%;
}

@media (max-width: 1028px){
  .offcanvas{
    width: 35%;
  }
}

@media (max-width: 426px){
  .offcanvas{
    width: 75%;
  }
}

.offcanvas-body{
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}

.offcanvas-footer{
  padding: 20px;
  min-height: 100px;
}

#clearButton{
  background-color: rgb(185, 2, 2);
  color: white;
  border-radius: 200px;
  width: 100px;
  transition: all 0.5s;
}

#clearButton:hover{
  background-color: rgb(125, 2, 2);
  border: 1px solid white;
  transition: all 0.5s;
}

#cart{
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 25px;
}

#card{
  padding: 10px 10px 10px 10px;
  width: 200px;
  border-radius: 20px;
  background: linear-gradient(315deg, #dadada, #ffffff);
  box-shadow:  10px 10px 30px #bababa;
  margin: 0 !important;
  margin-bottom: 100px;
}

#loading{
  min-height: 100vh;
}



.loader { 
  width:500px; 
  margin:0 auto;
  border-radius:10px;
  border:4px solid transparent;
  position:relative;
  padding:1px;
}
.loader:before {
  content:'';
  border:2px solid black; 
  border-radius: 5px;
  position:absolute;
  top:-6px; 
  right:-4px; 
  bottom:-6px; 
  left:-4px;
}
.loader .loaderBar { 
  position:absolute;
  border-radius:10px;
  top:0;
  right:100%;
  bottom:0;
  left:0;
  background: rgb(0, 162, 255); 
  width:0;
  animation:LoadingBar 2s linear infinite;
}

@keyframes LoadingBar {
  0% {
    left:0%;
    right:100%;
    width:0%;
  }
  10% {
    left:0%;
    right:75%;
    width:25%;
  }
  90% {
    right:0%;
    left:75%;
    width:25%;
  }
  100% {
    left:100%;
    right:0%;
    width:0%;
  }
}

</style>
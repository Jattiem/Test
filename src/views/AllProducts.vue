<template>
  <div class="allProducts pb-5 pt-5">
    <div class="container">
      <h2 class="display-2">Products</h2>
      <div class="row" v-if="products">
          <ProductCards v-for="product in products" :key="product" :product="product" />
      </div>
        <div v-else id="loading">
            <div class="loader">
              <div class="loaderBar"></div>
            </div>
    </div>
  </div>
  </div>
</template>

<script>
import ProductCards from "../components/ProductCards.vue";

export default {
  components:{ProductCards},
  mounted() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>

<style scoped>
.allProducts {
  background: url("https://i.postimg.cc/zBcRB35M/20355544.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  color: black;
  background-color: rgb(242, 242, 242);
}

/* h2 {
    font-weight: 500;
    display: block;
    margin-bottom: 18px;
    text-transform: uppercase;
    color: #363636;
    text-decoration: none;
    transition: 0.3s;
}

h2:hover {
    color: rgb(0, 162, 255);
} */

.container{
    gap: 25px;
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

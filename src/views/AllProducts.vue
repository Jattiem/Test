<template>
  <div class="allProducts pb-5 pt-5">
    <div class="container">
      <h2 class="display-2">Products</h2>
      <div class="row" v-if="products">
        <div class="col-md-4 pb-5" v-for="product in products" :key="product">
          <div class="product-card">
            <div class="badge ms-2">Sale</div>
            <div class="product-tumb">
              <img :src="product.image" alt="product" />
            </div>
            <div class="product-details">
              <span class="product-catagory">Limited Edition</span>
              <h4>{{ product.title }}</h4>
              <div class="product-bottom-details ">
                <div class="row">
                  <div class="col-12">
                    <div class="product-btns">
                      <a class="product-btn" target="_blank"
                        ><span>details</span><i></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <h1>Loading</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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

.container {
  gap: 25px;
}

.product-card {
  width: 380px;
  position: relative;
  box-shadow: 0 2px 7px #dfdfdf;
  background: #fafafa;
}

.badge {
  position: absolute;
  left: 0;
  top: 20px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  background: rgb(0, 162, 255);
  color: #fff;
  padding: 3px 10px;
}

.product-tumb {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  padding: 50px;
  background: #f0f0f0;
}

.product-tumb img {
  max-width: 100%;
  max-height: 100%;
}

.product-details {
  padding: 10px;
}

.product-catagory {
  display: block;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: #ccc;
  margin-bottom: 18px;
}

.product-details h4 a {
  font-weight: 500;
  display: block;
  margin-bottom: 18px;
  text-transform: uppercase;
  color: #363636;
  text-decoration: none;
  transition: 0.3s;
}

.product-details h4 a:hover {
  color: rgb(0, 162, 255);
}

.product-details p {
  font-size: 15px;
  line-height: 22px;
  margin-bottom: 18px;
  color: #999;
}

.bi-cart-fill {
  color: rgb(0, 162, 255);
}

.product-bottom-details {
  overflow: hidden;
  border-top: 1px solid #eee;
}

.product-bottom-details div {
  width: 50%;
}

@media (max-width: 424px) {
  .product-card {
    width: 100%;
  }
  .product-bottom-details div {
    width: 50%;
    display: flex;
    justify-content: center;
  }
}

@media (min-width: 768px) {
  .col-md-4 {
    width: 50%;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
  }
}

@media (min-width: 600px) {
  .col-md-4 {
    width: 50%;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
  }
}

@media (max-width: 699px) {
  .col-md-4 {
    width: 100%;
    /* flex: 0 0 auto; */
    display: flex;
    justify-content: center;
  }
}

.product-price {
  font-size: 18px;
  color: rgb(0, 162, 255);
  font-weight: 600;
}

.product-price small {
  font-size: 80%;
  font-weight: 400;
  text-decoration: line-through;
  display: inline-block;
  margin-right: 5px;
}

.product-btn {
  display: flex !important;
  justify-content: center !important;
}

.product-btn a {
  display: inline-block;
  margin-left: 5px;
  color: rgb(242, 242, 242);
  transition: 0.3s;
  font-size: 17px;
  display: flex !important;
  justify-content: center !important;
}

.product-btn a:hover {
  color: rgb(0, 162, 255);
}

.product-btn {
  display: inline-block;
  position: relative;
  background: white;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1em;
  letter-spacing: 0.1em;
  padding: 10px 30px;
  transition: 0.5s;
  width: 180px;
  text-align: center;
  margin-right: 5px;
  display: flex !important;
  justify-content: center !important;
}

.product-btn:hover {
  letter-spacing: 0.25em;
  background-color: rgb(0, 162, 255);
  color: rgb(0, 162, 255);
  box-shadow: 0 0 10px rgb(0, 162, 255);
}

.product-btn::before {
  content: "";
  position: absolute;
  inset: 2px;
  background: white;
}

.product-btn span {
  position: relative;
  z-index: 2;
}

.product-btn i {
  position: absolute;
  inset: 0;
  display: block;
  display: flex !important;
  justify-content: center !important;
  float: left;
}

.product-btn i::before {
  content: "";
  position: absolute;
  top: -3.5px;
  left: 80%;
  width: 20px;
  height: 10px;
  border: 2px solid rgb(0, 162, 255);
  background: white;
  transform: translateX(-50%);
  transition: 0.6s;
}

.product-btn:hover i::before {
  width: 25px;
  left: 10%;
}

.product-btn i::after {
  content: "";
  position: absolute;
  bottom: -3.5px;
  left: 10%;
  width: 20px;
  height: 10px;
  border: 2px solid rgb(0, 162, 255);
  background: white;
  transform: translateX(-50%);
  transition: 0.6s;
}

.product-btn:hover i::after {
  width: 25px;
  left: 80%;
}
</style>

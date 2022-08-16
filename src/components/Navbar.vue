<template>
  <nav id="nav">
    <button
      class="btn fw-bold p-3 display-3"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#staticBackdrop"
      aria-controls="staticBackdrop"
    >
      MENU
    </button>
    <div
      class="offcanvas offcanvas-start"
      data-bs-backdrop="static"
      tabindex="-1"
      id="staticBackdrop"
      aria-labelledby="staticBackdropLabel"
    >
      <div class="offcanvas-header">
        <h1 class="offcanvas-title fw-bold" id="staticBackdropLabel">
          Unlimited CMD
        </h1>
      </div>
      <div class="offcanvas-body">
        <div>
          <div class="row gap-2 d-flex justify-content-center fw-bold">
            <router-link to="/">Home <i class="bi bi-house"></i></router-link>
            <div v-if="user">
              <router-link to="/products">All Products<i class="bi bi-cart-fill"></i></router-link>
            </div>
            <router-link to="/login"
              >Login <i class="bi bi-person"></i
            ></router-link>
            <router-link to="/register"
              >Register <i class="bi bi-person-fill"></i
            ></router-link>
            <router-link to="/about"
              >About <i class="bi bi-book-fill"></i
            ></router-link>
            <button
              type="button"
              class="btn-new bi bi-cart-fill rounded border border-0"
              data-bs-target="#offcanvasScrolling"
              data-bs-toggle="offcanvas"
              aria-label="offcanvasWithBothOptions"
            ></button>


          </div>
        </div>
      </div>
    </div>
  </nav>

  <CartVue />

</template>

<script>
import CartVue from "./Cart.vue";

export default {
  components: {CartVue},
    computed:{
      user(){
        return this.$store.state.user
      },
      cart(){
        return this.$store.state.cart
      }
    }
}
</script>

<style scoped>
#nav {
  position: fixed;
  background-color: rgb(242, 242, 242);
  width: 100%;
  z-index: 10;
}

#nav a {
  font-weight: bold;
  color: black;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: rgb(0, 162, 255);
}

#nav a:hover {
  color: rgb(0, 162, 255);
}

h1 {
  color: rgb(0, 162, 255);
}

.btn {
  color: rgb(242, 242, 242) !important;
  background: rgb(0, 162, 255);
  border-radius: 50%;
  height: 70px;
  width: 100px;
  display: block;
  border-bottom-left-radius: 400px;
  border-bottom-right-radius: 400px;
  border-bottom: 10px;
  position: fixed;
  z-index: 100000;
  transform: rotate(-90deg);
  left: -38px;
  top: 50%;
  bottom: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-new:hover {
  background-color: rgb(0, 162, 255);
  color: rgb(242, 242, 242);
}

.btn-new {
  width: 50%;
}

@media (max-width: 795px) {
  .btn {
    transform: rotate(0deg);
    top: -20px;
    left: 43%;
  }
}

@media (max-width: 616px) {
  .btn {
    transform: rotate(0deg);
    top: -20px;
    left: 42%;
  }
}

@media (max-width: 583px) {
  .btn {
    transform: rotate(0deg);
    top: -20px;
    left: 39%;
  }
}

@media (max-width: 426px) {
  .btn {
    transform: rotate(0deg);
    top: -20px;
    left: 38%;
  }
}

@media (max-width: 376px) {
  .btn {
    transform: rotate(0deg);
    top: -20px;
    left: 36%;
  }
}

@media (max-width: 321px) {
  .btn {
    transform: rotate(0deg);
    top: -20px;
    left: 34%;
  }
}

.btn:hover {
  color: white;
  background: rgb(0, 162, 255);
}

#nav {
  display: flex !important;
  justify-items: start !important;
  align-content: center !important;
}

#staticBackdrop {
  padding: 30px;
  background-color: rgb(242, 242, 242);
  font-size: 25px;
}

#offcanvas {
  font: bold;
}
</style>

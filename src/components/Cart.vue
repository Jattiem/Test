<template>
  <div class="cart">
    <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h1 class="offcanvas-title" id="offcanvasScrollingLabel">Cart <i class="bi bi-cart-fill"></i></h1>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>'s Cart </p>
  </div>
</div>
  </div>
</template>

<script>
export default {

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
  background-color: rgb(242, 242, 242);
  font-size: 25px;
}


#offcanvas{
    font: bold;
}

</style>
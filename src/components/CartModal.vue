<template>
  <div class="modal fade" id="cart" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="cartLabel">Cart</h5>
        <button type="button" id="cartClose" class="btn-close"></button>
      </div>
      <div class="modal-body" v-if="cart">
        <div id="card" v-for="product in cart" :key="product" :product="product">
            <h3>{{product.title}}</h3>
            <img :scr="product.image">
        </div>
      </div>
      <div class="modal-body" v-else>
            <h2>Cart is empty</h2>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
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

<style>

</style>
<template>
  <div class="admin pt-5 pb-5" v-if="user">
    <h2>Admin Page</h2>
    <div class="container">
        <div class="table-responsive">
      <table class="table">
        <tr>
          <th class="table__heading">ID</th>
          <th class="table__heading">User FullName</th>
          <th class="table__heading">User Role</th>
          <th class="table__heading">Email</th>
          <th class="table__heading">Phone</th>
          <th class="table__heading">Join</th>
          <th class="table__heading">Cart</th>
        </tr>
        <tbody v-if="users">
          <tr class="table__row" v-for="user in users" :key="user" :user="user">
            <td class="table__content" data-heading="ID">{{ user.id }}</td>
            <td class="table__content" data-heading="User FullName">
              {{ user.fullname }}
            </td>
            <td class="table__content" data-heading="User Role">
              {{ user.userRole }}
            </td>
            <td class="table__content" data-heading="Email">
              {{ user.email }}
            </td>
            <td class="table__content" data-heading="Phone">
              {{ user.phonenumber }}
            </td>
            <td class="table__content" data-heading="Join">
              {{ user.dateJoined }}
            </td>
            <td class="table__content" data-heading="Cart">
              <button data-bs-toggle="modal" data-bs-target="#cart" class="btn">cart</button>
              <CartModal :product="product" style="z-index: 1504;"/>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      <br />
      <div class="table-responsive">
        <table class="table table-white table-hover">
          <thead>
            <tr>
              <th class="table__heading">ID</th>
              <th class="table__heading">Product Name</th>
              <th class="table__heading">Product Image</th>
              <th class="table__heading">Description</th>
              <th class="table__heading">Category</th>
              <th class="table__heading">Price</th>
              <th class="table__heading">Created BY</th>
              <th class="table__heading">
                <button
                  data-bs-toggle="modal" data-bs-target="#addProduct"
                  class="btn-add"
                >
                  ADD
                </button>
                <Add :product="product" />
              </th>
            </tr>
          </thead>
          <tbody v-if="products">
            <tr v-for="product in products" :key="product" :product="product">
              <th class="table__content" data-heading="ID">{{ product.id }}</th>
              <th class="table__content" data-heading="Product Name">{{ product.brand }}</th>
              <th class="table__content" data-heading="Product Image">
                <img class="img-fluid" :src="product.img" alt="product" />
              </th>
              <th class="table__content" data-heading="Description">{{ product.description }}</th>
              <th class="table__content" data-heading="Category">{{ product.category }}</th>
              <th class="table__content" data-heading="Price">{{ product.price }}</th>
              <!-- <th class="table__content" data-heading="Created BY">{{ product.created_by }}</th> -->
              <th class="table__content" data-heading="ADD">
                <button
                  data-bs-toggle="modal" :data-bs-target="`#editProduct`+product.id"
                  class="btn"
                >
                  Edit
                </button>
                <br>
                <br>
                <button
                  data-bs-toggle="modal" :data-bs-target="`#deleteProduct`+product.id"
                  class="btn"
                >
                  Delete
                </button>
                <EditProduct :product="product" />
                <DeleteProduct :product="product" />
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div v-else>
    <h2 class="display-2">Please login to view the admin page</h2>
  </div>
</template>

<script>

import EditProduct  from  '../components/EditProduct.vue'
import DeleteProduct from '../components/DeleteProduct.vue'
import Add from '../components/Add.vue'
import CartModal from '../components/CartModal.vue';

export default {
    components: { EditProduct, DeleteProduct, Add, CartModal },
  mounted() {
    this.$store.dispatch("getProducts");
    // this.$store.dispatch("getUsers");
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    users() {
      return this.$store.state.users;
    },
    user(){
      return this.$store.state.user
    }
  },
};
</script>

<style scoped>
.admin {
  background: url("https://i.postimg.cc/zBcRB35M/20355544.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  color: black;
  background-color: rgb(242, 242, 242);
}

.container {
  background: url("https://i.postimg.cc/zBcRB35M/20355544.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  color: black;
  background-color: rgb(242, 242, 242);
  width: 100%;
  height: 100%;
  padding: 10px;
}

/* @media screen and (max-width: 999px) {
  table tbody,
  table tr,
  table th {
    display: block;
    color: black;
  background-color: rgb(242, 242, 242);
  }
  table thead tr {
    display: block;
  }
  table tbody td {
    text-align: center;
  }
  table tbody td::before {
    content: attr(data-title);
    position: absolute;
    left: 0;
    font-weight: bold;
    color: black;
  background-color: rgb(242, 242, 242);
  }
} */


.table__heading { border-bottom: 2px solid rgb(0, 162, 255); }
 @media (max-width: 800px) {
 .table__heading {
display: none;
}
 .table__content {
 display: block;
 padding: .5rem 0;
}
 .table__row {
 margin: .25rem 1rem;
 padding: .5rem 0;
 display: block;
 border-bottom: 2px solid rgb(0, 162, 255);
}
 .table__content:before {
 content: attr(data-heading);
 display: inline-block;
 width: 5rem;
 margin-right: .5rem;
 color: #999;
 font-size: .75rem;
 font-weight: 700;
 text-transform: uppercase;
 letter-spacing: 2px;
}
.btn-add{
    background-color: black;
    color: white;
}
}

table{
    color: black;
  background-color: rgb(242, 242, 242);
  padding: 50px !important;
}

.table{
    color: black;
  background-color: rgb(242, 242, 242);
  padding: 50px !important;
}

.img-fluid {
  height: 100%;
  width: 100%;
  object-fit: cover;
  overflow-x: hidden;
  aspect-ratio: 1;
}


.btn {
  background-color: rgb(0, 162, 255);
}
</style>

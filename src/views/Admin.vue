<template>
  <div class="admin pt-5 pb-5 p-5">
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
            <td class="table__content" data-heading="ID">{{ user.user_id }}</td>
            <td class="table__content" data-heading="User FullName">
              {{ user.user_fullname }}
            </td>
            <td class="table__content" data-heading="User Role">
              {{ user.userrole }}
            </td>
            <td class="table__content" data-heading="Email">
              {{ user.email }}
            </td>
            <td class="table__content" data-heading="Phone">
              {{ user.phone_number }}
            </td>
            <td class="table__content" data-heading="Join">
              {{ user.join_date }}
            </td>
            <td class="table__content" data-heading="Cart">
              <button class="btn">cart</button>
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
              <th scope="col">ID</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Image</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Created BY</th>
              <th scope="col">
                <button
                  data-bs-target="#AddProductModal"
                  data-bs-toggle="modal"
                  class="btn"
                >
                  ADD
                </button>
              </th>
            </tr>
          </thead>
          <tbody v-if="products">
            <tr v-for="product in products" :key="product" :product="product">
              <th scope="row">{{ product.product_id }}</th>
              <th scope="row">{{ product.title }}</th>
              <th scope="row">
                <img class="img-fluid" :src="product.image" alt="product" />
              </th>
              <th scope="row">{{ product.description }}</th>
              <th scope="row">{{ product.category }}</th>
              <th scope="row">{{ product.price }}</th>
              <th scope="row">{{ product.created_by }}</th>
              <th scope="row">
                <button
                  data-bs-toggle="modal" :data-bs-target="`#editProduct`+product.product_id"
                  class="btn"
                >
                  Edit
                </button>
                <button
                  data-bs-toggle="modal" :data-bs-target="`#deleteProduct`+product.product_id"
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
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getProducts");
    this.$store.dispatch("getUsers");
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    users() {
      return this.$store.state.users;
    },
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
    background-color: darkgrey;
  }
} */

.table {
  width: 500px !important;
  padding: 16px;
  padding: 1rem;
}

td, th { padding: 8px; padding: .5rem;
}

th {
  text-align: left;
  font-weight: 300;
  font-size: 20px;
  font-size: 1.25rem;
}

.table__heading { border-bottom: 2px solid rgb(0, 162, 255); }
 @media (max-width: 32rem) {
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
}


@media screen and (max-width: 675px) {
  .setTableOff thead,
  .setTableOff tbody,
  .setTableOff tr,
  .setTableOff th {
    display:block;
  }
  .setTableOff thead tr {
    display: block;
  }
  .setTableOff tbody td {
    text-align: center;
  }
  .setTableOff tbody td::before {
    content: attr(data-title);
    position: absolute;
    left: 0;
    font-weight: bold;
    background-color: darkgrey;
  }
}

table {
  width: 500px !important;
  color: black;
  background-color: rgb(242, 242, 242);
}

table {
  width: 500px !important;
  color: black;
  background-color: rgb(242, 242, 242);
}

.img-fluid {
  height: 100%;
  width: 100%;
  object-fit: cover;
  overflow-x: hidden;
  aspect-ratio: 1;
}

/* th {
  border-bottom: 1px solid #000000;
} */

.btn {
  background-color: rgb(0, 162, 255);
}
</style>

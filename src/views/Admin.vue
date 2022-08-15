<template>
  <div class="admin pt-5 p-5">
    <h2>Admin Page</h2>
    <div class="container">
      <table class="table table-white table-hover">
        <thead>
            <tr>
          <th scope="col">ID</th>
          <th scope="col">User FullName</th>
          <th scope="col">User Role</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
          <th scope="col">Phone</th>
          <th scope="col">Join</th>
          <th scope="col">Cart</th>
        </tr>
        </thead>
        <tbody>
            <tr>
          <td scope="row">1</td>
          <td scope="row">Sam Jones</td>
          <td scope="row">Customer</td>
          <td scope="row">Sam@gmail.com</td>
          <td scope="row">Sam123</td>
          <td scope="row">0213456789</td>
          <td scope="row">09-06-2022</td>
          <td scope="row"><button class="btn">cart</button></td>
        </tr>
        </tbody>
      </table>
        <br>
       <table class="table table-white table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Product Image</th>
                    <th scope="col">Description</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col"><button data-bs-target="#AddProductModal" data-bs-toggle="modal" class="btn">ADD</button></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <th scope="row">sneaker</th>
                    <th scope="row">image</th>
                    <th scope="row">something nice</th>
                    <th scope="row">small</th>
                    <th scope="row">R99.99</th>
                    <th scope="row">
                        <button data-bs-toggle="modal" data-bs-target="editProduct" class="btn">Edit</button>
                        <button data-bs-toggle="modal" data-bs-target="#deleteProduct" class="btn">Delete</button>
                        <EditProductModal :product="product" />
                    <DeleteProductModal :product="product" />
                    </th>
                    
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
export default {

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
  height: 100vh;
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

table{
  width: 100%;
  color: black;
  background-color: rgb(242, 242, 242);
}



td, th{
    border: 1px solid #000000;
}

.btn{
    background-color: rgb(0, 162, 255);
}

</style>

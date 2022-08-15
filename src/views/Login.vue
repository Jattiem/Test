<template>
  <div
    class="login d-flex justify-content-center align-items-center flex-column"
  >
    <div
      class="container d-flex justify-content-center align-items-center flex-column"
    >
      <h3 class="display-4">Login</h3>
      <div class="form pb-3">
        <div class="row">
          <div class="col-12 fw-bold">
            <h4><label for="email">Email:</label></h4>
          </div>
          <div class="col-12">
            <input
              name="email"
              type="email"
              placeHolder="Enter your Email"
              class="form-control w-100 mx-auto"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <h4><label for="password">Password:</label></h4>
          </div>
          <div class="col-12">
            <input
              name="password"
              type="text"
              placeHolder="Enter your Password"
              class="form-control w-100 mx-auto"
            />
          </div>
        </div>
        <div class="col-12 pt-3">
          <button class="btn border border-0" type="submit">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style scoped>
.login {
  background: url("https://i.postimg.cc/zBcRB35M/20355544.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  height: 100vh;
  padding: 10px;
  color: black;
  background-color: rgb(242, 242, 242);
}

h3 {
  color: rgb(0, 162, 255);
}

/* .container {
  background: 
    url("https://i.postimg.cc/bJk7gy95/Screenshot-2022-08-06-131354.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  color: white;
  margin: 50px;
  padding: 50px;
} */

button {
  background-color: rgb(0, 162, 255);
  color: white;
}

button:hover {
  background-color: rgb(0, 162, 255);
  color: white;
}
</style>

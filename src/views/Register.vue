<template>
  <div class="register">
    <div
      class="container d-flex justify-content-center align-items-center flex-column"
    >
      <form class="form pb-3">
        <div class="row">
          <div class="col-12 pt-5">
            <h3 class="display-4 pt-5">Register</h3>
          </div>
          <div class="col-12">
            <h4><label for="name">Full Name:</label></h4>
          </div>
          <div class="col-12">
            <input
              name="fullname"
              type="text"
              placeHolder="Enter your First Name"
              class="form-control w-100 mx-auto"
              v-model="fullname"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <h4><label for="email">Email:</label></h4>
          </div>
          <div class="col-12">
            <input
              name="email"
              type="email"
              placeHolder="Enter your Email"
              class="form-control w-100 mx-auto"
              v-model="email"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <h4><label for="password">Password:</label></h4>
          </div>
          <div class="col-12">
            <input
              name="userpassword"
              type="password"
              placeHolder="Enter your Password"
              class="form-control w-100 mx-auto"
              v-model="password"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <h4>
              <label for="gender">Phone Number:</label>
            </h4>
          </div>
          <div class="col-12">
            <input
              name="phonenumber"
              type="number"
              placeHolder="Enter your Phone Number"
              class="form-control w-100 mx-auto"
              minlength="10"
              v-model="number"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-12 pt-3">
            <button class="btn border border-0" type="button" @click="register()">Register</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      fullname: '',
      email: '',
      password: '',
      number: ''
    }
  },
  methods:{
    register(){
      const user = {
          fullname: this.fullname,
          email: this.email,
          password: this.password,
          number: this.number
      }
      this.$store.dispatch('register', user) 
    }
  }

};
</script>

<style scoped>
.register {
  background: url("https://i.postimg.cc/zBcRB35M/20355544.jpg") no-repeat center
    center/cover;
  height: 100vh;
  color: black;
  padding: 10px;
  background-color: rgb(242, 242, 242);
}

h3 {
  color: rgb(0, 162, 255);
}

/* .container{
  background: 
  linear-gradient(
  rgba(0, 0, 0, 0.59)
  ),
  url('https://i.postimg.cc/TYBfHRZB/Healthy-Food-Doesnt-Have-To-Be-Expensive-1280x720.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  color: white;
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

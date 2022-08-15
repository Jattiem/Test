<template>
  <div class="singleProduct d-flex justify-content-center pt-5">
    <div class="container">
      <div class="product-card">
        <div class="product-tumb">
          <img
            class="img-fluid"
            src="https://i.postimg.cc/NMpGXK3Q/Screenshot-2022-08-06-115457.png"
            alt="product"
          />
        </div>
        <div class="product-details">
          <span class="product-catagory">Baby Yoda Sneaker</span>
          <h4><a href="">Unlimited and lastest edition</a></h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
            possimus nostrum!
          </p>
          <div class="product-bottom-details">
            <div class="row">
              <div class="col-12">
                <div class="product-price ps-5 pt-2">$230.99</div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="product-btns">
                  <a class="product-btn" target="_blank"
                    ><span>add to cart</span><i></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.singleProduct {
  background: url("https://i.postimg.cc/zBcRB35M/20355544.jpg") no-repeat center
    center/cover;
  height: 100vh;
  color: black;
  background-color: rgb(242, 242, 242);
}

/* h3{
    color: rgb(0, 162, 255);
} */

.img-fluid {
  height: 100%;
  width: 100%;
  object-fit: cover;
  overflow-x: hidden;
  transition: all 1s ease;
  aspect-ratio: 1;
}

/* .btn{
    background-color:  rgb(0, 162, 255);
    color: white;
}

.btn:hover{
    background-color:  rgb(0, 162, 255);
    color: white;
} */

/* @media (max-width: 616px){
  .row{
    padding: 20px;
  }
} */

.container {
  display: flex;
  width: 100%;
}

.container > div > div img {
  object-fit: cover;
}

/* @media (max-width: 2000px){
  .container {
    display: flex;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .container > div > div img {
    object-fit: cover;
  }
}

@media (max-width: 1000px){
  .container {
    display: flex;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .container > div > div img {
    object-fit: cover;
  }
}  */

.product-card {
  width: 500px;
  position: relative;
  box-shadow: 0 2px 7px #dfdfdf;
  margin: auto;
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
  padding: 10px;
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

/* .bi-heart{
    color: rgb(0, 162, 255);
} */

.product-bottom-details {
  overflow: hidden;
  border-top: 1px solid #eee;
  /* padding-top: 40px; */
}

.product-bottom-details div {
  float: left;
  width: 50%;
}

@media (max-width: 424px) {
  .product-bottom-details div {
    width: 50%;
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
  text-align: right;
}

.product-btn a {
  display: inline-block;
  margin-left: 5px;
  color: #e1e1e1;
  transition: 0.3s;
  font-size: 17px;
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
}

.product-btn i::before {
  content: "";
  position: absolute;
  top: -3.5px;
  left: 80%;
  width: 20px;
  height: 10px;
  border: 2px solid rgb(0, 162, 255);
  background: rgb(242, 242, 242);
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
  background: rgb(255, 255, 255);
  transform: translateX(-50%);
  transition: 0.6s;
}

.product-btn:hover i::after {
  width: 25px;
  left: 80%;
}
</style>

<template>
  <div class="home pt-4">
    <h2 class="d-flex justify-content-center pb-4 pt-4">Unlimited CMD</h2>
    <div class="wrapper">
        <a href="#sneakersContainer">
          <div class="imgContainer">
            <img
              class="img-fluid"
              src="https://i.postimg.cc/0NmMrzTz/0a00c4e46950dc360ac77921e0afcd2b.jpg"
              alt=""
            /><div class="onHover">
                  <div class="row">
                    <div class="col-sm-12">
                      <span id="hoverInfo"></span>
                    </div>
                  </div>
                </div>
          </div>
        </a>
        <a href="#watchContainer">
              <div class="imgContainer">
                <img
                  class="img-fluid"
                  src="https://i.postimg.cc/dt90wH6Z/4491dd5c7fd1f5bf7fa5e2a1c5db4067.jpg"
                  alt="Albums"
                />
                <div class="onHover">
                  <div class="row">
                    <div class="col-sm-12">
                      <span id="hoverInfo">
      <h1 id="name" class="display-1"></h1></span>
                    </div>
                  </div>
                </div>
              </div>
        </a>
        <a href="#phonesContainer">
              <div class="imgContainer">
                <img
                  class="img-fluid"
                  src="https://i.postimg.cc/cHcyqj7F/akrales-210917-4760-0175.jpg"
                  alt="Fragrances"
                /><div class="onHover">
                  <div class="row">
                    <div class="col-sm-12">
                      <span id="hoverInfo"></span>
                    </div>
                  </div>
                </div>
              </div>
        </a>
      </div>
    </div>
</template>
<script>



export default {
}
</script>

<style scoped>
.home{
  background-color: rgb(242, 242, 242);
  height: 100vh !important;
  overflow-y: hidden;
}

.img-fluid{
  height: 100%;
    width: 100%;
    object-fit: cover;
    overflow-x: hidden;
    aspect-ratio: 1;
  transition: all 1s ease;
}

.itemContainer:hover img {
  transform: translate(0px, -20px);
}
.itemContainer img {
  transition: all 1s ease;
}

.wrapper {
  display: flex;
  width: 100%;
}
.wrapper > a > div {
  height: 89vh;
}
.wrapper > a > div img {
  height: 89vh;
  object-fit: cover;
}
@media screen and (max-width: 600px) {
  .wrapper {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
  .wrapper > a > div {
    height: 55vh;
  }
  .wrapper > a > div img {
    height: 55vh;
    object-fit: cover;
  }
}

.imgContainer {
  overflow: hidden;
  position: relative;
}

.imgContainer:hover img {
  transform: scale(1.1);
}

.imgContainer img {
  transition: all 1s ease;
}

.itemContainer {
  background-color: rgba(185, 185, 185, 0.7);
}

.onHover { 
  background-color: rgba(95, 95, 95, 0.2);
  color: white;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  opacity: 0;
  transition: all 0.3s linear;
}

.imgContainer:hover .onHover {
  opacity: 1;
}

/* #hoverInfo{
  color: rgb(0, 162, 255);
} */

</style>
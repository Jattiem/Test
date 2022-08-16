<template>
  <div class="about pb-5 pt-5">
    <div class="conatiner pb-3 pt-5">
      <div
        class="card d-flex justify-content-center align-items-center flex-column border border-0"
      >
        <h2 class="display-4">About Us</h2>
        <div
          class="card-body d-flex justify-content-center align-items-center flex-column"
        >
          <p
            class="d-flex justify-content-center align-items-center flex-column"
          >
            Greetings from the Unlimited CMD team. We hope that you are enjoying
            your experince shopping with us.
          </p>
          <h3>How it all started</h3>
          <p
            class="d-flex justify-content-center align-items-center flex-column ps-5 pe-5"
          >
            One day in the cold of winter, Joel put Muddathir and Cassidy
            together in a group for a group project where they had to design a
            fullstack online store. Cassidy had the frontend in the bag and
            Muddathir had the backend in the bag and once they finally merged
            their ends together they created this online store that you are on
            right now and well I can't say much but this has become one of the
            most successful onlines in a matter of months.
          </p>
          <div class="row gap-2 d-flex justify-content-center">
            <h3>Get to know us:</h3>
            <div class="wrapper">
              <a href="#Cassidy">
                <div class="imgContainer">
                  <img
                    class="img-fluid"
                    src="https://i.postimg.cc/5thBXCLk/Cassidy-1-jpg3.jpg"
                    alt="Cassidy"
                  />
                  <div class="onHover">
                    <div class="row">
                      <div class="col-sm-12">
                        <span id="hoverInfo">
                          <div class="row gap-2">
                            <div class="col-sm-2">
                              <h3>
                                <a
                                  href="https://www.linkedin.com/in/cassidy-manuel-08b537245/"
                                  target="_blank"
                                  ><i class="bi-brands bi-linkedin"></i
                                ></a>
                              </h3>
                            </div>
                            <div class="col-sm-2">
                              <h3>
                                <a
                                  href="https://www.facebook.com/cassidy.manuel.56"
                                  target="_blank"
                                  ><i class="bi-brands bi-facebook"></i
                                ></a>
                              </h3>
                            </div>
                            <div class="col-sm-2">
                              <h3>
                                <a
                                  href="https://vueportfolio69.web.app/"
                                  target="_blank"
                                  ><i class="bi-solid bi-person-fill"></i
                                ></a>
                              </h3>
                            </div>
                            <div class="col-sm-2">
                              <h3>
                                <a
                                  href="https://github.com/cassidymanuel01"
                                  target="_blank"
                                  ><i class="bi-brands bi-github"></i
                                ></a>
                              </h3>
                            </div>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#Mudda">
                <div class="imgContainer">
                  <img
                    class="img-fluid"
                    src="https://i.postimg.cc/yd2mtrVd/Muddathir-1.jpg "
                    alt="Mudda"
                  />
                  <div class="onHover">
                    <div class="row">
                      <div class="col-sm-12">
                        <span id="hoverInfo">
                          <div
                            class="row gap-2 d-flex justify-content-center aligite"
                          >
                            <div class="col-sm-2">
                              <h3>
                                <a
                                  href="https://www.linkedin.com/in/muddathir-dawood-382557237/"
                                  target="_blank"
                                  ><i
                                    class="bi-brands bi-linkedin"
                                    id="md-icon"
                                  ></i
                                ></a>
                              </h3>
                            </div>
                            <div class="col-sm-2">
                              <h3>
                                <a
                                  href="https://www.facebook.com/muddathir.dawood"
                                  target="_blank"
                                  ><i
                                    class="bi-brands bi-facebook"
                                    id="md-icon"
                                  ></i
                                ></a>
                              </h3>
                            </div>
                            <div class="col-sm-2">
                              <h3>
                                <a
                                  href="https://muddathir-vue-portfolio.web.app/"
                                  target="_blank"
                                  ><i class="bi-solid bi-person-fill" id="md-icon"></i
                                ></a>
                              </h3>
                            </div>
                            <div class="col-sm-2">
                              <h3>
                                <a
                                  href="
https://github.com/MuddathirDawood?tab=repositories"
                                  target="_blank"
                                  ><i
                                    class="bi-brands bi-github"
                                    id="md-icon"
                                  ></i
                                ></a>
                              </h3>
                            </div>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
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
.about {
  background: url("https://i.postimg.cc/zBcRB35M/20355544.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  color: black;
  background-color: rgb(242, 242, 242);
}

.card {
  background: url("https://i.postimg.cc/zBcRB35M/20355544.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-body {
  width: 90%;
}

.img {
  height: 85%;
  width: 100%;
  object-fit: cover;
  overflow-x: hidden;
  display: flex;
  flex: wrap;
}

.row {
  min-width: 50% !important;
}

.wrapper {
  display: flex;
  width: 50%;
}
.wrapper > a > div {
  height: 89vh;
}
.wrapper > a > div img {
  height: 89vh;
  object-fit: cover;
}
@media screen and (max-width: 630px) {
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

.imgContainer img{
  margin: 10px 10px 10px 10px;
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
  color: white !important;
}

i {
  color: black !important;
}

.img-fluid {
  height: 100%;
  width: 100%;
  object-fit: cover;
  overflow-x: hidden;
  aspect-ratio: 1;
  transition: all 1s ease;
}

#md-icon {
  color: white !important;
}
</style>

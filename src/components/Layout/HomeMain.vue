<script setup>
import { RouterLink } from "vue-router";

function ScrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<template>
  <section class="main-section">
    <div class="container my-5">
      <div class="row justify-content-md-evenly justify-content-xxl-center">
        <div
          class="carousel-div col-md-6 col-lg-5 col-xxl-4 p-5 pt-0 p-md-0 me-xxl-4"
        >
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="../../assets/img/Food/burger-1.jpg"
                  class="d-block w-100"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../../assets/img/Food/burger-2.jpg"
                  class="d-block w-100"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../../assets/img/Food/burger-3.jpg"
                  class="d-block w-100"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../../assets/img/Food/burger-4.jpg"
                  class="d-block w-100"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../../assets/img/Food/burger-5.jpg"
                  class="d-block w-100"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div
          class="d-flex col-9 col-md-5 col-lg-5 col-xxl-4 p-0 ms-xxl-4 mx-auto mx-md-0"
        >
          <div class="main-triple-div">
            <div class="main-triple">
              <img
                class="main-triple-icon"
                src="../../assets/img/delivery_1.png"
              />
              <a
                type="button"
                href="tel:0924022333"
                class="btn btn-light w-75 main-triple-btn position-relative"
              >
                <span class="me-2">Naruči</span>
                <img src="../../assets/img/free.png" class="free-badge-index" />
              </a>
            </div>

            <div class="main-triple">
              <img class="main-triple-icon" src="../../assets/img/map.png" />
              <a
                type="button"
                href="#findus"
                class="btn btn-light w-75 main-triple-btn"
              >
                <span class="me-2">Pronađite nas</span>
              </a>
            </div>

            <div class="main-triple">
              <img class="main-triple-icon" src="../../assets/img/menu_2.png" />
              <RouterLink
                class="btn btn-light w-75 main-triple-btn"
                to="/menu"
                @click="ScrollToTop()"
                >Meni</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.main-triple-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: auto;
}

.main-triple {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.main-triple-icon {
  width: 64px;
}

.main-triple-btn,
.main-triple-btn {
  font-size: 25px !important;
  background-color: #f977aa;
  border-radius: 15px;
}

.free-badge-index {
  width: 60px;
  position: absolute;
  right: 0;
  margin-right: -15px;
}

.carousel-inner {
  border-radius: 15px;
}
</style>

<script setup>
import { RouterLink } from "vue-router";

function ScrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<template>
  <footer class="text-center text-lg-start">
    <section class="main-footer-div bg-light">
      <div class="container text-center text-md-start mt-5">
        <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto my-4">
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="fas fa-gem me-3"></i>Fast Food Pink Panther Crikvenica
            </h6>
            <p>"Napunit ćemo vaš trbuščić ukusnom hranom uz brzu dostavu!"</p>
            <a
              href="https://www.facebook.com/Fast-Food-Pink-Panther-Crikvenica-108903834810004"
              class="m-2 facebook-icon"
            >
              <img src="../../assets/img/facebook.png" />
            </a>
            <a href="https://www.instagram.com/fasrfoodcrikvenica" class="m-2">
              <img src="../../assets/img/instagram.png" />
            </a>
          </div>

          <div
            class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 d-none d-sm-block"
          ></div>

          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto my-4">
            <h6 class="text-uppercase fw-bold mb-4">Stranice</h6>
            <p>
              <RouterLink class="text-reset" to="/menu" @click="ScrollToTop()"
                >Meni</RouterLink
              >
            </p>
            <p>
              <RouterLink
                class="text-reset"
                to="/aboutus"
                @click="ScrollToTop()"
                >O nama</RouterLink
              >
            </p>
            <p>
              <RouterLink
                class="text-reset"
                to="/contact"
                @click="ScrollToTop()"
                >Kontakt</RouterLink
              >
            </p>
          </div>

          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 my-4">
            <h6 class="text-uppercase fw-bold mb-4">Kontakt</h6>
            <p>
              <i class="fa fa-home me-3"></i> Vinodolska ul. 15, 51260,
              Crikvenica
            </p>
            <a href="tel:0924022333" class="text-reset"
              ><i class="fa fa-phone me-4"></i>0924022333</a
            >
          </div>
        </div>
      </div>
    </section>

    <div
      class="copyright-div text-center p-4 d-lg-flex justify-content-lg-center gap-2"
    >
      © 2022 Copyright:
      <p class="fw-bold m-0">Fast Food Pink Panther Crikvenica</p>
    </div>
  </footer>
</template>

<style scoped>
a {
  text-decoration: none;
}

.copyright-div {
  background-color: pink;
}
.copyright-div p {
  letter-spacing: 1px;
}

.container,
h6,
.copyright-div {
  font-size: 16px;
}

.facebook-icon img {
  background-color: white;
  border-radius: 5px;
}
</style>

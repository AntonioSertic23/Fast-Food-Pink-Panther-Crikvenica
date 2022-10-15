<script setup>
import PageTitle from "../components/UI/PageTitle.vue";
import Notice from "../components/UI/Notice.vue";
import { RouterLink } from "vue-router";

function ScrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<template>
  <!-- MENU SECTION -->
  <section class="container mb-2 menu-section">
    <PageTitle pageTitle="Meni" />

    <div class="col-lg-8 col-xxl-6 p-3 pt-0 mx-auto">
      <div class="part-one p-4">
        <p class="menu-subtitle">Posebna ponuda</p>

        <div class="menu-item">
          <div class="menu-item-up">
            <div class="item-name">Hamburger</div>
            <div class="dotted-line mx-3"></div>
            <div class="item-price">30kn</div>
            <div class="item-price ms-2">4€</div>
          </div>

          <div class="menu-item-down">
            <p class="m-0">pljeskavica, lepinja, umaci, povrće</p>
          </div>
        </div>

        <div class="menu-item">
          <div class="menu-item-up">
            <div class="item-name">Rolani hamburger</div>
            <div class="dotted-line mx-3"></div>
            <div class="item-price">35kn</div>
            <div class="item-price ms-2">4€</div>
          </div>

          <div class="menu-item-down">
            <p class="m-0">rolani hamburger, lepinja, luk, ajvar</p>
          </div>
        </div>

        <div class="menu-item">
          <div class="menu-item-up">
            <div class="item-name">Svinjski kotlet</div>
            <div class="dotted-line mx-3"></div>
            <div class="item-price">52kn</div>
            <div class="item-price ms-2">3.9€</div>
          </div>

          <div class="menu-item-down">
            <p class="m-0">svinjski kotleti, pecivo, ajvar</p>
          </div>
        </div>
      </div>

      <div class="d-flex flex-column gap-4 text-center mt-4 mt-lg-5">
        <p class="free-delivery-notice mb-0">BESPLATNA DOSTAVA</p>
        <a class="call-btn btn mb-0 mx-auto w-auto" href="tel:0924022333"
          ><i class="fa fa-phone me-2"></i>
          0924022333
        </a>
      </div>

      <div class="part-two mt-4 mt-lg-5">
        <p class="menu-subtitle">Burgeri</p>

        <div class="menu-item">
          <div class="menu-item-up">
            <div class="item-name">Hamburger</div>
            <div class="dotted-line mx-3"></div>
            <div class="item-price">30kn</div>
            <div class="item-price ms-2">4.8€</div>
          </div>

          <div class="menu-item-down">
            <p class="m-0">pljeskavica, lepinja, umaci, povrće</p>
          </div>
        </div>

        <div class="menu-item">
          <div class="menu-item-up">
            <div class="item-name">Rolani hamburger</div>
            <div class="dotted-line mx-3"></div>
            <div class="item-price">35kn</div>
            <div class="item-price ms-2">4€</div>
          </div>

          <div class="menu-item-down">
            <p class="m-0">rolani hamburger, lepinja, luk, ajvar</p>
          </div>
        </div>

        <div class="menu-item">
          <div class="menu-item-up">
            <div class="item-name">Cheeseburger</div>
            <div class="dotted-line mx-3"></div>
            <div class="item-price">35kn</div>
            <div class="item-price ms-2">4€</div>
          </div>

          <div class="menu-item-down">
            <p class="m-0">pljeskavica, sir, lepinja, umaci, povrće</p>
          </div>
        </div>

        <div class="menu-item">
          <div class="menu-item-up">
            <div class="item-name">Chickenburger</div>
            <div class="dotted-line mx-3"></div>
            <div class="item-price">35kn</div>
            <div class="item-price ms-2">4€</div>
          </div>

          <div class="menu-item-down">
            <p class="m-0">piletina, lepinja, umaci, povrće</p>
          </div>
        </div>
      </div>

      <div class="part-two mt-5">
        <p class="menu-subtitle">Plate</p>

        <div class="menu-item">
          <div class="menu-item-up">
            <div class="item-name">Hamburger</div>
            <div class="dotted-line mx-3"></div>
            <div class="item-price">30kn</div>
            <div class="item-price ms-2">4.2€</div>
          </div>

          <div class="menu-item-down">
            <p class="m-0">pljeskavica, lepinja, umaci, povrće</p>
          </div>
        </div>

        <div class="menu-item">
          <div class="menu-item-up">
            <div class="item-name">Rolani hamburger</div>
            <div class="dotted-line mx-3"></div>
            <div class="item-price">35kn</div>
            <div class="item-price ms-2">4.7€</div>
          </div>

          <div class="menu-item-down">
            <p class="m-0">rolani hamburger, lepinja, luk, ajvar</p>
          </div>
        </div>

        <div class="menu-item">
          <div class="menu-item-up">
            <div class="item-name">Cheeseburger</div>
            <div class="dotted-line mx-3"></div>
            <div class="item-price">35kn</div>
            <div class="item-price ms-2">4€</div>
          </div>

          <div class="menu-item-down">
            <p class="m-0">pljeskavica, sir, lepinja, umaci, povrće</p>
          </div>
        </div>

        <div class="menu-item">
          <div class="menu-item-up">
            <div class="item-name">Chickenburger</div>
            <div class="dotted-line mx-3"></div>
            <div class="item-price">35kn</div>
            <div class="item-price ms-2">4€</div>
          </div>

          <div class="menu-item-down">
            <p class="m-0">piletina, lepinja, umaci, povrće</p>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex flex-column gap-4 text-center mt-4 mt-lg-5">
      <p class="gallery-notice mb-0">Za slike pogledajte našu galeriju:</p>
      <RouterLink
        class="gallery-btn btn mb-0 mx-auto w-auto"
        to="/gallery"
        @click="ScrollToTop()"
        >GALERIJA</RouterLink
      >
    </div>

    <Notice />

    <div class="col-12 mb-5" style="height: 3rem"></div>
  </section>
</template>

<style scoped>
.menu-title {
  text-align: center;
  font-family: "PinkPanther";
  font-size: 48.83px;
}

.part-one {
  box-shadow: 0 0.25rem 1rem 0 grey;
  border-radius: 15px;
  background-color: pink;
}

.menu-subtitle {
  text-align: center;
  font-family: "PinkPanther";
  font-size: 31.25px;
}

.menu-item-up {
  display: flex;
  align-items: center;
}

.menu-item-up .item-name {
  font-size: 20px;
  font-weight: bold;
  order: 1;
}

.menu-item-up .dotted-line {
  order: 2;
  background-image: radial-gradient(
    circle,
    currentcolor 1px,
    transparent 1.5px
  );
  background-position: bottom;
  background-size: 1ex 4.5px;
  background-repeat: space no-repeat;
  content: "";
  flex-grow: 1;
  height: 1em;
}

.menu-item-up .item-price {
  order: 3;
  font-size: 20px;
  font-weight: bold;
  border: 1px solid black;
  border-radius: 5px;
  padding: 4px;
  min-width: 49px;
  text-align: center;
  background-image: linear-gradient(to bottom right, lightcoral, hotpink);
}

.menu-item-down p {
  font-family: EBGaramondItalic;
}

.reward p {
  font-size: 16px;
}

.call-btn {
  font-size: 25px !important;
  background-color: #f977aa !important;
  box-shadow: 0 0.25rem 1rem 0 grey;
}

.free-delivery-notice {
  font-size: 31.25px;
  font-weight: bold;
}

.gallery-notice {
  font-size: 25px;
}
.gallery-btn {
  font-size: 20px;
  background-color: #f977aa !important;
  box-shadow: 0 0.25rem 1rem 0 grey;
}
</style>

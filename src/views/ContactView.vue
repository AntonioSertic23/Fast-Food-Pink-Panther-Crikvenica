<script setup>
import Map from "../components/UI/Map.vue";
import PageTitle from "../components/UI/PageTitle.vue";
</script>

<template>
  <section class="container contact-section">
    <PageTitle pageTitle="Kontakt" />

    <div class="col-lg-8 col-xxl-6 p-4 py-0 mx-auto">
      <div class="contact-information px-md-4 mt-5 mb-4">
        <div class="working-time-div my-5 text-center">
          <p class="working-time-heading">Radno vrijeme</p>
          <div class="row mb-5 mt-4 gap-3 border-around p-4 p-md-5">
            <div class="working-time-item">
              <div class="item-name">PON</div>
              <div class="dotted-line mx-3"></div>
              <div class="item-time">CLOSED</div>
            </div>
            <div class="working-time-item">
              <div class="item-name">UTO - PET</div>
              <div class="dotted-line mx-3"></div>
              <div class="item-time">10:00 - 22:00</div>
            </div>
            <div class="working-time-item">
              <div class="item-name">SUB - NED</div>
              <div class="dotted-line mx-3"></div>
              <div class="item-time">12:00 - 24:00</div>
            </div>
          </div>
          <a class="call-btn btn mb-0 mx-auto w-auto" href="tel:0924022333"
            ><i class="fa fa-phone me-2"></i>
            0924022333
          </a>
        </div>

        <div class="address-div my-5 text-center">
          <p class="fw-bold">FAST FOOD "PINK PANTHER"</p>
          <p>RALEVU j.d.o.o.</p>
          <p>Vinodolska ul. 15</p>
          <p>51260, Crikvenica</p>
          <p class="free-delivery-badge fw-bold">
            *Besplatna dostava na području Crikvenice i Vinodolske općine
          </p>
        </div>

        <div class="social-media my-5 text-center">
          <a href="#" class="m-2">
            <img src="../assets/img/facebook.png" />
          </a>
          <a href="#" class="m-2">
            <img src="../assets/img/instagram.png" />
          </a>
        </div>

        <div
          class="more-information mt-5 d-flex align-items-center flex-column"
        >
          <p><span class="fw-bold me-2">OIB:</span>01149259808</p>
          <p><span class="fw-bold me-2">TEL:</span>092 4022 333</p>
          <p><span class="fw-bold me-2">EMAIL:</span>ratkovitunj03@gmail.com</p>
        </div>
      </div>
    </div>
  </section>

  <Map />
</template>

<style scoped>
.contact-section {
  font-size: 20px;
}

.menu-title {
  text-align: center;
  font-family: "PinkPanther";
  font-size: 48.83px;
}

.pink-underline {
  width: 60%;
  height: 5px;
  background-color: pink;
  border-radius: 5px;
}

.free-delivery-badge {
  color: #f977aa;
}

@media (max-width: 767.98px) {
  .contact-section {
    font-size: 20px;
  }
}

.working-time-item {
  display: flex;
  align-items: center;
}
.working-time-item .item-name {
  font-weight: bold;
  order: 1;
}

.working-time-item .dotted-line {
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

.working-time-item .item-time {
  order: 3;
  font-weight: bold;
}
.working-time-div .border-around {
  border-radius: 15px;
  box-shadow: 0 0.25rem 1rem 0 grey;
  font-size: 20px;
  background-color: pink;
}
@media (max-width: 576px) {
  .working-time-div .border-around {
    font-size: 20px;
  }
}

.working-time-heading {
  font-size: 39.06px;
}

.call-btn {
  font-size: 25px !important;
  background-color: #f977aa !important;
  box-shadow: 0 0.25rem 1rem 0 grey;
}
</style>

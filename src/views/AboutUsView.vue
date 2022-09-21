<script setup>
import Footer from "../components/Layout/Footer.vue";
</script>

<template>
  <section class="aboutus-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-6">
          <!-- Section Heading-->
          <div class="section_heading text-center mt-3">
            <p class="menu-title">O Nama</p>
            <p class="menu-subtitle">Kratka priča o nama i našem rastu</p>
            <div class="my-5 mx-auto pink-underline"></div>

            <div class="aboutus-description px-4">
              <p>
                Na lokaciji Vinodolska15, Crikvenica otvorili smo Fast Food
                "PINK PANTHER".
              </p>
              <p>
                Možete nam se obratiti s povjerenjem te probati sve iz ponude na
                našoj lokaciji, ali i uvjeriti se u brzu dostavu, ukoliko želite
                uživati u našoj ponudi na Vašoj kućnoj adresi.
              </p>
              <p>
                Zahvaljujući našem trudu i iskustvu u ponudi imamo, uz dnevne
                svježe meso, lepinje/somun i povrće - kvalitetnu ponudu uz
                ljubazno osoblje.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-12">
          <!-- Timeline Area-->
          <div class="apland-timeline-area mx-auto">
            <!-- Single Timeline Content-->
            <div class="single-timeline-area">
              <div
                class="timeline-date wow fadeInLeft"
                data-wow-delay="0.1s"
                style="
                  visibility: visible;
                  animation-delay: 0.1s;
                  animation-name: fadeInLeft;
                "
              >
                <p>2020.</p>
              </div>
              <div class="row">
                <div class="">
                  <div
                    class="single-timeline-content d-flex wow fadeInLeft"
                    data-wow-delay="0.3s"
                    style="
                      visibility: visible;
                      animation-delay: 0.3s;
                      animation-name: fadeInLeft;
                    "
                  >
                    <div class="row">
                      <div class="timeline-text">
                        <p>
                          Na lokaciji Vinodolska15, Crikvenica otvorili smo Fast
                          Food "PINK PANTHER".
                        </p>
                      </div>
                      <div class="timeline-image mt-3">
                        <img src="../assets/img/timeline_1.jpg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Single Timeline Content-->
            <div class="single-timeline-area">
              <div
                class="timeline-date wow fadeInLeft"
                data-wow-delay="0.1s"
                style="
                  visibility: visible;
                  animation-delay: 0.1s;
                  animation-name: fadeInLeft;
                "
              >
                <p>2021.</p>
              </div>
              <div class="row">
                <div class="">
                  <div
                    class="single-timeline-content d-flex wow fadeInLeft"
                    data-wow-delay="0.3s"
                    style="
                      visibility: visible;
                      animation-delay: 0.3s;
                      animation-name: fadeInLeft;
                    "
                  >
                    <div class="row">
                      <div class="timeline-text">
                        <p>
                          Možete nam se obratiti s povjerenjem te probati sve iz
                          ponude na našoj lokaciji, ali i uvjeriti se u brzu
                          dostavu, ukoliko želite uživati u našoj ponudi na
                          Vašoj kućnoj adresi.
                        </p>
                      </div>
                      <div class="timeline-image mt-3">
                        <img src="../assets/img/timeline_2.jpg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Single Timeline Content-->
            <div class="single-timeline-area">
              <div
                class="timeline-date wow fadeInLeft"
                data-wow-delay="0.1s"
                style="
                  visibility: visible;
                  animation-delay: 0.1s;
                  animation-name: fadeInLeft;
                "
              >
                <p>2022.</p>
              </div>
              <div class="row">
                <div class="">
                  <div
                    class="single-timeline-content d-flex wow fadeInLeft"
                    data-wow-delay="0.3s"
                    style="
                      visibility: visible;
                      animation-delay: 0.3s;
                      animation-name: fadeInLeft;
                    "
                  >
                    <div class="row">
                      <div class="timeline-text">
                        <p>
                          Zahvaljujući našem trudu i iskustvu u ponudi imamo, uz
                          dnevne svježe meso, lepinje/somun i povrće -
                          kvalitetnu ponudu uz ljubazno osoblje.
                        </p>
                      </div>
                      <div class="timeline-image mt-3">
                        <img src="../assets/img/timeline_3.jpg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Single Timeline Content-->
            <div class="single-timeline-area w-100">
              <div
                class="timeline-date h-50 timeline-arrow wow fadeInLeft"
                data-wow-delay="0.1s"
                style="
                  visibility: visible;
                  animation-delay: 0.1s;
                  animation-name: fadeInLeft;
                "
              ></div>
              <div class="row">
                <div class="">
                  <div
                    class="single-timeline-content d-flex wow fadeInLeft"
                    data-wow-delay="0.3s"
                    style="
                      visibility: visible;
                      animation-delay: 0.3s;
                      animation-name: fadeInLeft;
                    "
                  >
                    <div class="row">
                      <div class="timeline-text last-text">
                        <p>Nastavljamo rasti i dalje...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>

<style scoped>
.aboutus-section {
  margin-top: 68px;
}

.menu-title {
  text-align: center;
  font-family: "PinkPanther";
  font-size: 50px;
}

.pink-underline {
  width: 60%;
  height: 5px;
  background-color: pink;
  border-radius: 5px;
}

.apland-timeline-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
}

@media (min-width: 576px) {
  .apland-timeline-area {
    width: 100%;
  }
}
@media (min-width: 768px) {
  .apland-timeline-area {
    width: 75%;
  }
}
@media (min-width: 992px) {
  .apland-timeline-area {
    width: 60%;
  }
}
@media (min-width: 1200px) {
  .apland-timeline-area {
    width: 50%;
  }
}
@media (min-width: 1400px) {
  .apland-timeline-area {
    width: 40%;
  }
}

/* -------------------------------------------- TIMELINE -------------------------------------------- */

.timeline_area {
  position: relative;
  z-index: 1;
}
.single-timeline-area {
  position: relative;
  z-index: 1;
  padding-left: 112px;
}
@media only screen and (max-width: 575px) {
  .single-timeline-area {
    padding-left: 100px;
  }
}
.single-timeline-area .timeline-date {
  position: absolute;
  width: 112px;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -ms-grid-row-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  padding-right: 60px;
}
@media only screen and (max-width: 575px) {
  .single-timeline-area .timeline-date {
    width: 100px;
  }
}
.single-timeline-area .timeline-date::after {
  position: absolute;
  width: 3px;
  height: 100%;
  content: "";
  background-color: pink;
  top: 0;
  right: 30px;
  z-index: 1;
}
.single-timeline-area .timeline-date::before {
  position: absolute;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: deeppink;
  content: "";
  top: 50%;
  right: 26px;
  z-index: 5;
  margin-top: -5.5px;
}
.single-timeline-area .timeline-arrow::before {
  background-image: url("../assets/img/down-arrow-pink.png");
  width: 50px;
  height: 50px;
  border-radius: 0;
  background-size: cover;
  background-color: unset;
  right: 7px;
  top: 100%;
}

.single-timeline-area .timeline-date p {
  margin-bottom: 0;
  color: #020710;
  -webkit-transform: rotate(-90deg);
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 500;
  font-family: "EBGaramondItalic";
}
.single-timeline-area .single-timeline-content {
  position: relative;
  z-index: 1;
  padding: 30px 30px 25px;
  border-radius: 6px;
  margin-bottom: 15px;
  margin-top: 15px;
  -webkit-box-shadow: 0 0.25rem 1rem 0 rgba(47, 91, 234, 0.125);
  box-shadow: 0 0.25rem 1rem 0 gray;
}
@media only screen and (max-width: 575px) {
  .single-timeline-area .single-timeline-content {
    padding: 20px;
  }
}
.single-timeline-area .single-timeline-content .timeline-icon {
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  width: 30px;
  height: 30px;
  background-color: #f1c40f;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 30px;
  flex: 0 0 30px;
  text-align: center;
  max-width: 30px;
  border-radius: 50%;
  margin-right: 15px;
}
.single-timeline-area .single-timeline-content .timeline-icon i {
  color: #ffffff;
  line-height: 30px;
}
.single-timeline-area .single-timeline-content .timeline-text h6 {
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
}
.single-timeline-area .single-timeline-content .timeline-text p {
  font-size: 15px;
  margin-bottom: 0;
}
.single-timeline-area .single-timeline-content:hover .timeline-icon,
.single-timeline-area .single-timeline-content:focus .timeline-icon {
  background-color: #020710;
}
.single-timeline-area .single-timeline-content:hover .timeline-text h6,
.single-timeline-area .single-timeline-content:focus .timeline-text h6 {
  color: #3f43fd;
}

.timeline-image img {
  max-width: 100%;
  max-height: 100%;
}
.last-text p {
  font-size: 20px !important;
}
.menu-subtitle {
  font-family: "EBGaramondRegular";
  font-size: 22px;
}
.aboutus-description {
  font-size: 20px;
}

/* -------------------------------------------- TIMELINE -------------------------------------------- */
</style>

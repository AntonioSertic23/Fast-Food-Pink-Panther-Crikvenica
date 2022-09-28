<template>
  <section class="container my-5">
    <p class="text-center mb-2 mb-lg-4 section-header">Vaši komentari</p>
    <div class="row justify-content-center">
      <div
        id="carouselExampleControls"
        class="carousel slide col-md-9 col-lg-8 col-xl-7 col-xxl-6"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="review-card p-4">
              <div class="review-info d-flex flex-row">
                <div class="">
                  <img
                    src="../assets/img/Review/profile_picture_1.jpg"
                    class="review-profile-picture"
                    alt="..."
                  />
                </div>
                <div class="ms-3">
                  <p class="m-0">Antonio Sertić</p>
                  <p class="m-0">
                    <span class="bi bi-star-fill"></span>
                    <span class="bi bi-star-fill"></span>
                    <span class="bi bi-star-fill"></span>
                    <span class="bi bi-star-fill"></span>
                    <span class="bi bi-star-fill"></span>
                  </p>
                </div>
              </div>
              <div class="review-text pt-3">
                <p class="m-0">
                  Izvrsna hrana, ljubazna konobarica i sve ostalo savršeno.
                  Budem sigurno opet navratio.
                </p>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="review-card p-4">
              <div class="review-info d-flex flex-row">
                <div class="">
                  <div class="review-profile-picture no-picture-1">A</div>
                </div>
                <div class="ms-3">
                  <p class="m-0">Anna Derger</p>
                  <p class="m-0">
                    <span class="bi bi-star-fill"></span>
                    <span class="bi bi-star-fill"></span>
                    <span class="bi bi-star-fill"></span>
                    <span class="bi bi-star-fill"></span>
                    <span class="bi bi-star-fill"></span>
                  </p>
                </div>
              </div>
              <div class="review-text pt-3">
                <p class="m-0">
                  Hrana je top! Jeli smo Cheesburger i pomfrit i top je bilo!
                  Svjeze i vruce i za svaku pohvalu! Definitivno svakome
                  preporucujem i sami opet se tu vracamo!
                </p>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="review-card p-4">
              <div class="review-info d-flex flex-row">
                <div class="">
                  <div class="review-profile-picture no-picture-2">A</div>
                </div>
                <div class="ms-3">
                  <p class="m-0">Marina Sabljak</p>
                  <p class="m-0">
                    <span class="bi bi-star-fill"></span>
                    <span class="bi bi-star-fill"></span>
                    <span class="bi bi-star-fill"></span>
                    <span class="bi bi-star-fill"></span>
                    <span class="bi bi-star-fill"></span>
                  </p>
                </div>
              </div>
              <div class="review-text pt-3">
                <p class="m-0">
                  Sve pohvale za hranu i osoblje, naručila sam platu za dvije
                  osobe koju nismo mogli pojest tri dana znači količinski je ne
                  možes jednostavno pojest, ukusno brzo fino 😊
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="review-btn-div" id="findus">
          <button
            class="review-btn"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="review-btn"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.review-info,
.review-text {
  font-size: 20px;
}

.carousel-inner {
  min-height: 220px;
}

.review-profile-picture {
  height: 60px;
  width: 60px;
  border-radius: 50%;
}

.no-picture-1,
.no-picture-2 {
  align-items: center;
  justify-content: center;
  display: flex;
  font-family: sans-serif;
  font-size: 24px;
  color: white;
}
.no-picture-1 {
  background-color: orange;
}
.no-picture-2 {
  background-color: green;
}

.review-btn-div {
  display: flex;
  justify-content: center;
  column-gap: 50px;
}

.review-btn {
  border: none;
  border-radius: 15px;
  display: flex;
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: center;
  background-color: hotpink;
}

@media (max-width: 576px) {
  .carousel-inner {
    min-height: 320px;
  }
}
</style>

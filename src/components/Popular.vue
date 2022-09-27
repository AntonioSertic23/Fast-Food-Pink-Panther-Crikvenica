<template>
  <section class="container popular-section">
    <p class="text-center mb-4 mb-lg-5 section-header">Izdvajamo iz ponude</p>
    <div class="row mx-2 justify-content-center">
      <div class="col-11 col-md-6 col-lg-5 me-lg-3 col-xxl-4 mb-4 mb-md-0">
        <div class="card border-0 card-popular">
          <img src="../assets/img/Food/burger-1.jpg" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Gurman burger u lepinji</h5>
            <p class="card-text">
              (Pljeskavica, Rolani hamburger, lepinja, umaci, povrće)
            </p>
            <div class="card-price">
              <p>35kn ≈ 4.7€</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-11 col-md-6 col-lg-5 ms-lg-3 col-xxl-4">
        <div class="card border-0 card-popular">
          <img src="../assets/img/Food/burger-2.jpg" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Chickenburger</h5>
            <p class="card-text">(Piletina, lepinja, umaci, povrće)</p>
            <div class="card-price">
              <p>35kn ≈ 4.7€</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.popular-section .card-popular {
  height: 100%;
  display: flex;
  box-shadow: 0 0.25rem 1rem 0 grey;
}

.popular-section .card-body {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.popular-section .card-price p {
  text-align: end;
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  font-family: "PinkPanther";
}
.popular-section .card-title {
  font-size: 24px;
}
.popular-section .card-text {
  font-size: 18px;
}

.card-img-top {
  height: 150px;
  width: 150px;
  margin: auto;
}
</style>

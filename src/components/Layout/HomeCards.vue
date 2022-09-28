<template>
  <section class="container card-section">
    <p class="text-center mb-4 section-header">Naše odlike</p>
    <div class="row mx-2 justify-content-center">
      <div class="col-11 col-md-4 col-lg-3 me-lg-2 col-xxl-3 mb-4 mb-md-0">
        <div class="card border-0 card-triple">
          <img
            src="../../assets/img/delivery_1.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body mt-3">
            <h5 class="card-title text-center">Dostava</h5>
            <p class="card-text text-center">Brza i besplatna dostava</p>
          </div>
        </div>
      </div>

      <div class="col-11 col-md-4 col-lg-3 me-lg-2 col-xxl-3 mb-4 mb-md-0">
        <div class="card border-0 card-triple">
          <img
            src="../../assets/img/vegetables_1.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body mt-3">
            <h5 class="card-title text-center">Namirnice</h5>
            <p class="card-text text-center">Uvijek svježe namirnice</p>
          </div>
        </div>
      </div>

      <div class="col-11 col-md-4 col-lg-3 ms-lg-2 col-xxl-3">
        <div class="card border-0 card-triple">
          <img
            src="../../assets/img/meat_3.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body mt-3">
            <h5 class="card-title text-center">Meso</h5>
            <p class="card-text text-center">Vrhunsko domaće meso</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card-section {
  margin-top: 5rem !important;
  margin-bottom: 5rem !important;
}

.card-section h5 {
  font-size: 31.25px;
}

.card-section .card-text {
  font-size: 20px;
}

.card-img-top {
  height: 150px;
  width: 150px !important;
  margin: auto;
}
</style>

<template>
  <div
    class="col-lg-8 col-xxl-6 mx-auto part-one reward mt-5 px-2 px-md-4 py-3 text-center"
  >
    <h2>Samo za najgladnije</h2>
    <p class="m-3">
      Tko se u Pink Pantheru odvaži da pojede navedenu platu sa predviđenim
      brojem osoba(6) unutar 40 minuta,te uspije smatrat će se počašćenim.
    </p>
    <img src="../../assets/img/free.png" class="free-badge" />
    <div class="free-badge-div"></div>
  </div>
</template>

<style scoped>
.part-one {
  box-shadow: 0 0.25rem 1rem 0 grey;
  border-radius: 15px;
  background-color: pink;
}

h2 {
  font-size: 31.25px;
}
.reward p {
  font-size: 16px;
}

.free-badge {
  width: 80px;
  float: right;
  margin-top: -12px;
}
.free-badge-div {
  float: right;
  width: 80px;
  box-shadow: 0 0.25rem 1rem 0 grey;
  height: 38px;
  margin-top: 21px;
  margin-right: -80px;
  border-radius: 10px;
}
</style>

<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <span class="brand-icon"> <img src="/pinkpanther.png" /> </span>Fast
        Food Pink Panther</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav mx-auto">
          <RouterLink class="nav-link" to="/">Početna</RouterLink>
          <RouterLink class="nav-link" to="/menu">Meni</RouterLink>
          <RouterLink class="nav-link" to="/gallery">Galerija</RouterLink>
          <RouterLink class="nav-link" to="/news">Novosti</RouterLink>
          <RouterLink class="nav-link" to="/aboutus">O nama</RouterLink>
          <RouterLink class="nav-link" to="/contact">Kontakt</RouterLink>
        </div>
        <div class="ms-auto navbar-language-div d-grid me-lg-3">
          <button type="button" class="btn btn-outline-danger">Language</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  min-height: 62px;
  border-bottom: 2px solid gray;
}

.navbar-brand {
  font-family: PinkPanther !important;
  font-size: 20px;
}
.brand-icon img {
  width: 40px;
}

.nav-link {
  display: flex !important;
  justify-content: center;
  margin-top: 3px;
  margin-bottom: 3px;
  font-size: 20px !important;
}

/* kad je mobile da bude pozadina roza */
@media (max-width: 992px) {
  .nav-link {
    background-color: pink;
  }
}

/* podigne lijevu i desnu stranu da bi ovo uzelo u sredini cijelu duzinu i onda postavi u sredinu */
@media (min-width: 992px) {
  .navbar-brand,
  .navbar-language-div {
    position: absolute;
  }

  .navbar-language-div {
    right: 0;
  }
}

/* kombinacija da itemi u navbaru ne prelaze preko loga */
@media (min-width: 991.98px) and (max-width: 1199.98px) {
  .navbar-nav {
    padding-left: 10% !important;
  }
}
</style>

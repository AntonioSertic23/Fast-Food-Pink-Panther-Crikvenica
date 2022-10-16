<script setup>
import { RouterLink } from "vue-router";

function CloseNavbar() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  if ($(".navbar-toggler").is(":visible")) {
    $(".navbar-collapse").collapse("toggle");
  }
}
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
          <RouterLink class="nav-link" @click="CloseNavbar()" to="/"
            >Početna</RouterLink
          >
          <RouterLink class="nav-link" @click="CloseNavbar()" to="/menu"
            >Meni</RouterLink
          >
          <RouterLink class="nav-link" @click="CloseNavbar()" to="/gallery"
            >Galerija</RouterLink
          >
          <RouterLink class="nav-link" @click="CloseNavbar()" to="/news"
            >Novosti</RouterLink
          >
          <RouterLink class="nav-link" @click="CloseNavbar()" to="/aboutus"
            >O nama</RouterLink
          >
          <RouterLink class="nav-link" @click="CloseNavbar()" to="/contact"
            >Kontakt</RouterLink
          >
          {{ $t("hello") }}
        </div>
        <div class="ms-auto navbar-language-div d-grid me-lg-3">
          <!-- <button type="button" class="btn btn-outline-danger">Language</button> -->

          <!-- <select class="form-select" v-model="$i18n.locale">
            <option
              v-for="locale in $i18n.availableLocales"
              :key="`locale-${locale}`"
              :value="locale"
            >
              {{ locale }}
            </option>
          </select> -->

          <!-- <button
            class="btn btn-info"
            @click="
              () => {
                $i18n.locale = 'en';
              }
            "
          >
            ENGLISH
          </button>
          <button
            class="btn btn-info"
            @click="
              () => {
                $i18n.locale = 'ja';
              }
            "
          >
            JAPANESE
          </button> -->

          <div class="dropdown">
            <button
              class="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Language - {{ $i18n.locale.toUpperCase() }}
            </button>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  @click="
                    () => {
                      $i18n.locale = 'hr';
                    }
                  "
                  ><img src="hr.png" class="me-3" /><span>Croatian</span></a
                >
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  @click="
                    () => {
                      $i18n.locale = 'en';
                    }
                  "
                  ><img src="en.png" class="me-3" /><span>English</span></a
                >
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  @click="
                    () => {
                      $i18n.locale = 'de';
                    }
                  "
                  ><img src="de.png" class="me-3" /><span>German</span></a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  min-height: 62px;
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

.dropdown button {
  background-color: #f977aa;
  text-transform: capitalize;
  font-size: 20px;
}

.dropdown-item {
  display: flex;
  align-items: center;
  font-size: 20px;
}
.dropdown-item img {
  height: 40px;
  width: 40px;
}

/* kad je mobile da bude pozadina roza */
@media (max-width: 992px) {
  .nav-link {
    background-color: pink;
  }

  .dropdown button {
    width: 100%;
    height: 54px;
    margin-top: 3px;
  }
  .dropdown ul {
    width: 100%;
    position: static;
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

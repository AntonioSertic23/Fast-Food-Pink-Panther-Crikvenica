<script setup>
import Navbar from "./components/Layout/Navbar.vue";
import Footer from "./components/Layout/Footer.vue";
</script>

<template>
  <Navbar />

  <div class="body-div">
    <RouterView />
  </div>

  <Footer />
</template>

<style scoped>
.body-div {
  margin-top: 68px;
}

@media (max-width: 992px) {
  .body-div {
    margin-top: 62px;
  }
}
</style>

<script setup>
import Navbar from "./components/Layout/Navbar.vue";
</script>

<template>
  <Navbar />

  <div class="body-div">
    <RouterView />
  </div>
</template>

<style scoped>
.body-div {
  margin-top: 68px;
}
</style>

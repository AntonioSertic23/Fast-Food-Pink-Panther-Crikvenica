<script>
export default {
  props: ["pageTitle", "pageSubTitle", "isSingleNews"],
};
</script>

<template>
  <div class="mb-5 pt-4 text-center col-lg-8 col-xxl-6 mx-auto">
    <p class="mb-3 menu-title">{{ pageTitle }}</p>

    <p
      class="mb-3 menu-subtitle"
      :class="{ 'text-muted': isSingleNews, 'news-date': isSingleNews }"
      v-if="pageSubTitle != ''"
    >
      {{ pageSubTitle }}
    </p>

    <div class="mx-auto pink-underline"></div>
  </div>
</template>

<style scoped>
.menu-title {
  font-family: "PinkPanther";
  font-size: 48.83px;
}

.menu-subtitle {
  font-family: "EBGaramondRegular";
  font-size: 25px;
}

.pink-underline {
  width: 60%;
  height: 5px;
  background-color: #f977aa;
  border-radius: 5px;
}

.news-date {
  font-size: 25px;
}
</style>

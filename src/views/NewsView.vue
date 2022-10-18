<script setup>
import { RouterLink } from "vue-router";
import PageTitle from "../components/UI/PageTitle.vue";

function ScrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<template>
  <section class="container mb-2 news-section">
    <PageTitle pageTitle="Novosti" />

    <div class="p-4 pb-0 pt-0">
      <div class="my-5">
        <div
          class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 justify-content-center"
        >
          <div class="col">
            <div class="card border-0 card-news">
              <div class="card-image">
                <img src="../assets/img/timeline_3_min.jpg" alt="..." />
              </div>
              <div class="card-body">
                <h5 class="card-title">Dan maškara</h5>
                <p class="card-text p-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Exercitationem earum asperiores accusantium magni? Maxime
                  molestias natus in illum cupiditate necessitatibus...
                </p>
                <div class="card-bottom text-end">
                  <RouterLink
                    class="btn"
                    to="/singlenews"
                    @click="ScrollToTop()"
                    >Pročitaj više...</RouterLink
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card border-0 card-news">
              <div class="card-image">
                <img src="../assets/img/timeline_1.jpg" alt="..." />
              </div>
              <div class="card-body">
                <h5 class="card-title">Službeno otvaranje</h5>
                <p class="card-text p-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Harum quas impedit velit provident in culpa consequatur
                  mollitia saepe incidunt porro...
                </p>
                <div class="card-bottom text-end">
                  <a href="single-news.html" class="btn">Pročitaj više...</a>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card border-0 card-news">
              <div class="card-image">
                <img src="../assets/img/timeline_2.jpg" alt="..." />
              </div>
              <div class="card-body">
                <h5 class="card-title">Nova dostava</h5>
                <p class="card-text p-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias, totam recusandae consectetur tempora molestiae
                  necessitatibus a voluptatibus veniam similique ad...
                </p>
                <div class="card-bottom text-end">
                  <a href="single-news.html" class="btn">Pročitaj više...</a>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card border-0 card-news">
              <div class="card-image">
                <img src="../assets/img/timeline_2.jpg" alt="..." />
              </div>
              <div class="card-body">
                <h5 class="card-title">Domaće meso</h5>
                <p class="card-text p-2">
                  Fast Food Pink Panther na svom rostilju pece meso sa Hr OPG-a
                  iz srca Like .... Tko je probao vjerujem da zna o čemu pricamo
                  te se nadamo da je prepoznao domace isamo domace. 2. stu 2021.
                </p>
                <div class="card-bottom text-end">
                  <a href="single-news.html" class="btn">Pročitaj više...</a>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card last-card border-0 card-news py-5">
              <div class="card-body last-card-body">
                <p class="card-text last-card-text-year text-center p-2">
                  2019.
                </p>
                <p class="card-text last-card-text text-center p-2">
                  Otvaranje Fast Food Pink Panthera u Crikvenici
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.news-title {
  text-align: center;
  font-family: "PinkPanther";
  font-size: 48.83px;
}

.card-news {
  height: 100%;
  display: flex;
  box-shadow: 0 0.25rem 1rem 0 grey;
  border-radius: 15px;
  background-color: pink;
}

.card-image img {
  height: 250px;
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.card-body {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.card-title {
  font-size: 31.25px;
}

.card-text {
  font-size: 16px;
}

.card-bottom a {
  font-size: 20px;
  background-color: #f977aa;
  box-shadow: 3px 3px 0.5rem grey;
}

.last-card {
  background-color: pink;
}
.last-card-body {
  justify-content: center;
}
.last-card-text-year {
  font-size: 39px;
}
.last-card-text {
  font-size: 31.25px;
}
</style>

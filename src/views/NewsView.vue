<script setup>
import { RouterLink } from "vue-router";
import PageTitle from "../components/UI/PageTitle.vue";
</script>

<template>
  <section class="container mb-2 news-section">
    <PageTitle pageTitle="Novosti" />

    <div class="p-4 pt-0">
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
                  <RouterLink class="btn" to="/singlenews"
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

          <div class="d-flex align-items-center">
            <p>
              nesto kao da naznaci da je tu pocetak bio, nesto u obliku
              obavjesti
            </p>
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
}

.card-image img {
  height: 250px;
  width: 100%;
  object-fit: cover;
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
  background-color: hotpink;
}
</style>

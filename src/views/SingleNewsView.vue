<script setup>
import Footer from "../components/Layout/Footer.vue";
import PageTitle from "../components/UI/PageTitle.vue";
</script>

<template>
  <section class="container mb-2 news-section">
    <PageTitle
      pageTitle="Dan maškara"
      pageSubTitle="19.9.2022."
      isSingleNews="true"
    ></PageTitle>
    <div
      class="p-4 pt-0 col-md-11 col-lg-10 col-xl-8 col-xxl-7 mx-auto text-center"
    >
      <div class="news-text my-5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          vitae non commodi ut blanditiis sunt animi, eos sit similique
          delectus? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsa a exercitationem adipisci quasi id veritatis.
        </p>
        <p>
          Repudiandae, sed cumque, minus consectetur recusandae aliquid officiis
          est placeat voluptate laudantium nesciunt quia mollitia, quasi cum
          dolorum aut incidunt aperiam consequuntur!
        </p>
        <p>Facilis porro alias excepturi obcaecati autem tempora.</p>
        <p>
          Dolor sit amet consectetur adipisicing elit. Unde sunt voluptatem
          mollitia nobis sit iure.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Id alias praesentium corrupti maiores. Possimus qui
          atque commodi dolorum suscipit modi, doloremque consequuntur quisquam,
          aliquid sint molestiae odio magnam expedita nisi!
        </p>
      </div>

      <div class="news-images col-md-8 mx-auto">
        <img class="w-100" src="../assets/img/timeline_3.jpg" alt="" />
      </div>
    </div>
  </section>

  <Footer />
</template>

<style scoped>
.news-text {
  font-size: 22px;
}
</style>

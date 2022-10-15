<template>
  <div class="jumbotron-section">
    <div class="background-image px-2">
      <h1 class="title">
        Dobrodošli na stranicu fast fooda Pink Panther Crikvenica
      </h1>
    </div>

    <div class="mx-3 my-5 text-center text-below-jumbotron">
      <h2>"Napunit ćemo vaš trbuščić ukusnom hranom uz brzu dostavu!"</h2>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: "EBGaramondItalic";
  src: URL("EB_Garamond/static/EBGaramond-Italic.ttf") format("truetype");
}

.background-image {
  background-size: cover;
  height: 250px;
  background-image: url("../../assets/img/2.jpg");
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 30px;
}

.title {
  color: white;
  text-shadow: 4px 3px 4px black;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 39px;
}

.text-below-jumbotron h2 {
  font-family: EBGaramondItalic;
  font-size: 31.25px;
}

@media (min-width: 992px) {
  .background-image {
    height: 350px;
  }

  .title {
    font-size: 61px;
  }
}
</style>

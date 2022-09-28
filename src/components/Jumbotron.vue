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
  background-image: url("../assets/img/background5.jpg");
  /*
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/img/backgroundtop.jpg");*/
  /* AKO JE PRE TAMNO ONDA TU VEC IMA ZA HOTPINK u komentaru https://www.rapidtables.com/web/color/pink-color.html*/
  /* background-image: linear-gradient(
        rgba(255, 105, 180, 0.5),
        rgba(255, 105, 180, 0.5)
      ),
      url("../img/backgroundtop.jpg"); */
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
}

@media (min-width: 992px) {
  .background-image {
    height: 320px;
  }

  .title {
    font-size: 61px;
  }
}
</style>

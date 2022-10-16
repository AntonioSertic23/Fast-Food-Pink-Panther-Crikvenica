import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import hr from "./locales/hr.json";
import en from "./locales/en.json";
import de from "./locales/de.json";

import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "hr",
  messages: {
    hr,
    en,
    de,
  },
});

const app = createApp(App);

app.use(router);

app.use(i18n).mount("#app");

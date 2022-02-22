import "./plugins/fontawesome";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/app.css";
import AppButton from "@/components/AppButton";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* add icons to the library */
library.add(faUserSecret);

createApp(App)
  .use(store)
  .use(router)
  .component("AppButton", AppButton)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

/**
 * fontawesome Css
 */
 import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

window.$ = window.jQuery = require('jquery');


createApp(App)
    .use(store)
    .use(router)
    .mount("#app");

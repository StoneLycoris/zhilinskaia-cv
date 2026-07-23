import "@/assets/styles/main.scss";

import { createApp } from "vue";

import App from "@/App.vue";
import { useTheme } from "@/composables/useTheme";
import { i18n } from "@/i18n";
import { setupPinia } from "@/stores/ui.store";

const app = createApp(App);

setupPinia(app);

const { initTheme } = useTheme();
initTheme();

app.use(i18n);

app.mount("#app");

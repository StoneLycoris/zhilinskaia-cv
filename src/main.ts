import { createApp } from 'vue'
import '@/assets/styles/main.scss'
import App from '@/App.vue'
import { setupPinia } from '@/store/ui.store'
import { useTheme } from '@/composables/useTheme'
import { i18n } from '@/i18n'

const app = createApp(App)

setupPinia(app)

const { initTheme } = useTheme()
initTheme()

app.use(i18n)

app.mount('#app')
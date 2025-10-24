import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './plugins/i18n'

import '@mdi/font/css/materialdesignicons.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './assets/main.css';
import { createPinia } from 'pinia'
import { getCookie } from './plugins/axios'

const app = createApp(App)
const pinia = createPinia();

app.config.devtools = false; 

app.use(router)
app.use(i18n)
app.use(pinia);

// await getCookie();

app.mount('#app')

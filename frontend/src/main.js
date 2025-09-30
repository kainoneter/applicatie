import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

import '@mdi/font/css/materialdesignicons.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './assets/main.css';

const app = createApp(App)

app.config.devtools = false; 

app.use(router)
app.use(i18n)

app.mount('#app')

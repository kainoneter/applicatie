import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './assets/main.css';

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: localStorage.getItem('theme') || 'light',
    themes: {
        dark: {
            colors: {
                primary: '#4B0082',
                background: '#434343',
                surface: '#2c2c2c',
                switch: '#ccc',
            },
        },
        light: {
            colors: {
                primary: '#4B0082',
                surface: '#DCDCDC',
                switch: '#ffff',
            },
        }
    }
  },
  icons: {
      iconfont: 'mdi',
  },
  options: {
      customProperties: true
  },
})

const app = createApp(App)

app.config.devtools = false; 

app.use(router)
app.use(vuetify)
app.use(i18n)

app.mount('#app')

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

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: localStorage.getItem('theme') || 'light',
    themes: {
        dark: {
            colors: {
                secondary: '#212e3b',
            },
        },
        light: {
            colors: {
                surface: '#ccc',
                secondary: '#b7c4d1',
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

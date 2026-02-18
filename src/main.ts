import './assets/main.css'

import CoreuiVue from '@coreui/vue'
import '@coreui/coreui/dist/css/coreui.css'
import { CIcon } from '@coreui/icons-vue'
import * as icons from '@coreui/icons'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(CoreuiVue)
app.component('CIcon', CIcon)
app.provide('icons', icons)

app.use(createPinia())
app.use(router)

app.mount('#app')

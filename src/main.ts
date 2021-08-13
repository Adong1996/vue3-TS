import { createApp } from 'vue'

import './assets/css/bass.less'

import { registerApp } from './globel/index'

import App from './App.vue'

import router from './router/index'

import { store } from './store'

const app = createApp(App)

registerApp(app)

app.use(router).use(store).mount('#app')

// Axios
import hyRequest from './service/index'

import { createApp } from 'vue'

import './assets/css/bass.less'

import { registerApp } from './globel/index'

import App from './App.vue'

import router from './router/index'

import { store } from './store'

import { setupStore } from '@/store/index'

const app = createApp(App)

registerApp(app)

app.use(router).use(store).mount('#app')

setupStore()

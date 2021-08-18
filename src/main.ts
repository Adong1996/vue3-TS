import { createApp } from 'vue'

import './assets/css/bass.less'

import { registerApp } from './globel/index'

import App from './App.vue'

import router from './router/index'

import { store } from './store'

import { setupStore } from '@/store/index'

const app = createApp(App)

registerApp(app)
//里面有动态注册路由，代码执行顺序要放在 app.use(router)前面
setupStore()

app.use(router).use(store).mount('#app')

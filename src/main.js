import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Icon from '@/components/svgIcon/SvgIcon.vue'

// 发布版本清除localStorage
if (!import.meta.env.DEV) {
  const localAppInfo = JSON.parse(localStorage.getItem('APP_INFO') || '{}')
  if (localAppInfo.lastBuildTime !== __APP_INFO__.lastBuildTime) {
    localStorage.clear()
    localStorage.setItem('APP_INFO', JSON.stringify(__APP_INFO__))
  }
}

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('Icon', Icon)

app.mount('#app')

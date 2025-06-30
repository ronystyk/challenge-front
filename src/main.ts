import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { router } from './router'
import './assets/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')


router.beforeEach((to, from, next) => {
  const baseTitle = 'Challenge Vue + Go'
  document.title = to.meta.title
    ? `${to.meta.title} - ${baseTitle}`
    : baseTitle
  next()
})
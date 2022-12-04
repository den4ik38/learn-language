import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from '@/store'
import components from '@/components/UI/index'

const app = createApp(App)


  app.use(router)
      .use(store)
      .mount('#app')

components.forEach(component => {
  app.component(component.name, component)
})
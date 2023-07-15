// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {lazyPlugin} from "@/directives";
// import {getCateGory} from "@/apis/testApi";
// getCateGory().then(res => {
//     console.log(res)
// })

const app = createApp(App)

app.use(createPinia())
app.use(router)
// 使用懒加载插件
app.use(lazyPlugin)
app.mount('#app')


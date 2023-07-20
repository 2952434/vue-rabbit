// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 懒加载插件
import {lazyPlugin} from "@/directives";
// import {getCateGory} from "@/apis/testApi";
// getCateGory().then(res => {
//     console.log(res)
// })
// 引入全局组件
import {componentPlugin} from "@/components";

const app = createApp(App)

app.use(createPinia())
app.use(router)
// 使用懒加载插件
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')


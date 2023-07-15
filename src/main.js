// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {useIntersectionObserver} from "@vueuse/core/index";

// import {getCateGory} from "@/apis/testApi";
// getCateGory().then(res => {
//     console.log(res)
// })

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

app.directive('img-lazy',{
    mounted(el,binding) {
        // el: 指定绑定的那个元素 img
        // binding: binding.value 指定等于后面绑定的表达式的值 图片url
        console.log(el,binding.value)
        useIntersectionObserver(
            el,
            ([{isIntersecting}]) => {
                console.log(isIntersecting)
                if (isIntersecting) {
                    el.src = binding.value
                    stop()
                }
            }
        )
    }
})

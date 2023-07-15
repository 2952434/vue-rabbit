import {useIntersectionObserver} from "@vueuse/core/index";


/**
 * 懒加载图片插件
 * @type {{install(*): void}}
 */
export const lazyPlugin = {
    install(app) {
        app.directive('img-lazy',{
            mounted(el,binding) {
                // el: 指定绑定的那个元素 img
                // binding: binding.value 指定等于后面绑定的表达式的值 图片url
                // console.log(el,binding.value)
                const {stop} = useIntersectionObserver(
                    el,
                    ([{isIntersecting}]) => {
                        // console.log(isIntersecting)
                        if (isIntersecting) {
                            el.src = binding.value
                            stop()
                        }
                    }
                )
            }
        })

    }
}

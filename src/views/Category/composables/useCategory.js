// 分类业务逻辑

import {onMounted, ref} from "vue";
import {onBeforeRouteUpdate, useRoute} from "vue-router/dist/vue-router";
import {getTopCategoryAPI} from "@/apis/category";

export function useCategory() {
    const categoryData = ref({})

    const route = useRoute()

    const getCategory = async (id) => {
        const res = await getTopCategoryAPI(id);

        categoryData.value = res.result
    }

    // 路由缓存问题
// watch(route, () => {
//   getCategory(route.params.id)
// })

    onBeforeRouteUpdate((to) => {
        getCategory(to.params.id)
    })

    onMounted(() => {
        getCategory(route.params.id)
    })

    return {
        categoryData
    }
}

import { ref} from 'vue'
import { defineStore } from 'pinia'
import {getCategoryAPI} from "@/apis/layoyt";

export const useCategoryStore  = defineStore('category', () => {
    //导航列表数据的管理
    // state 导航列表数据
    const cateGoryList = ref([])

    // cation 获取导航数据的方法
    const getCategory = async () => {
        const res = await getCategoryAPI()
        cateGoryList.value = res.result
    }

    return {
        cateGoryList,
        getCategory
    }
})

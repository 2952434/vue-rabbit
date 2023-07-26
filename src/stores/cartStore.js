// 封装购物车模块

import {defineStore} from "pinia";
import {ref} from "vue";
import {computed} from "vue";

export const useCartStore = defineStore('cart', () => {
    // 1、定义state - cartList
    const cartList = ref([])
    // 2、定义action - addCart
    const addCart = (goods) => {
        // 添加购物车操作
        // 已添加过 - count + 1
        // 没有添加过 - 直接push
        // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就添加
        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        // console.log(item)
        if (item) {
            // 找到了
            item.count++
        } else {
            // 没找到
            cartList.value.push(goods)
        }
    }
    const delCart = (skuId) => {
        // 匹配skuId获取下标通过splice函数删除
        const index = cartList.value.findIndex(item => item.skuId === skuId);
        cartList.value.splice(index, 1)
    }

    // 计算属性
    // 1、总的数量 所有项的count之和
    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
    // 2、总价 所有项的count*price之和
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))


    // 单选功能
    const singleCheck = (skuId, selected) => {
        // 通过skuId找到要修改的那一项 然后把它的selected修改为传过来的selected
        const item = cartList.value.find((item) => item.skuId === skuId)
        item.selected = selected
    }

    return {
        cartList,
        allCount,
        allPrice,
        addCart,
        delCart,
        singleCheck
    }

}, {
    persist: true
})

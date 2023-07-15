import httpInstance from "@/utils/http";

/**
 * 获取一级导航渲染
 * @returns {*}
 */
export function getCategoryAPI() {
    return httpInstance({
        url: '/home/category/head'
    })
}

import httpInstance from "@/utils/http";

/**
 * 获取轮播图图片
 * @returns {*}
 */
export const getBannerAPI = () => {
    return httpInstance({
        url: 'home/banner'
    })
}

/**
 * 获取新鲜好物
 * @returns {*}
 */
export const findNewAPI = () => {
    return httpInstance({
        url: '/home/new'
    })
}

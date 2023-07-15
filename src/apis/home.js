import httpInstance from "@/utils/http";

/**
 * 获取轮播图图片
 * @returns {*}
 */
export function getBannerAPI() {
    return httpInstance({
        url: 'home/banner'
    })
}

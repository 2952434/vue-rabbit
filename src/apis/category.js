import httpInstance from "@/utils/http";

/**
 * 获取分类数据
 * @param id 分类id
 * @returns {*}
 */
export const getTopCategoryAPI = (id) => {
    return httpInstance({
        url: '/category',
        params: {
            id
        }
    })
}

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

/**
 * @description: 获取二级分类列表数据
 * @param {*} id 分类id
 * @return {*}
 */
export const getCategoryFilterAPI = (id) => {
    return httpInstance({
        url: '/category/sub/filter',
        params: {
            id
        }
    })
}

/**
 * 获取导航数据
 * @param data{{
 *      categoryId: 1005000 ,
 *      page: 1,
 *      pageSize: 20,
 *      sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
 *    }}
 * @returns {*}
 */
export function getSubCategoryAPI(data) {
    return httpInstance({
        url: '/category/goods/temporary',
        method: 'POST',
        data
    })
}

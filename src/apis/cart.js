// 购物车相关接口
import httpInstance from "@/utils/http";

/**
 * 加入购物车接口
 * @param skuId
 * @param count
 * @returns {*}
 */
export const insertCartAPI = ({skuId, count}) => {
    return httpInstance({
        url: '/member/cart',
        method: 'POST',
        data: {
            skuId,
            count
        }
    })
}

/**
 * 获取最新的购物车列表
 * @returns {*}
 */
export const findNewCartListAPI = () => {
    return httpInstance({
        url: '/member/cart'
    })
}

/**
 *  删除购物车逻辑
 * @param ids
 * @returns {*}
 */
export const delCartAPI = (ids) => {
    return httpInstance({
        url: 'member/cart',
        method: 'DELETE',
        data: {
            ids
        }
    })
}

/**
 * 合并购物车列表
 * @param data
 * @returns {*}
 */
export const mergeCartAPI = (data) => {
    return httpInstance({
        url: '/member/cart/merge',
        method: 'POST',
        data
    })
}

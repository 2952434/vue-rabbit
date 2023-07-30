// 购物车相关接口
import httpInstance from "@/utils/http";

/**
 * 加入购物车接口
 * @param skuId
 * @param count
 * @returns {*}
 */
export const insertCartAPI = ({skuId,count}) => {
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

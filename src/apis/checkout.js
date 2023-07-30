// 购物车结算
import httpInstance from "@/utils/http";

/**
 * 获取详情接口
 * @returns {*}
 */
export const getCheckInfoAPI = () => {
  return httpInstance({
      url: '/member/order/pre'
  })
}

/**
 * 创建订单
 * @param data
 * @returns {*}
 */
export const createOrderAPI = (data) => {
    return httpInstance({
        url: '/member/order',
        method: 'POST',
        data
    })
}

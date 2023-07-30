// 订单接口
import httpInstance from "@/utils/http";

/**
 * 获取订单列表
 * @param params
 * @returns {*}
 */
export const getUserOrder = (params) => {
  return httpInstance({
      url:'/member/order',
      method:'GET',
      params
  })
}

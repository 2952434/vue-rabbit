// 支付接口
import httpInstance from "@/utils/http";

/**
 * 获取订单信息
 * @param id
 * @returns {*}
 */
export const getOrderAPI = (id) => {
  return httpInstance({
      url: `/member/order/${id}`
  })
}

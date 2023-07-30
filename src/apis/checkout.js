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

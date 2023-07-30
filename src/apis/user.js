import httpInstance from "@/utils/http";

/**
 * 登录
 * @param account
 * @param password
 * @returns {*}
 */
export const loginAPI = ({account,password}) => {
  return httpInstance({
      url: '/login',
      method: 'POST',
      data: {
          account,
          password
      }
  })
}

/**
 * 猜你喜欢
 * @param limit
 * @returns {*}
 */
export const getLikeListAPI = ({ limit = 4 }) => {
    return httpInstance({
        url:'/goods/relevant',
        params: {
            limit
        }
    })
}

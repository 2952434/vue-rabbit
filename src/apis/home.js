import httpInstance from "@/utils/http";

/**
 * 获取轮播图图片
 * @returns {*}
 */
export const getBannerAPI = (params = {}) => {
    // 默认为1 商品为2
    const { distributionSite = '1' } = params
    return httpInstance({
        url: 'home/banner',
        params: {
            distributionSite
        }
    })
}

/**
 * 获取新鲜好物
 * @returns {*}
 */
export const findNewAPI = () => {
    return httpInstance({
        url: '/home/new'
    })
}

/**
 * 获取人气推荐
 * @returns {*}
 */
export const findHotApi = () => {
    return httpInstance({
        url: '/home/hot'
    })
}


/**
 * 获取homeProduct数据
 * @returns {*}
 */
export const getGoodsAPI = () => {
  return httpInstance({
      url: '/home/goods'
  })
}

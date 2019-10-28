
import request from './request.js'

//登录接口
export const reqLogin = (params, isloading) => request({ url: "/login", method: "POST", params }, isloading);

//获取首页评价列表
export const getHomeReviewList = (params, isloading) => request({ url: "/home/review/list", method: "GET", params }, isloading);

import request from './request.js'

//登录接口
export const reqLogin = (params, isloading) => request({ url: "/login", method: "POST", params }, isloading);

//获取首页安卓信息
export const reqAndroidInfo = (params, isloading) => request({ url: "/home/android", method: "GET", params }, isloading);

//获取首页IOS信息
export const reqIosInfo = (params, isloading) => request({ url: "/home/ios", method: "GET", params }, isloading);

//获取首页更多信息
export const reqHomeMore = (params, isloading) => request({ url: "/home/more", method: "GET", params }, isloading);

//获取首页视频类信息
export const reqVideoInfo = (params, isloading) => request({ url: "/home/video", method: "GET", params }, isloading);

//获取首页视频列表信息
export const reqVideoList = (params, isloading) => request({ url: "/home/video/list", method: "GET", params }, isloading);


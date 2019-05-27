/*
 包含N个接口请求函数得模块
 返回值：promise
 */
import ajax from './ajax'
const BASE_URL = '/api'
// 1. 根据经纬度获取位置信息
export const reqAddress = (geohash) => ajax('${BASE_URL}/position/${geohash}')
// 2.获取食物分类列表
export const reqFoodCategorys = () => ajax(BASE_URL + '/index_category')
// 3.根据经纬度获取商铺列表
export const reqShops = (longitude,latitude) => ajax(BASE_URL + '/shops',{longitude,latitude})
// 4、根据经纬度和关键字搜索商铺列表
export const reqSearchShops = (keyword,geohash) => ajax('/search_shops',{keyword,geohash})
// 5、获取一次性验证码
export const reqCaptcha = () => ajax('/captcha')
// 6、用户名密码登陆
export const reqPwdLogin = (name,pwd,catcha) => ajax('/login_pwd',{
  name,
  pwd,
  catcha
},'POST')
// 7、发送短信验证码
export const reqSendCode = (phone) => ajax('/sendcode',{phone})
// 8、手机号验证码登陆
export const reqSmsLogin = (phone,code) => ajax('/login_sms',{
  phone,
  code
},'POST')
// 9、根据会话获取用户信息
export const reqUser = () => ajax('/userinfo')
// 10、用户登出
export const reqLogout = () => ajax('/logout')

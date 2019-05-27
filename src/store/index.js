/*
vuex最核心得管理对象store
操作vuex三步：
  1、去调用action去发起请求
  2、去读状态
  3、去写模板显示
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})


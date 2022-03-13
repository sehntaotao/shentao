/*
 * @Author: your name
 * @Date: 2021-04-29 14:53:11
 * @LastEditTime: 2021-09-28 12:01:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \srm-frontend_v4.5\src\main.js
 */
// 引入@babel/polyfill处理兼容 
import '@babel/polyfill'

import Vue from 'vue'

import App from './App.vue'
import Storage from 'vue-ls'
import router from './router'
import store from './store/'

import { VueAxios } from '@/utils/request'
import { onloadAfterEmit, injectScript, srmI18n, getLangAccount, hasOptAuth } from '@/utils/util'
import Viser from 'viser-vue'
import './basicSettings/antd.config.js'

import 'xe-utils'
import './plugins/table'

import '@/assets/less/base.less'
import '@/basicSettings/permission'
import '@/utils/filter'
// import VueApexCharts from 'vuec-apexcharts'

import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'

import {
    ACCESS_TOKEN,
    DEFAULT_COLOR,
    DEFAULT_THEME,
    DEFAULT_LAYOUT_MODE,
    DEFAULT_COLOR_WEAK,
    DEFAULT_FIXED_HEADER,
    DEFAULT_FIXED_HEADER_HIDDEN,
    DEFAULT_FIXED_SIDEMENU,
    DEFAULT_CONTENT_WIDTH_TYPE,
    DEFAULT_MULTI_PAGE,
    DEFAULT_TOGGLE_SETPATH,
    DEFAULT_LANG
} from '@/store/mutation-types'
import config from '@/basicSettings/defaultSettings'
import JDictSelectTag from './components/dict/index.js'

import hasPermission from '@/utils/hasPermission'
import global from '@/utils/global'
import vueBus from '@/utils/vueBus'
import elsComponents from '@/components/els/index'

import { init, bind } from './utils/custom-life-cycle'
// 初始化生命周期函数, 必须在Vue实例化之前确定合并策略
init()

// 引入Echarts
import ECharts from 'vue-echarts'
import echarts from 'echarts'   // eslint-disable-line
Vue.component('vue-echarts', ECharts)
Vue.config.productionTip = false
Vue.use(Storage, config.storageOptions)
Vue.use(VueAxios, router)
Vue.use(Viser)
Vue.use(hasPermission)
Vue.use(JDictSelectTag)
Vue.use(global) // 全局变量

import i18n from './i18n'

/*Vue.use(Print)*/
Vue.use(preview)
Vue.use(vueBus)
Vue.use(elsComponents)
Vue.prototype.$srmI18n = srmI18n
Vue.prototype.$getLangAccount = getLangAccount
Vue.prototype.$hasOptAuth = hasOptAuth

const vm = new Vue({
    router,
    store,
    i18n,
    mounted () {
        store.commit('SET_SIDEBAR_TYPE', true)
        store.commit('TOGGLE_THEME', Vue.ls.get(DEFAULT_THEME, config.navTheme))
        store.commit('TOGGLE_LAYOUT_MODE', Vue.ls.get(DEFAULT_LAYOUT_MODE, config.layout))
        store.commit('TOGGLE_FIXED_HEADER', Vue.ls.get(DEFAULT_FIXED_HEADER, config.fixedHeader))
        store.commit('TOGGLE_FIXED_SIDERBAR', Vue.ls.get(DEFAULT_FIXED_SIDEMENU, config.fixSiderbar))
        store.commit('TOGGLE_CONTENT_WIDTH', Vue.ls.get(DEFAULT_CONTENT_WIDTH_TYPE, config.contentWidth))
        store.commit('TOGGLE_FIXED_HEADER_HIDDEN', Vue.ls.get(DEFAULT_FIXED_HEADER_HIDDEN, config.autoHideHeader))
        store.commit('TOGGLE_WEAK', Vue.ls.get(DEFAULT_COLOR_WEAK, config.colorWeak))
        store.commit('TOGGLE_COLOR', Vue.ls.get(DEFAULT_COLOR, config.primaryColor))
        store.commit('SET_TOKEN', Vue.ls.get(ACCESS_TOKEN))
        store.commit('SET_MULTI_PAGE', Vue.ls.get(DEFAULT_MULTI_PAGE, config.multipage))
        store.commit('TOGGLE_SETPATH', Vue.ls.get(DEFAULT_TOGGLE_SETPATH, config.setPath))
        store.commit('SET_SIDE_MENU_MODE', Vue.ls.get('SIDEMENUMODE', '0'))
        store.commit('TOGGLE_LANG', Vue.ls.get(DEFAULT_LANG))
    },
    render: h => h(App)
}).$mount('#app')

// 将rootVm 绑定到生命周期函数监听里面
bind(vm)

// 监听onload事件触发
window.addEventListener('load', () => {
    injectScript(`${process.env.BASE_URL}im/layim-v3.9.6/dist/layui.js`)
    onloadAfterEmit()
})

import Vue from 'vue'
import router from '../router'
import store from '../store'
import NProgress from 'nprogress' // progress bar
import {Modal} from 'ant-design-vue'
import 'nprogress/nprogress.css' // progress bar style
// import notification from 'ant-design-vue/es/notification'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { generateIndexRouter } from '@/utils/util'
import { ROUTER_WHITE_LIST } from '@/utils/const'
import { USER_INFO } from '@/store/mutation-types'
import { formatDate } from '@/utils/util.js'
import watermark from '@/utils/watermark.js'
import { USER_COMPANYSET } from '@/store/mutation-types'
import { srmI18n, getLangAccount } from '@/utils/util'


NProgress.configure({ showSpinner: false }) // NProgress Configuration
const watermarkFn = () => {
    if (Vue.ls.get(USER_INFO)) {
        let userInfo = Vue.ls.get(USER_INFO)
        let waterMarkTip= userInfo.elsAccount + '-' + userInfo.subAccount + '-' + formatDate(new Date().getTime(), 'yyyy/MM/dd')
        let companySet = Vue.ls.get(USER_COMPANYSET) || {}
        console.log('companySet', companySet)
        if (companySet.watermark && companySet.watermark === '1') {
            watermark.set(waterMarkTip)
        }
    }
}
router.beforeEach((to, from, next) => {
    NProgress.start() // start progress bar
    if (Vue.ls.get(ACCESS_TOKEN)) {
        watermarkFn()
        /* has token */
        if (to.path === '/user/login') {
            next({ path: '/' })
            NProgress.done()
        } else {
            if (store.getters.permissionList.length === 0) {
                store.dispatch('GetPermissionList').then(res => {
                    const menuData = res.result.menu
                    console.log(res.message)
                    if (menuData === null || menuData === '' || menuData === undefined) {
                        return
                    }
                    let constRoutes = []
                    constRoutes = generateIndexRouter(menuData)
                    console.log(constRoutes)
                    // 添加主界面路由
                    store.dispatch('UpdateAppRouter',  { constRoutes }).then(() => {
                        // 根据roles权限生成可访问的路由表
                        // 动态添加可访问路由表
                        router.addRoutes(store.getters.addRouters)
                        const redirect = decodeURIComponent(from.query.redirect || to.path)
                        if (to.path === redirect) {
                            // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
                            next({ ...to, replace: true })
                        } else {
                            // 跳转到目的路由
                            next({ path: redirect })
                        }
                    })
                }).catch((errorData) => {
                    NProgress.done()
                    if (errorData && errorData.result && errorData.result.menu && !errorData.result.menu.length) {
                        Modal.confirm({
                            title: srmI18n(`${getLangAccount()}#i18n_title_systemPrompt`, '系统提示'),
                            content: srmI18n(`${getLangAccount()}#i18n_title_accountConfiguredMenuPermissionPleaseContactAdministrator`, '该账号未配置菜单权限，请联系管理员')
                        })
                    }
                    store.dispatch('Logout').then(() => {
                        next({ path: '/user/login', query: { redirect: to.fullPath } })
                    })
                })
            } else {
                if(store.state.app.changeTabConfirm) {
                    Modal.confirm({
                        content: srmI18n(`${getLangAccount()}#i18n_title_currentIsEditingStatusSureToLeave`, '当前处于编辑状态，是否确定离开?'),
                        onOk: () => {
                            next()
                            store.dispatch('SetTabConfirm', false)
                        }
                    })
                }else {
                    next()
                }
            }
        }
    } else {
        if (ROUTER_WHITE_LIST.indexOf(to.path) !== -1) {
            // 在免登录白名单，直接进入
            next()
        } else {
            next({ path: '/user/login', query: { redirect: to.fullPath } })
            NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
        }
    }
})

router.afterEach(() => {
    NProgress.done() // finish progress bar
})

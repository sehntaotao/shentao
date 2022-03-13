<!--
 * @Author: your name
 * @Date: 2021-03-29 14:02:20
 * @LastEditTime: 2021-07-22 18:05:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \srm-frontend_v4.5\src\App.vue
-->
<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <router-view />
    </div>
  </a-config-provider>
</template>
<script>
// import enquireScreen from '@/utils/device'
import {ConfigProvider} from 'ant-design-vue'
import { ACCESS_TOKEN, DEFAULT_LANG } from '@/store/mutation-types'
export default {
    components: {
        AConfigProvider: ConfigProvider
    },
    computed: {
        locale () {
            return this.$i18n.messages[this.$i18n.locale]
        }
    },
    mounted () {
        if (this.$ls.get(ACCESS_TOKEN)) {
            this.$store.dispatch('modifyCompanyListLangData')
        } else {
            this.$store.dispatch('modifySysListLangData')
        }
    }
    // created () {
    // const that = this
    // enquireScreen(deviceType => {
    // // tablet
    //     if (deviceType === 0) {
    //         that.$store.commit('TOGGLE_DEVICE', 'mobile')
    //         that.$store.dispatch('setSidebar', false)
    //     }
    //     // mobile
    //     else if (deviceType === 1) {
    //         that.$store.commit('TOGGLE_DEVICE', 'mobile')
    //         that.$store.dispatch('setSidebar', false)
    //     }
    //     else {
    //         that.$store.commit('TOGGLE_DEVICE', 'desktop')
    //         that.$store.dispatch('setSidebar', true)
    //     }

    // })
    // }
}
</script>
<style>
  #app {
    height: 100%;
  }
</style>
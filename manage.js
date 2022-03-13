import { axios } from '@/utils/request'

const api = {
    user: '/api/user',
    role: '/api/role',
    service: '/api/service',
    permission: '/api/permission',
    permissionNoPager: '/api/permission/no-pager'
}

export default api

//post
export function postAction (url, parameter, config) {
    let params = {
        url: url,
        method: 'POST',
        data: parameter
    }
    if (config) {
        Object.assign(params, config)
    }
    return axios(params)
}

//post method= {post | put}
export function httpAction (url, parameter, method) {
    return axios({
        url: url,
        method: method,
        data: parameter
    })
}

//put
export function putAction (url, parameter) {
    return axios({
        url: url,
        method: 'post',
        data: parameter
    })
}

//get
export function getAction (url, parameter, config) {
    let params = {
        url: url,
        method: 'get',
        params: parameter
    }
    if (config) {
        Object.assign(params, config)
    }
    return axios(params)
}

//deleteAction
export function deleteAction (url, parameter) {
    return axios({
        url: url,
        method: 'get',
        params: parameter
    })
}

export function getUserList (parameter) {
    return axios({
        url: api.user,
        method: 'get',
        params: parameter
    })
}

export function getRoleList (parameter) {
    return axios({
        url: api.role,
        method: 'get',
        params: parameter
    })
}

export function getServiceList (parameter) {
    return axios({
        url: api.service,
        method: 'get',
        params: parameter
    })
}

export function getPermissions (parameter) {
    return axios({
        url: api.permissionNoPager,
        method: 'get',
        params: parameter
    })
}

// id == 0 add     post
// id != 0 update  put
export function saveService (parameter) {
    return axios({
        url: api.service,
        method: 'post',
        data: parameter
    })
}

/**
 * 下载文件 用于excel导出
 * @param url
 * @param parameter
 * @returns {*}
 */
export function downFile (url, parameter) {
    return axios({
        url: url,
        params: parameter,
        method: 'get',
        responseType: 'blob'
    })
}

export function getSuperOrgByBus (url, parameter) {
    return axios({
        url: url,
        method: 'get',
        params: parameter
    })
}
import { getAction, deleteAction, putAction, postAction} from '@/api/manage'
//角色管理
const addRole = (params)=>postAction('/account/role/add', params)
const editRole = (params)=>putAction('/account/role/edit', params)
//租户管理
const addTenant = (params)=>postAction('/account/elsTenant/add', params)
const editTenant = (params)=>putAction('/account/elsTenant/edit', params)
const checkRoleCode = (params)=>getAction('/account/role/checkRoleCode', params)
const queryall = (params)=>getAction('/account/role/queryall', params)

//用户管理
const addUser = (params)=>postAction('/account/elsSubAccount/add', params)
const editUser = (params)=>putAction('/account/elsSubAccount/edit', params)
const queryUserRole = (params)=>getAction('/account/elsSubAccount/queryUserRole', params)
const getUserList = (params)=>getAction('/account/elsSubAccount/list', params)
const frozenBatch = (params)=>putAction('/account/elsSubAccount/frozenBatch', params)
//验证用户是否存在
const checkOnlyUser = (params)=>getAction('/account/elsSubAccount/checkOnlyUser', params)
//改变密码
const changPassword = (params)=>putAction('/account/elsSubAccount/changPassword', params)

//权限管理
const addPermission= (params)=>postAction('/account/permission/add', params)
const editPermission= (params)=>putAction('/account/permission/edit', params)
const editCompanyPermission= (params)=>putAction('/account/permission/companyEdit', params)
const getPermissionList = (params)=>getAction('/account/permission/list', params)
const getCompanyPermissionList = (params)=>getAction('/account/permission/getCompanyMenuList', params)

const getSystemMenuList = (params)=>getAction('/account/permission/getSystemMenuList', params)
const getSystemSubmenu = (params)=>getAction('/account/permission/getSystemSubmenu', params)


const queryTreeList = (params)=>getAction('/account/permission/queryTreeList', params)
const queryTreeListForRole = (params)=>getAction('/account/role/queryTreeList', params)
const queryListAsync = (params)=>getAction('/account/permission/queryListAsync', params)
const queryRolePermission = (params)=>getAction('/account/permission/queryRolePermission', params)
const queryCompanyPermission = (params)=>getAction('/account/permission/queryCompanyPermission', params)
const saveRolePermission = (params)=>postAction('/account/permission/saveRolePermission', params)
const saveCompanyPermission = (params)=>postAction('/account/permission/saveCompanyPermission', params)
const queryPermissionsByUser = (params)=>getAction('/account/permission/getUserPermissionByToken', params)
const loadAllRoleIds = (params)=>getAction('/account/permission/loadAllRoleIds', params)
const getPermissionRuleList = (params)=>getAction('/account/permission/getPermRuleListByPermId', params)
const queryPermissionRule = (params)=>getAction('/account/permission/queryPermissionRule', params)
const queryUserSensitive = (params)=>getAction('/sensitive/authSensitive/list', params)
const saveAuthSensitive = (params)=>postAction('/sensitive/authSensitive/saveauthSensitive', params)
const queryAuthSensitive = (params)=>getAction('/sensitive/authSensitive/queryAuthSensitive', params)

// 部门管理 queryRolePermission
const queryDepartTreeList = (params)=>getAction('/depart/queryTreeList', params)
const queryIdTree = (params)=>getAction('/depart/queryIdTree', params)
const queryParentName   = (params)=>getAction('/depart/queryParentName', params)
const searchByKeywords   = (params)=>getAction('/depart/searchBy', params)
const deleteByDepartId   = (params)=>deleteAction('/depart/delete', params)

//日志管理
//const getLogList = (params)=>getAction("/log/list",params);
const deleteLog = (params)=>deleteAction('/log/delete', params)
const deleteLogList = (params)=>deleteAction('/log/deleteBatch', params)

//数据字典
const addDict = (params)=>postAction('/base/dict/add', params)
const editDict = (params)=>putAction('/base/dict/edit', params)
const treeList = (params)=>getAction('/base/dict/treeList', params)
const addDictItem = (params)=>postAction('/base/dictItem/add', params)
const editDictItem = (params)=>putAction('/base/dictItem/edit', params)

//字典标签专用（通过code和busAccount获取字典数组）
export const ajaxFindDictItems = (params)=>postAction('/base/dict/findDictItems', params)
export const ajaxFindCount = (url)=>getAction(url)

//自动完成专用（通过关键字匹配）
export const ajaxGetKeyword = (code, params)=>getAction(`/base/dict/getKeyword/${code}`, params)

//自定义列专用（通过code获取自定义列）
export const ajaxGetColumns = (code, params)=>getAction(`/base/userColumnDefine/queryCurrentUserColumnDefineJson/${code}`, params)
//自定义列专用（通过code获取自定义列）
export const ajaxGetAllColumns = (code, params)=>getAction(`/base/userColumnDefine/queryCurrentUserColumnDefine/${code}`, params)

//系统通告
const doReleaseData = (params)=>getAction('/annountCement/doReleaseData', params)
const doReovkeData = (params)=>getAction('/annountCement/doReovkeData', params)
//获取系统访问量
const getLoginfo = (params)=>getAction('/loginfo', params)
const getVisitInfo = (params)=>getAction('/sys/visitInfo', params)
//数据日志访问
// const getDataLogList = (params)=>getAction("/dataLog/list",params);

// 根据部门主键查询用户信息
const queryUserByDepId = (params)=>getAction('/account/elsSubAccount/queryUserByDepId', params)

// 查询用户角色表里的所有信息
const queryUserRoleMap = (params)=>getAction('/account/elsSubAccount/queryUserRoleMap', params)
// 重复校验
const duplicateCheck = (params)=>getAction('/base/duplicate/check', params)
// 加载分类字典
const loadCategoryData = (params)=>getAction('/base/category/loadAllData', params)

// 数据字典添加重复校验
const duplicateCheck_2 = (params)=>getAction('/base/duplicate/checkDictExist', params)

// 国际化-前端获取系统级数据 /els/base/i18n/getSysList/{language}
const getSysListLang = (language)=> getAction(`/base/i18n/noToken/getSysList/${language}`)

// 国际化-前端获取当前登录企业级数据 /els/base/i18n/getCompanyList/{language}
const getCompanyListLang = (language)=> getAction(`/base/i18n/getCompanyList/${language}`)

// 国际化-前端获取指定企业级数据(busAccount业务所属方) /els/base/i18n/getI18nByBusAccount/{language}/{busAccount}
const getI18nByBusAccountLang = (language, busAccount)=> getAction(`/base/i18n/getI18nByBusAccount/${language}/${busAccount}`)
export {
    // imgView,
    // doMian,
    addRole,
    editRole,
    addTenant,
    editTenant,
    checkRoleCode,
    addUser,
    editUser,
    queryUserRole,
    getUserList,
    queryall,
    frozenBatch,
    checkOnlyUser,
    changPassword,
    getPermissionList,
    getCompanyPermissionList,
    addPermission,
    editPermission,
    editCompanyPermission,
    queryTreeList,
    queryListAsync,
    queryRolePermission,
    queryCompanyPermission,
    saveRolePermission,
    saveCompanyPermission,
    queryPermissionsByUser,
    loadAllRoleIds,
    getPermissionRuleList,
    queryPermissionRule,
    queryDepartTreeList,
    queryIdTree,
    queryParentName,
    searchByKeywords,
    deleteByDepartId,
    deleteLog,
    deleteLogList,
    addDict,
    editDict,
    treeList,
    addDictItem,
    editDictItem,
    doReleaseData,
    doReovkeData,
    getLoginfo,
    getVisitInfo,
    queryUserByDepId,
    queryUserRoleMap,
    duplicateCheck,
    duplicateCheck_2,
    queryTreeListForRole,
    getSystemMenuList,
    getSystemSubmenu,
    loadCategoryData,
    queryUserSensitive,
    saveAuthSensitive,
    queryAuthSensitive,
    getSysListLang,
    getCompanyListLang,
    getI18nByBusAccountLang
}




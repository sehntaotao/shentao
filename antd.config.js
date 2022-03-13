import Vue from 'vue'
// 引入ant-design-vue组件
import { 
    Button,
    Breadcrumb,
    FormModel,
    Input,
    Select,
    Cascader,
    Carousel,
    DatePicker,
    Descriptions,
    InputNumber,
    Radio,
    Checkbox,
    Switch,
    Upload,
    Icon,
    Col,
    Row,
    Menu,
    PageHeader,
    Collapse,
    Table,
    Spin,
    Form,
    Tag,
    Tabs,
    Layout,
    Modal,
    Tooltip,
    Transfer,
    Alert,
    Avatar,
    AutoComplete,
    Divider,
    Card,
    Dropdown,
    Drawer,
    Progress,
    Pagination,
    Popconfirm,
    message,
    notification,
    Empty,
    Steps,
    statistic,
    Result,
    Timeline,
    Rate,
    Badge
} from 'ant-design-vue'

import MSelect from '@comp/mSelect'
import MSwitch from '@comp/mSwitch'
import MCascader from '@comp/mCascader'
import CodeEditorModel from '@comp/codeEditorModel'
import MSelectModal from '@comp/mSelectModal'


Vue.use(Button)
Vue.use(Breadcrumb)
Vue.use(FormModel)
Vue.use(Input)
Vue.use(Select)
Vue.use(Cascader)
Vue.use(Carousel)
Vue.use(DatePicker)
Vue.use(Descriptions)
Vue.use(InputNumber)
Vue.use(Radio)
Vue.use(Checkbox)
Vue.use(Switch)
Vue.use(Upload)
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(PageHeader)
Vue.use(Collapse)
Vue.use(Table)
Vue.use(Spin)
Vue.use(Form)
Vue.use(Tag)
Vue.use(Tabs)
Vue.use(Layout)
Vue.use(Modal)
Vue.use(Tooltip)
Vue.use(Transfer)
Vue.use(Alert)
Vue.use(Avatar)
Vue.use(AutoComplete)
Vue.use(Divider)
Vue.use(Card)
Vue.use(Dropdown)
Vue.use(Drawer)
Vue.use(Progress)
Vue.use(Pagination)
Vue.use(Popconfirm)
Vue.use(notification)
Vue.use(Empty)
Vue.use(Steps)
Vue.use(statistic)
Vue.use(Result)
Vue.use(Timeline)
Vue.use(MSelect)
Vue.use(MSwitch)
Vue.use(MCascader)
Vue.use(CodeEditorModel)
Vue.use(MSelectModal)
Vue.use(Rate)
Vue.use(Badge)

Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning
Vue.prototype.$message = message
Vue.prototype.$notification = notification

// 全局引用
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2447103_ac1adpxu20c.js'
})
Vue.component('icon-font', IconFont)
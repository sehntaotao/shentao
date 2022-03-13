/*
 * @Author: your name
 * @Date: 2021-03-29 14:02:20
 * @LastEditTime: 2021-06-24 17:29:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \srm-frontend_v4.5\src\vt.config.js
 */
import VXETable from 'vxe-table'
const renderer = {
    // 文本域渲染组件
    'srmTextArea': {
        // 可编辑激活模板
        renderEdit (h, renderOpts, { row, column }) {
            let props = renderOpts.props || {}
            return [
                <a-textarea disabled={ props.disabled } v-model={ row[column.property] } auto-size></a-textarea>
            ]
        },
        // 显示模板
        renderCell (h, renderOpts, { row, column }) {
            return [
                <span>{ row[column.property] }</span>
            ]
        }
    },
    // 日期渲染组件
    'mDatePicker': {
        // 可编辑激活模板
        renderEdit (h, renderOpts, { row, column }) {
            let props = renderOpts.props || {}
            let event = renderOpts.events || {}
            return [
                <a-date-picker 
                    placeholder=""
                    valueFormat={props.valueFormat || 'YYYY-MM-DD'}
                    onChange={()=> event.change(row, row[column.property])}
                    showTime={ props.showTime }
                    v-model={ row[column.property] } />
            ]
        },
        // 可编辑显示模板
        renderCell (h, renderOpts, { row, column }) {
            return [
                <span>{ row[column.property] }</span>
            ]
        }
    },
    // 自定义开关组件
    'mSwitch': {
        // 可编辑激活模板
        renderEdit (h, renderOpts, { row, column }) {
            let props = renderOpts.props || {}
            return [
                <m-switch 
                    disabled={ props.disabled } 
                    closeValue={ props.closeValue }
                    openValue={ props.openValue }
                    checkedChildren={ props.checkedChildren }
                    unCheckedChildren={ props.unCheckedChildren }
                    v-model={ row[column.property] } />
            ]
        },
        // 可编辑显示模板
        renderCell (h, renderOpts, { row, column }) {
            return [
                <span>{ row[column.property] }</span>
            ]
        }
    },
    // 单选下拉组件，兼容弹窗嵌入表格下拉的问题
    'srmSelect': {
        // 可编辑激活模板
        renderEdit (h, renderOpts, { row, column }) {
            let props = renderOpts.props || {}
            let options = renderOpts.options || []
            let event = renderOpts.events || {}
            return [
                (<a-select
                    vModel= {row[column.property]}
                    allowClear={true}
                    disabled={ props.disabled }
                    onChange={()=> event.change(row, row[column.property])}
                    placeholder='请选择'
                >
                    {
                        options.map((item)=> {
                            return (
                                <a-select-option value= {item.value}>
                                    { item.label }
                                </a-select-option>
                            )
                        })
                    }
                </a-select>)
            ]
        },
        // 可编辑显示模板
        renderCell (h, renderOpts, { row, column }) {
            let options = renderOpts.options || []
            let currentText = null
            if (options && options.length) {
                let filterOpt = options.filter(opt=> {
                    return opt.value === row[column.property] 
                })
                if (filterOpt && filterOpt.length) {
                    currentText = filterOpt[0].label
                }
            } else {
                let text = column.property + '_dictText'
                currentText = row[text] ||  row[column.property]
            }
            return [
                <span>{ currentText }</span>
            ]
        }
    }
}

VXETable.renderer.mixin(renderer)

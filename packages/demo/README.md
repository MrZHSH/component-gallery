# XARC-base-component

## XUI

> A Vue.js 2.x UI for PC web.

针对现阶段业务封装的基础组件，针对日常业务开发需求，一定程度减少了业务中冗余的代码，并简化了开发流程。目前含有基础表格，基础表单组件，在后续中如有其他需求会进行其他基础组件的开发。

### install
---

```
通过私有仓库下载
```

### 引入方式
---
```
// 按需引入
import { TForm } from 'tui'

Vue.component(TForm.name, TForm)
```


```
// 全局引入 在main.js中
import TUI from 'tui'

Vue.use(tUI)
```

### 1.Form

| 参数 | type | required | 说明 |
| ------- | ------- | ------ | ----- |
| refObj  | Object | yes | 表单校验规则 |
| className | String | no | 自定义类名 |
| listTypeInfo | Object | no | 下拉框数据源（仅对 type: 'select'有效）|
| fieldList | Array | yes | form 表单每项 list |
| ---type | String | yes | form 表单每一项类型（若值为 slot——新增自定义插槽 form-'value') |
| ---label | String | yes | form 表单每一项 title |
| ---value | String | yes | form 表单每一项传给后台的参数 |
| ---startDate | String | no | 	仅仅针对（type:'t-date'有效）与 endDate 同时使用 |
| ---endDate | String | no | 仅仅针对（type:'t-date'有效）选择开始——结束日期 |
| ---plusTime | Boolean | no | 仅仅针对（type:'t-date'有效）是否带后缀时分秒 |
| ---valueFormat | String | yes | type 为 date/t-date 日期返回值格式 |
| ---rules | Object/Array | no | 每一项输入框的表单校验规则 |
| ---list | String | no | 下拉选择数据源（仅仅对 type:'select'有效） |
| ---event | Array | yes | 每个输入框事件标志 |
| formData | Object | yes | 表单数据对象 |
| labelWidth | String | no | label 宽度 |
| rules | Object/Array | no | 校验规则 |
| operatorList | Array | no | 操作按钮 list |
| isOperator | Boolean | no | 是否显示操作按钮 |

#### event

| 事件名 | return | remark |
| ------- | ------- | ------ |
| handleEvent | fieldList 中 type/查询条件输入的值/fieldList 中 event 值 | 单个查询条件触发事件 |


#### 示例


```
<t-form
  :ref-obj.sync="formInfo.ref"
  :form-data="formInfo.formData"
  :field-list="formInfo.fieldList"
  :rules="formInfo.rules"
  :operator-list="formInfo.operatorList"
  :label-width="formInfo.labelWidth"
  :list-type-info="listTypeInfo"
  @handleEvent="handleEvent"
></t-form>

<script>
export default {
	data () {
    return {}
	}
}
</script>
```





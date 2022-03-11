/**
 *  组件入口文件
 */
import TForm from "./components/base-form"
import TTable from './components/base-table'

const components = [
  TForm,
  TTable
]

const install = function (Vue) {
  if (install.installed) return

  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue)

export default {
  install,
  TForm,
  TTable
}

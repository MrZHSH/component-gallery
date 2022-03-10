/**
 * 组件入口文件
 */
import TForm from "./components/base-form";

const components = [
  TForm
]

const install = function (Vue) {
  if (install.installed) return

  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue)

export default {
  install,
  TForm
}

import TForm from './src'

TForm.install = function (Vue) {
  Vue.component(TForm.name, TForm)
}

export default TForm

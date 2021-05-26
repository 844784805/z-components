import zButton from '@/components/z-button/zButton.vue';
import RollNum from './components/roll-num/index.vue';
const components = [
  zButton,
  RollNum
]
// console.log(ZButton);

const install = (Vue) => {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export {
  install,
  zButton
}
export default {
  install
}
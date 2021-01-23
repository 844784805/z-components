import zButton from '@/components/z-button/zButton.vue';
const components = [
  zButton
]
// console.log(ZButton);

const install = (Vue) => {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  zButton
}
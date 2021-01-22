import ZButton from '@/components/z-button/zButton.vue';
const components = [
  ZButton
]

const install = (Vue) => {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export default{
  install,
  ZButton
}
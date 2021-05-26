<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <zButton @button-click='clickHandler'>按钮一</zButton>
    <div class="box" :style="styleVar"></div>
    <zLayout :height=100 />
    <RollNum />
    <a-button />
  </div>
</template>

<script>
import zLayout from '@/components/z-layout';
export default {
  name: 'App',
  components: {
    zLayout,
  },
  methods: {
    clickHandler() {
      console.log('点击了按钮');
    }
  },
  data() {
    return {
      height: 30
    }
  },
  computed: {
    styleVar() {
      return {
        '--box-height': this.height + 'px',
        '--box-color': 'yellow'
      }
    }
  },
}
</script>

<style lang="scss" scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.box {
  height: var(--box-height);
  background: var(--box-color, red);
}
</style>

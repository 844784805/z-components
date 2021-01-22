<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ZButtom @button-click='clickHandler'>按钮一</ZButtom>
  </div>
</template>

<script>
import ZButtom from './index';
export default {
  name: 'App',
  components: {
    ZButtom
  },
  methods: {
    clickHandler() {
      console.log('点击了按钮');
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

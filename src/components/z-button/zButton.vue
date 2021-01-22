<template>
  <button class="button" @click="handlerEmit"><slot>{{text}}</slot></button>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        default: '按钮'
      },
    },
    methods: {
      handlerEmit() {
        this.$emit('button-click')
      }
    },
  }
</script>

<style lang="scss" scoped>
.button{
  background: skyblue;
  border: 0;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  color: #fff;
  padding: 5px 10px;
  &:focus{
    outline: 0;
    // border-color: #999
  }
}
</style>
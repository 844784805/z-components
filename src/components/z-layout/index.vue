<template>
<div>
  <div class="box1" :style="styleVar">

  </div>
</div>
  
</template>

<script>
  export default {
    props: {
      height: {
        type: Number,
        default: 0
      },
    },
    computed: {
      styleVar() {
        return {
          '--box-height': this.height + 'px',
        } 
      }
    },
    methods: {
      translate(obj) {
        const arr = [].repeat(null,11)
        Object.entries(obj).forEach(([key, value] ) => {
          console.log('index',key);
          console.log('index1',value);
          arr[key-1] = value
        })
        return arr
      }
    },
    mounted () {
      const obj = {
        1:200, 2:140, 5:400
      }
      
      console.log(this.translate(obj));
    },
  }
</script>

<style lang="scss" scoped>
.box1{
  width: 300px;
  margin: 10px auto;
  height: var(--box-height);
  // background: slateblue;
  position: relative;
  background: 
    linear-gradient(90deg, #333 50%, transparent 0) repeat-x,
    linear-gradient(90deg, #333 50%, transparent 0) repeat-x,
    linear-gradient(0deg, #333 50%, transparent 0) repeat-y,
    linear-gradient(0deg, #333 50%, transparent 0) repeat-y;
    background-size: 4px 1px, 4px 1px, 1px 4px, 1px 4px;
    background-position: 0 0, 0 100%, 0 0, 100% 0;
  // border-radius: 20px;
  &::after{
    content: '';
    width: 50px;
    height: 38px;
    display: block;
    border-bottom: 2px solid royalblue;
    border-right: 2px solid royalblue;
    position: absolute;
    right: -5px;
    bottom: -5px;
    // border-radius: 0 0 20px 0;
  }
  &::before{
    content: '';
    width: 50px;
    height: 38px;
    display: block;
    border-top: 2px solid royalblue;
    border-left: 2px solid royalblue;
    position: absolute;
    top: -5px;
    left: -5px;
    // border-radius: 20px 0 0 0;

  }
}
</style>
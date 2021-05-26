<template>
  <div>
    <div class="num" ref="num"></div>
    <div class="num" ref="num1"></div>
  </div>
</template>

<script>
import * as d3 from 'd3';
export default {
  name: 'RollNum',

  mounted() {
    // const t = d3.transition().duration(750)
    d3.select(this.$refs.num)
      .datum({ value: 10 || 0 })
      .transition()
      .duration(5000)
      .tween('d', function(d) {
        console.log(d, 'eeee');
        const num = d3.interpolateNumber(10, 1000);
        return function(t) {
          d3.select(this).text(num(t).toFixed(0));
        };
      });
    // 数字滚动
    d3.select(this.$refs.num1)
      .transition()
      .duration(2000)
      .tween('text', function() {
        const num = d3.interpolateNumber(0, 500);
        return function(t) {
          d3.select(this).text(num(t).toFixed(0));
        };
      });
  },
};
</script>

<style lang="scss" scoped>
.num {
  font-size: 30px;
  display: inline-block;
}
</style>

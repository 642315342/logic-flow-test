<template>
    <div id="container"></div>
</template>
<script lang="ts" setup>
import LogicFlow from '@logicflow/core';
import '@logicflow/core/dist/style/index.css';
import { onMounted, ref } from 'vue'
const data = {
  // 节点
  nodes: [
    {
      id: 50,
      type: 'rect',
      x: 100,
      y: 150,
      text: '你好',
    },
    {
      id: 21,
      type: 'circle',
      x: 300,
      y: 150,
    },
  ],
  // 边
  edges: [
    {
      type: 'polyline',
      sourceNodeId: 50,
      targetNodeId: 21,
    },
  ],
};

let lf = ref();
onMounted(() => {
    lf.value = new LogicFlow({
        container: document.querySelector('#container') as HTMLElement,
        stopScrollGraph: true,
        stopZoomGraph: true,
        width: 500,
        height: 500,
        grid: {
            type: 'dot',
            size: 20,
        },
    });
    lf.value.render(data);
});
</script>
<style lang="less" scoped>
</style>

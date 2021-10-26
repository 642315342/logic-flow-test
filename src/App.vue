<script setup lang="ts">
import {ref} from 'vue'
import Logicflow from './process/index.vue';
const nodeTemplate = ref()
const nodeTemplateOptions = [
    { label: '结束模板', value: 'over' },
    { label: '处理中模板', value: 'processing' },
    { label: '待接单模板', value: 'pending' },
    { label: '系统持单模板', value: 'system' }
];
</script>

<template>
    <ks-select
        v-model="nodeTemplate"
        placeholder="请选择"
    >
        <ks-option
            v-for="item in nodeTemplateOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        >
        </ks-option>
    </ks-select>
    <!-- <el-select
        v-model="nodeTemplate"
        placeholder="请选择"
    >
        <el-option
            v-for="item in nodeTemplateOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        >
        </el-option>
    </el-select> -->
    <Logicflow />
</template>

<style>
html,
body,
#app {
    height: 100%;
    padding: 0;
    margin: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>

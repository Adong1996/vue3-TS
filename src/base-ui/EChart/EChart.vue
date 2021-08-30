<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import type { EChartsOption } from 'echarts'
import { ref, onMounted, defineProps, withDefaults, watchEffect } from 'vue'

import { useBaseEchart } from './hooks/useBaseEchart'
// 定义props  定义默认值withDefaults 不写？就是必传类型
const props = withDefaults(
  defineProps<{
    options: EChartsOption
    width?: string
    height?: string
  }>(),
  {
    width: '100%',
    height: '360px'
  }
)

const echartDivRef = ref<HTMLElement>()
onMounted(() => {
  if (echartDivRef.value) {
    const { setOptions } = useBaseEchart(echartDivRef.value)
    watchEffect(() => {
      return setOptions(props.options)
    })
  }
})
</script>

<style lang="less" scoped></style>

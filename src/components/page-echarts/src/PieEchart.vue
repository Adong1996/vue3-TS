<template>
  <div class="page-echarts">
    <EChart :options="options"></EChart>
  </div>
</template>

<script lang="ts" setup>
import EChart from '@/base-ui/EChart/index'
import { IDataType } from '../type/index'
import { defineProps, computed } from 'vue'

const props = defineProps<{
  pieData: IDataType[]
}>()
const options = computed(() => {
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'left'
    },
    series: [
      {
        name: '分类数据',
        type: 'pie',
        radius: '50%',
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>

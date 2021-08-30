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
  roseData: IDataType[]
}>()
const options = computed(() => {
  return {
    // legend: {
    //   top: 'bottom'
    // },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: '类别数据',
        type: 'pie',
        radius: [5, 70],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>

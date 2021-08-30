import * as echarts from 'echarts'
// import type { EChartsOption } from 'echarts'

import ChinaMapData from '../data/china.json'
echarts.registerMap('china', ChinaMapData)
export function useBaseEchart(el: HTMLElement) {
  const echartInstance = echarts.init(el)
  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options)
  }
  window.addEventListener('resize', () => {
    echartInstance.resize()
  })
  const updateSize = () => {
    echartInstance.resize()
  }
  return {
    echartInstance,
    setOptions,
    updateSize
  }
}

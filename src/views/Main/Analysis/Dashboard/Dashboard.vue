<template>
  <div class="dashboard">
    <!-- 数据统计 -->
    <el-row :gutter="10">
      <template v-for="item in topPanelData" :key="item.title">
        <el-col :md="12" :lg="6" :xl="6">
          <StatisticalPanel :panelData="item" />
        </el-col>
      </template>
    </el-row>
    <!-- 中间图表 -->
    <el-row :gutter="10">
      <el-col :span="7">
        <ToCar title="分类商品数量(饼图)">
          <PieEchart :pieData="categoryGoodsCount"></PieEchart>
        </ToCar>
      </el-col>
      <el-col :span="10">
        <ToCar title="不同城市的销量">
          <MapEchart :mapData="addressGoodsSale"></MapEchart>
        </ToCar>
      </el-col>
      <el-col :span="7">
        <ToCar title="分类商品数量(玫瑰图)">
          <RoseEchart :roseData="categoryGoodsCount"></RoseEchart>
        </ToCar>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <ToCar title="分类商品数销量">
          <LineEchart v-bind="categoryGoodsSale"></LineEchart>
        </ToCar>
      </el-col>
      <el-col :span="12">
        <ToCar title="分类商品的收藏">
          <BarEchart v-bind="categoryGoodsFavor"></BarEchart>
        </ToCar>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store/index'
import StatisticalPanel from '@/components/statistical-panel/StatisticalPanel'
import ToCar from '@/base-ui/Toacar/index'
import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart,
  MapEchart
} from '@/components/page-echarts/index'
export default defineComponent({
  components: {
    PieEchart,
    RoseEchart,
    LineEchart,
    BarEchart,
    MapEchart,
    ToCar,
    StatisticalPanel
  },
  setup() {
    const store = useStore()
    // 请求数据
    store.dispatch('dashboard/getDashboardAction')
    // 获取数据
    const topPanelData = computed(() => store.state.dashboard.amountList)
    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })
    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const categoryGoodsSale = store.state.dashboard.categoryGoodsSale
      for (const item of categoryGoodsSale) {
        xLabels.push(item.name)
        values.push(item.goodsCount)
      }
      return { xLabels, values }
    })
    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor
      for (const item of categoryGoodsFavor) {
        xLabels.push(item.name)
        values.push(item.goodsFavor)
      }
      return { xLabels, values }
    })
    const addressGoodsSale = computed(() => {
      return store.state.dashboard.addressGoodsSale.map((item) => {
        return { name: item.address, value: item.count }
      })
    })
    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale,
      topPanelData
    }
  }
})
</script>

<style lang="less" scoped>
.content-row {
  margin-top: 20px;
}
</style>

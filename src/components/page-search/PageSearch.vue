<template>
  <div class="page-search">
    <ToFrom v-bind="searchFromConfig" v-model="fromData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="el-icon-refresh" @click="handleResetClick"
            >重置</el-button
          >
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </template>
    </ToFrom>
  </div>
</template>

<script lang="ts">
import ToFrom from '@/base-ui/ToFrom/index'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    searchFromConfig: {
      type: Object,
      reuqired: true
    }
  },
  components: {
    ToFrom
  },
  setup(props, { emit }) {
    // 双向绑定的shu'应该是由配置文件的field来决定的
    // fromData 的属性动态决定
    const fromItems = props.searchFromConfig?.fromItems ?? []
    const fromOriginData: any = {}
    for (const item of fromItems) {
      fromOriginData[item.field] = ''
    }
    const fromData = ref(fromOriginData)
    // 当用户点击重置
    const handleResetClick = () => {
      fromData.value = fromOriginData
    }
    return {
      fromData,
      handleResetClick
    }
  }
})
</script>

<style lang="less" scoped>
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>

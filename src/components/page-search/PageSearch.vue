<template>
  <div class="page-search">
    <ToFrom v-bind="searchFromConfig" v-model="fromData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="el-icon-refresh">重置</el-button>
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
  setup() {
    const fromData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return {
      fromData
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

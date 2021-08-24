<template>
  <div class="page-content">
    <ToTabel :listDate="dataList" v-bind="contentFromConfig">
      <!-- header 中的插槽 -->
      <template #headerHandler>
        <el-button type="primary" size="medium">新建用户</el-button>
      </template>
      <!-- 列中的插槽 -->
      <template #stauts="{ row }">
        <!-- 作用域插槽传入的数据也可以结构 -->
        <el-button plain size="mini" :type="row.enable ? 'success' : 'danger'">
          {{ row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #handler>
        <div class="hand-btns">
          <el-button icon="el-icon-edit" size="mini" type="text"
            >编辑</el-button
          >
          <el-button icon="el-icon-delete" size="mini" type="text"
            >操作</el-button
          >
        </div>
      </template>
    </ToTabel>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store/index'
import ToTabel from '@/base-ui/ToTable/index'
export default defineComponent({
  props: {
    contentFromConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      require: true
    }
  },
  components: {
    ToTabel
  },
  setup(props) {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const dataList = computed(() =>
      store.getters[`system/pageListDate`](props.pageName)
    )
    // const userCount = computed(() => store.state.system.userCount)

    return {
      dataList
    }
  }
})
</script>
<style lang="less" scoped></style>

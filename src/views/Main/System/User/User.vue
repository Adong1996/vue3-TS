<template>
  <div class="search">
    <PageSearch :searchFromConfig="searchFromConfig" />
  </div>
  <div class="content">
    <ToTabel :listDate="userList" :propList="propList">
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
    </ToTabel>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store/index'
import { searchFromConfig } from './config/search'
import PageSearch from '@/components/page-search/PageSearch.vue'
import ToTabel from '@/base-ui/ToTable/index'
export default defineComponent({
  components: {
    PageSearch,
    ToTabel
  },
  name: 'user',
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const userList = computed(() => store.state.system.userList)
    // const userCount = computed(() => store.state.system.userCount)
    const propList = [
      { prop: 'name', label: '用户名', minWidth: '100' },
      { prop: 'realname', label: '真实姓名', minWidth: '100' },
      { prop: 'cellphone', label: '手机号码', minWidth: '100' },
      { prop: 'enable', label: '状态', minWidth: '100', slotName: 'stauts' },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '250',
        slotName: 'createAt'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '250',
        slotName: 'updateAt'
      }
    ]
    return {
      searchFromConfig,
      userList,
      propList
    }
  }
})
</script>

<style lang="less" scoped></style>

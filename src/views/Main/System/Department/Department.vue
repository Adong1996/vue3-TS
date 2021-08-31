<template>
  <div class="department">
    <div class="search">
      <PageSearch
        :searchFromConfig="searchFromConfig"
        @resetBtnClick="handleResetClick"
        @queryBtnClick="handleQueryClick"
      ></PageSearch>
    </div>
    <div class="content">
      <PageContent
        pageName="department"
        ref="PageContentRef"
        :contentFromConfig="contentFromConfig"
        @newBtnClick="handleNewData"
        @editBtnClick="handleEditData"
      >
        <template #parentId="{ row }">
          <template v-for="item in parentArr" :key="item.id">
            <template v-if="row.parentId === item.id">
              <span>{{ item.name }}</span>
            </template>
          </template>
        </template>
      </PageContent>
      <PageModal
        pageName="department"
        :modalConfig="modalConfigRef"
        ref="pageModalRef"
        :defaultInfo="defaultInfo"
      ></PageModal>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
// 组件以及配置
import { searchFromConfig } from './config/search'
import { contentFromConfig } from './config/content'
import { modalConfig } from './config/modal'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'

import PageSearch from '@/components/page-search/PageSearch'
import PageContent from '@/components/page-content/PageContent'
import PageModal from '@/components/page-modal/PageModal'

import { useStore } from '@/store/index'
export default defineComponent({
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    // 动态添加用户列表
    const parentArr = computed(() => store.state.entireDepartment)
    const store = useStore()
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.fromItems.find(
        (item) => item.field === 'parentId'
      )
      if (departmentItem) {
        departmentItem.options = store.state.entireDepartment.map((item) => {
          return { title: item.name, value: item.id }
        })
      }
      return modalConfig
    })
    // const parentid = (id: number) => {
    //   const department = store.state.entireDepartment
    //   const result = department.find((item) => {
    //     return item.parentId === id
    //   })
    //   return result.name
    // }

    const [PageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    // 调用 hook 获取公共的变量和函数
    const [pageModalRef, handleNewData, handleEditData, defaultInfo] =
      usePageModal()
    return {
      searchFromConfig,
      contentFromConfig,
      modalConfig,
      PageContentRef,
      handleResetClick,
      handleQueryClick,
      pageModalRef,
      handleNewData,
      handleEditData,
      defaultInfo,
      modalConfigRef,
      parentArr
    }
  }
})
</script>

<style lang="less" scoped></style>

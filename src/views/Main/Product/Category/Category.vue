<template>
  <div class="search">
    <PageSearch
      :searchFromConfig="searchFromConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
  </div>
  <div class="content">
    <PageContent
      :contentFromConfig="contentFromConfig"
      pageName="category"
      ref="PageContentRef"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></PageContent>
    <PageModal
      pageName="category"
      :modalConfig="modalConfig"
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
    ></PageModal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// 组件以及配置
import { searchFromConfig } from './config/search'
import { contentFromConfig } from './config/content'
import { modalConfig } from './config/modal'

import PageSearch from '@/components/page-search/PageSearch'
import PageContent from '@/components/page-content/PageContent'
import PageModal from '@/components/page-modal/PageModal'
import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'
export default defineComponent({
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  name: 'user',
  setup() {
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
      defaultInfo
    }
  }
})
</script>

<style lang="less" scoped></style>

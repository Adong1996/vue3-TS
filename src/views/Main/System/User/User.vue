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
      pageName="users"
      ref="PageContentRef"
    ></PageContent>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
// 组件以及配置
import { searchFromConfig } from './config/search'
import { contentFromConfig } from './config/content'

import PageSearch from '@/components/page-search/PageSearch'
import PageContent from '@/components/page-content/PageContent'

import { usePageSearch } from '@/hooks/usePageSearch'
export default defineComponent({
  components: {
    PageSearch,
    PageContent
  },
  name: 'user',
  setup() {
    const [handleResetClick, handleQueryClick, PageContentRef] = usePageSearch()
    return {
      searchFromConfig,
      contentFromConfig,
      handleResetClick,
      handleQueryClick,
      PageContentRef
    }
  }
})
</script>

<style lang="less" scoped></style>

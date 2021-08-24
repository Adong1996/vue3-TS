<template>
  <div class="search">
    <PageSearch :searchFromConfig="searchFromConfig" />
  </div>
  <div class="content">
    <PageContent
      :contentFromConfig="contentFromConfig"
      pageName="users"
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
export default defineComponent({
  components: {
    PageSearch,
    PageContent
  },
  name: 'user',
  setup() {
    return {
      searchFromConfig,
      contentFromConfig
    }
  }
})
</script>

<style lang="less" scoped></style>

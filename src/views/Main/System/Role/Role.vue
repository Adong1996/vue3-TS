<template>
  <div class="role">
    <div class="search">
      <PageSearch :searchFromConfig="searchFromConfig" />
    </div>
    <div class="content">
      <PageContent
        :contentFromConfig="contentFromConfig"
        pageName="role"
      ></PageContent>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageContent from '@/components/page-content/PageContent'
import PageSearch from '@/components/page-search/PageSearch'

import { searchFromConfig } from './config/search'
import { contentFromConfig } from './config/content'
export default defineComponent({
  components: {
    PageContent,
    PageSearch
  },
  setup() {
    return {
      contentFromConfig,
      searchFromConfig
    }
  }
})
</script>

<style lang="less" scoped></style>

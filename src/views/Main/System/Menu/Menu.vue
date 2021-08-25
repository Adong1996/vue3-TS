<template>
  <div class="menu">
    <PageContent
      :contentFromConfig="contentFromConfig"
      pageName="menu"
    ></PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageContent from '@/components/page-content/PageContent'
import { contentFromConfig } from './config/content'
export default defineComponent({
  components: {
    PageContent
  },
  setup() {
    return {
      contentFromConfig
    }
  }
})
</script>

<style lang="less" scoped></style>

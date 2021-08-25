<template>
  <div class="goods">
    <PageContent :contentFromConfig="contentFromConfig" pageName="goods">
      <template #image="scope">
        <el-image
          style="width: 60px; heigth: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        ></el-image>
      </template>
      <template #oldPrice="scope">{{ '￥' + scope.row.oldPrice }}</template>
    </PageContent>
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

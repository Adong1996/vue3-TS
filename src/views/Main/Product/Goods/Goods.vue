<template>
  <div class="goods">
    <div class="search">
      <PageSearch
        :searchFromConfig="searchFromConfig"
        @resetBtnClick="handleResetClick"
        @queryBtnClick="handleQueryClick"
      />
    </div>
    <PageContent
      :contentFromConfig="contentFromConfig"
      pageName="goods"
      ref="PageContentRef"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    >
      <template #image="scope">
        <el-image
          style="width: 60px; heigth: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        ></el-image>
      </template>
      <template #oldPrice="scope">{{ '￥' + scope.row.oldPrice }}</template>
    </PageContent>
    <PageModal
      pageName="goods"
      :modalConfig="modalConfig"
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
    ></PageModal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// 组件以及配置
import PageSearch from '@/components/page-search/PageSearch'
import PageModal from '@/components/page-modal/PageModal'
import PageContent from '@/components/page-content/PageContent'
import { searchFromConfig } from './config/search'
import { modalConfig } from './config/modal'
import { contentFromConfig } from './config/content'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'
export default defineComponent({
  components: {
    PageContent,
    PageSearch,
    PageModal
  },
  setup() {
    const [PageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    // 调用 hook 获取公共的变量和函数
    const [pageModalRef, handleNewData, handleEditData, defaultInfo] =
      usePageModal()
    return {
      contentFromConfig,
      searchFromConfig,
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

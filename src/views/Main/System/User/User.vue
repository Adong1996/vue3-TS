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
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></PageContent>
    <PageModal
      pageName="users"
      :modalConfig="modalConfigRef"
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
    ></PageModal>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
// 组件以及配置
import { searchFromConfig } from './config/search'
import { contentFromConfig } from './config/content'
import { modalConfig } from './config/modal'

import PageSearch from '@/components/page-search/PageSearch'
import PageContent from '@/components/page-content/PageContent'
import PageModal from '@/components/page-modal/PageModal'
import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'
import { useStore } from '@/store/index'
export default defineComponent({
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  name: 'user',
  setup() {
    const [PageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

    // pageModal hook 逻辑
    const newCallback = () => {
      const passwordItem = modalConfig.fromItems.find(
        (item) => item.field === 'password'
      )
      if (passwordItem) {
        passwordItem.isHidden = false
      }
    }
    const editCallback = () => {
      const passwordItem = modalConfig.fromItems.find(
        (item) => item.field === 'password'
      )
      if (passwordItem) {
        passwordItem.isHidden = true
      }
    }

    // 动态添加用户列表
    const store = useStore()
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.fromItems.find(
        (item) => item.field === 'departmentId'
      )
      if (departmentItem) {
        departmentItem.options = store.state.entireDepartment.map((item) => {
          return { title: item.name, value: item.id }
        })
      }
      const roleItem = modalConfig.fromItems.find(
        (item) => item.field === 'roleId'
      )
      if (roleItem) {
        roleItem.options = store.state.entireRole.map((item) => {
          return { title: item.name, value: item.id }
        })
      }
      return modalConfig
    })
    // 调用 hook 获取公共的变量和函数
    const [pageModalRef, handleNewData, handleEditData, defaultInfo] =
      usePageModal(newCallback, editCallback)
    return {
      searchFromConfig,
      contentFromConfig,
      modalConfig,
      handleResetClick,
      handleQueryClick,
      PageContentRef,
      pageModalRef,
      handleNewData,
      handleEditData,
      defaultInfo,
      modalConfigRef
    }
  }
})
</script>

<style lang="less" scoped></style>

<template>
  <div class="role">
    <div class="search">
      <PageSearch :searchFromConfig="searchFromConfig" />
    </div>
    <div class="content">
      <PageContent
        :contentFromConfig="contentFromConfig"
        pageName="role"
        ref="PageContentRef"
        @newBtnClick="handleNewData"
        @editBtnClick="handleEditData"
      ></PageContent>
      <PageModal
        pageName="role"
        :modalConfig="modalConfig"
        ref="pageModalRef"
        :defaultInfo="defaultInfo"
        :otherInfo="otherInfo"
      >
        <div class="menu-tree">
          <el-tree
            ref="elTreeRef"
            :data="menus"
            show-checkbox
            node-key="id"
            :props="{ children: 'children', label: 'name' }"
            @check="handleCheckChange"
          >
          </el-tree>
        </div>
      </PageModal>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, ref } from 'vue'
import { useStore } from '@/store/index'
import { menuMapleafKeys } from '@/utils/map-menu'

import PageContent from '@/components/page-content/PageContent'
import PageSearch from '@/components/page-search/PageSearch'
import PageModal from '@/components/page-modal/PageModal'

import { modalConfig } from './config/modal'
import { searchFromConfig } from './config/search'
import { contentFromConfig } from './config/content'
import { usePageModal } from '@/hooks/usePageModal'
import { usePageSearch } from '@/hooks/usePageSearch'
import { ElTree } from 'element-plus'
export default defineComponent({
  components: {
    PageContent,
    PageSearch,
    PageModal
  },
  setup() {
    // pageModal hook 逻辑
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const editCallback = (item: any) => {
      const leafKeys = menuMapleafKeys(item.menuList)
      nextTick(() => {
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }
    // 调用 hook 获取公共的变量和函数
    const [handleResetClick, handleQueryClick, PageContentRef] = usePageSearch()
    const [pageModalRef, handleNewData, handleEditData, defaultInfo] =
      usePageModal(undefined, editCallback)
    const store = useStore()
    const menus = computed(() => store.state.entirMenu)

    const otherInfo = ref({})
    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
    }
    return {
      contentFromConfig,
      searchFromConfig,
      pageModalRef,
      handleNewData,
      handleEditData,
      defaultInfo,
      modalConfig,
      handleResetClick,
      handleQueryClick,
      PageContentRef,
      menus,
      otherInfo,
      handleCheckChange,
      elTreeRef
    }
  }
})
</script>

<style lang="less" scoped>
.menu-tree {
  margin-left: 40px;
}
</style>

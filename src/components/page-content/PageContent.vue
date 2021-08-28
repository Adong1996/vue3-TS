<template>
  <div class="page-content">
    <ToTabel
      :listDate="dataList"
      :listCount="dataCount"
      v-bind="contentFromConfig"
      v-model:page="pageInfo"
    >
      <!-- 默认绑定的属性是 modelValue 执行的方法 update: modelValue -->
      <!-- v-model:page="pageInfo"  绑定的属性是 pageValue 执行的方法 update: page -->
      <!-- header 中的插槽 -->
      <template #headerHandler>
        <el-button
          type="primary"
          size="medium"
          v-if="isCreate"
          @click="handleNewClick"
        >
          {{ '新建' + contentFromConfig.title }}
        </el-button>
      </template>
      <!-- 列中的插槽 -->
      <template #stauts="{ row }">
        <!-- 作用域插槽传入的数据也可以结构 -->
        <el-button plain size="mini" :type="row.enable ? 'success' : 'danger'">
          {{ row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #handler="scope">
        <div class="hand-btns">
          <el-button
            icon="el-icon-edit"
            size="mini"
            type="text"
            v-if="isUpdate"
            @click="handleEditClick(scope.row)"
            >编辑</el-button
          >
          <el-button
            icon="el-icon-delete"
            size="mini"
            type="text"
            v-if="isDelete"
            @click="handleDeleteClick(scope.row)"
            >删除</el-button
          >
        </div>
      </template>
      <!-- pageContentf动态插入剩余插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </ToTabel>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import { usePermission } from '@/hooks/usePermission'
import { useStore } from '@/store/index'
import ToTabel from '@/base-ui/ToTable/index'
export default defineComponent({
  emits: ['newBtnClick', 'editBtnClick'],
  props: {
    contentFromConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      require: true
    }
  },
  components: {
    ToTabel
  },
  setup(props, { emit }) {
    const store = useStore()
    // 获取用户操作权限
    // let isCreate: boolean
    // let isUpdate: boolean
    // let isDelete: boolean
    // let isQuery: boolean
    // if (props.pageName) {
    //   isCreate = usePermission(props.pageName, 'create')
    //   isUpdate = usePermission(props.pageName, 'update')
    //   isDelete = usePermission(props.pageName, 'delete')
    //   isQuery = usePermission(props.pageName, 'query')
    // }
    const isCreate = usePermission(props.pageName, 'create')
    const isUpdate = usePermission(props.pageName, 'update')
    const isDelete = usePermission(props.pageName, 'delete')
    const isQuery = usePermission(props.pageName, 'query')

    // 双向绑定pageInfo
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })
    watch(pageInfo, () => getPageData())

    // 发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      if (!isQuery) return
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    getPageData()

    // 从 vuex 获取数据
    const dataList = computed(() =>
      store.getters[`system/pageListDate`](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters[`system/pageCountDate`](props.pageName)
    )

    // 获取其他动态插槽名称
    const otherPropSlots = props.contentFromConfig?.propList.filter(
      (item: any) => {
        if (item.slotName === 'stauts') return false
        if (item.slotName === 'createAt') return false
        if (item.slotName === 'updateAt') return false
        if (item.slotName === 'handler') return false
        return true
      }
    )

    // 增删改查
    const handleDeleteClick = (item: any) => {
      store.dispatch('system/deletePageDataAction', {
        pageName: props.pageName,
        id: item.id
      })
    }
    const handleNewClick = () => {
      emit('newBtnClick')
    }
    const handleEditClick = (item: any) => {
      emit('editBtnClick', item)
    }
    return {
      pageInfo,
      dataList,
      dataCount,
      getPageData,
      otherPropSlots,
      isCreate,
      isUpdate,
      isDelete,
      handleDeleteClick,
      handleNewClick,
      handleEditClick
    }
  }
})
</script>
<style lang="less" scoped></style>

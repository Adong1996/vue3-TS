<template>
  <div class="PageModal">
    <el-dialog
      :title="`新建${modalConfig.title}`"
      v-model="dialogVisible"
      width="35%"
      center
      destroy-on-close
    >
      <ToFrom v-bind="modalConfig" v-model="formData"></ToFrom>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button>取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useStore } from '@/store/index'
import ToFrom from '@/base-ui/ToFrom/index'
export default defineComponent({
  components: {
    ToFrom
  },
  props: {
    pageName: {
      type: String,
      required: true
    },
    modalConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    otherInfo: {
      type: Object,
      defalit: () => ({})
    }
  },
  setup(props) {
    // 弹窗显示
    const dialogVisible = ref(false)
    const formData = ref<any>({})
    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig.fromItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    )
    // 点击确定按钮的逻辑
    const store = useStore()
    const handleConfirmClick = () => {
      dialogVisible.value = false
      if (Object.keys(props.defaultInfo).length) {
        // 编辑
        store.dispatch('system/editPageDataAction', {
          pageName: props.pageName,
          id: props.defaultInfo.id,
          editData: { ...formData.value, ...props.otherInfo }
        })
      } else {
        // 添加
        store.dispatch('system/createPageDataAction', {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo }
        })
      }
    }
    return {
      dialogVisible,
      formData,
      handleConfirmClick
    }
  }
})
</script>
<style lang="less" scoped>
.dialog-footer {
  padding-bottom: 20px;
}
</style>

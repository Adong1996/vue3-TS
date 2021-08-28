import { ref } from 'vue'
import PageModal from '@/components/page-modal/PageModal'

type callBackfn = (item?: any) => void
export function usePageModal(newCb?: callBackfn, editCb?: callBackfn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  // 新建
  const handleNewData = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    newCb && newCb()
  }
  // 编辑
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    editCb && editCb(item)
  }
  return [pageModalRef, handleNewData, handleEditData, defaultInfo]
}

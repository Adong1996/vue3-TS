import { ref } from 'vue'
import PageContent from '@/components/page-content/PageContent'
export function usePageSearch() {
  const PageContentRef = ref<InstanceType<typeof PageContent>>()
  const handleResetClick = () => {
    PageContentRef.value?.getPageData()
  }
  const handleQueryClick = (queryInfo: any) => {
    PageContentRef.value?.getPageData(queryInfo)
  }
  return [PageContentRef, handleResetClick, handleQueryClick]
}

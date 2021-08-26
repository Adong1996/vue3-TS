import { backRequest } from '@/service/index'
import { IDataType } from '@/service/type'

export function getPageListData(url: string, queryInfo: any) {
  return backRequest.post<IDataType>({
    url: url,
    data: queryInfo,
    headers: {
      needToken: true
    }
  })
}

export function deletePageDataById(url: string) {
  return backRequest.delete<IDataType>({
    url: url,
    headers: {
      needToken: true
    }
  })
}
export function createPageData(url: string, newData: any) {
  return backRequest.post<IDataType>({
    url: url,
    data: newData,
    headers: {
      needToken: true
    }
  })
}
export function editPageData(url: string, editData: any) {
  return backRequest.patch<IDataType>({
    url: url,
    data: editData,
    headers: {
      needToken: true
    }
  })
}

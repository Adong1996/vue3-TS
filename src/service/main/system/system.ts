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

import { useStore } from '@/store/index'

export function usePermission(
  pageName: string | undefined,
  handleName: string
) {
  const store = useStore()
  const permission = store.state.login.permission
  const verfyPermission = `system:${pageName}:${handleName}`
  return !!permission.find((item) => item === verfyPermission)
}

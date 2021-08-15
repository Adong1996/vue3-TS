//本地缓存
export const localStorageSet = function (key: string, value: any = ''): void {
  window.localStorage.setItem(key, JSON.stringify(value))
}
export const localStorageGet = function (key: string): any {
  const value = localStorage.getItem(key)
  if (value) {
    return JSON.parse(value)
  }
}
export const localStorageDel = function (key: string): void {
  window.localStorage.removeItem(key)
}

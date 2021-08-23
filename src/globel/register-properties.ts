import type { App } from 'vue'

import { fromatUtcString } from '@/utils/date-format'
export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return fromatUtcString(value)
    }
  }
}

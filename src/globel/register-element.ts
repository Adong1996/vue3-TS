import type { App } from 'vue'

import 'element-plus/lib/theme-chalk/base.css'

import {
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElFormItem,
  ElInput,
  ElRadio
} from 'element-plus'

const components = [
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElFormItem,
  ElInput,
  ElRadio
]

export default function (app: App) {
  for (const component of components) {
    app.component(component.name, component)
  }
}

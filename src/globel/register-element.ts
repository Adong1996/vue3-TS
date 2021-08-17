import type { App } from 'vue'

import 'element-plus/lib/theme-chalk/base.css'

import {
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElRadioGroup,
  ElRadioButton
} from 'element-plus'

const components = [
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElContainer,
  ElHeader,
  ElMain,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElRadioGroup,
  ElRadioButton
]

export default function (app: App) {
  for (const component of components) {
    app.component(component.name, component)
  }
}

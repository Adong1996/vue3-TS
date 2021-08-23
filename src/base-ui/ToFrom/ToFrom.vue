<template>
  <div class="to-from">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in fromItems" :key="item.type">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :style="itemLayout">
              <template
                v-if="item.type === 'input' || item.type === 'possword'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'possword'"
                  v-model="fromData[`${item.field}`]"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  style="width: 100%"
                  v-model="fromData[`${item.field}`]"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.title }}
                  </el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  v-model="fromData[`${item.field}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import { IFromItem } from './types'
export default defineComponent({
  props: {
    fromItems: {
      type: Array as PropType<IFromItem[]>,
      // vue3 与 ts 结合 默认返回值对象和函数
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemLayout: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    },
    modelValue: {
      type: Object,
      required: true
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const fromData = ref({ ...props.modelValue })
    watch(fromData, (newValue) => emit('update:modelValue', newValue), {
      deep: true
    })
    return {
      fromData
    }
  }
})
</script>
<style lang="less" scoped>
.to-from {
  padding-top: 22px;
}
</style>

<template>
  <div class="search">
    <ToFrom v-bind="searchFromConfig"></ToFrom>
  </div>
  <div class="content"></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

import ToFrom from '@/base-ui/ToFrom/index'
import { searchFromConfig } from './config/search'
export default defineComponent({
  name: 'user',
  components: {
    ToFrom
  },
  setup() {
    return {
      searchFromConfig
    }
  }
})
</script>

<style lang="less" scoped></style>

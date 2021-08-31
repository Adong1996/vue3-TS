<template>
  <div></div>
  <div class="chat">
    <Editor v-model:value="htmlString" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import Editor from '@/base-ui/Editor/index'
export default defineComponent({
  components: {
    Editor
  },
  setup() {
    const htmlString = ref<string>('赠人玫瑰，手留余香')
    return {
      htmlString
    }
  }
})
</script>

<style lang="less" scoped>
.chat {
  margin-top: 15px;
}
</style>

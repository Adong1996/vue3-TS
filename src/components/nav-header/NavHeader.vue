<template>
  <div class="nav-header">
    <el-radio-group v-model="fold">
      <i
        class="fold-menu"
        :class="fold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
        @click="isFold"
      ></i>
    </el-radio-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['foldChang'],
  setup(props, { emit }) {
    const fold = ref(false)
    const isFold = () => {
      fold.value = !fold.value
      emit('foldChang', fold.value)
    }
    return {
      fold,
      isFold
    }
  }
})
</script>
<style lang="less" scoped>
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>

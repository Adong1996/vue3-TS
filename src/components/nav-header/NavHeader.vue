<template>
  <div class="nav-header">
    <el-radio-group v-model="fold">
      <i
        class="fold-menu"
        :class="fold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
        @click="isFold"
      ></i>
    </el-radio-group>
    <div class="nav-content">
      <ToBreadCrumb :breadcrumbs="breadcrumbs" />
      <div class="rigth">
        <div class="item-left">
          <i class="el-icon-chat-dot-square"></i>
          <i class="el-icon-collection-tag"></i>
          <a><i class="el-icon-bell"></i></a>
        </div>
        <div class="item-rigth">
          <i class="el-icon-s-custom"></i>
          <span>coderwhy</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import ToBreadCrumb from '@/base-ui/ToBreadCrumb/index'
import { pathMapBreadcrumbs } from '@/utils/map-menu'
export default defineComponent({
  components: {
    ToBreadCrumb
  },
  emits: ['foldChang'],
  setup(props, { emit }) {
    const fold = ref(false)
    const isFold = () => {
      fold.value = !fold.value
      emit('foldChang', fold.value)
    }
    // 面包屑的数据
    const store = useStore()
    const userMenus = store.state.login.menuList
    const breadcrumbs = computed(() => {
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })
    return {
      fold,
      isFold,
      breadcrumbs
    }
  }
})
</script>
<style lang="less" scoped>
.nav-header {
  display: flex;
  align-items: center;
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
  .nav-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
    width: 100%;
    .rigth {
      display: flex;
      .item-left {
        padding-right: 10px;
        i {
          font-size: 20px;
          padding: 0 5px;
        }
      }
      .item-rigth {
        text-align: center;
        // font-size: 20px;
        i {
          font-size: 20px;
          padding: 0 5px;
        }
      }
    }
  }
}
</style>

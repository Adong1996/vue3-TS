<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span class="title" v-if="!foldValue">Vue3 + TS</span>
    </div>
    <el-menu
      default-active="39"
      class="el-menu-vertical"
      @open="handleOpen"
      @close="handleClose"
      :collapse="foldValue"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      background-color="#001529"
    >
      <template v-for="menuItem in menuList" :key="menuItem.id">
        <!-- 二级菜单的情况 -->
        <template v-if="menuItem.type === 1">
          <el-submenu :index="`${menuItem.id}`">
            <template #title>
              <i v-if="menuItem.icon" :class="menuItem.icon"></i>
              <span>{{ menuItem.name }}</span>
            </template>
            <template v-for="item in menuItem.children" :key="item.id">
              <!-- 二级菜单的子菜单 -->
              <el-menu-item :index="`${item.id}`">
                <i v-if="item.icon" :class="item.icon"></i>
                <template #title>{{ item.name }}</template>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <!-- 一级菜单的情况 -->
        <template v-else-if="menuItem.type === 2">
          <el-menu-item :index="menuItem.id">
            <i v-if="menuItem.icon" :class="menuItem.icon"></i>
            <template #title>{{ menuItem.name }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store/index'
// vuex -> typescript  -> pinia
export default defineComponent({
  props: {
    foldValue: {
      type: Boolean,
      defult: false
    }
  },
  setup() {
    const store = useStore()
    const menuList = computed(() => store.state.login.menuList)
    const handleOpen = (key: any, keyPath: any) => {
      console.log(key, keyPath)
    }
    const handleClose = (key: any, keyPath: any) => {
      console.log(key, keyPath)
    }
    return {
      menuList,
      handleOpen,
      handleClose
    }
  }
})
</script>
<style lang="less" scoped>
.nav-menu {
  height: 100%;
  background-color: #001529;
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
  .el-menu {
    border-right: none;
    background-color: #001529;
  }

  // 目录
  .el-menu-vertical {
    background-color: #0c2135ee !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
    background-color: #0c2135ee !important;
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>

<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span class="title" v-if="!foldValue">Vue3 + TS</span>
    </div>
    <el-menu
      :default-active="`${showIndex}`"
      class="el-menu-vertical"
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
              <el-menu-item :index="`${item.id}`" @click="onMenuItem(item)">
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
import { defineComponent, computed, ref } from 'vue'
import { useStore } from '@/store/index'
import { useRouter, useRoute } from 'vue-router'

import { indexFind } from './NavMenu'
// vuex -> typescript  -> pinia
export default defineComponent({
  props: {
    foldValue: {
      type: Boolean,
      defult: false
    }
  },
  emits: ['titleInfo'],
  setup(props, { emit }) {
    const store = useStore()
    const menuList = computed(() => {
      return store.state.login.menuList
    })
    const router = useRouter()
    const route = useRoute()
    // 标题传递
    let allName = {}
    const onMenuItem = (menu: any) => {
      router.push({
        path: menu.url ?? 'no-find'
      })
      const menuUrl = menu.url
      const urlArr = menuUrl?.split('/')
      const newUrl = `/${urlArr[1]}/${urlArr[2]}`
      const menuName = menuList.value.find((item: any) => {
        if (item.url === newUrl) {
          return item
        }
      })
      allName = {
        menusName: menuName.name,
        itemName: menu.name
      }
      emit('titleInfo', allName)
    }
    // 菜单默认显示
    const showIndex = ref()
    //计算属性
    window.addEventListener('load', () => {
      const prePath = route.path
      const indexNum = indexFind(menuList.value, prePath)
      showIndex.value = indexNum
    })
    return {
      menuList,
      onMenuItem,
      showIndex
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

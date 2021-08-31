export const projectDir = `
│  .browserslistrc
│  .editorconfig
│  .eslintrc.js
│  .gitignore
│  .prettierignore
│  .prettierrc
│  babel.config.js
│  commitlint.config.js
│  package-lock.json
│  package.json
│  README.md
│  tsconfig.json
│  vue.config.js
│  yarn.lock
│
├─.husky
│  │  commit-msg
│  │  pre-commit
│  │
│  └─_
│          .gitignore
│          husky.sh
│
├─public
│  │  favicon.ico
│  │  index.html
│  │
│  └─css
│          reset.css
│
└─src
    │  App.vue
    │  main.ts
    │  shims-vue.d.ts
    │
    ├─assets
    │  │  logo.png
    │  │
    │  ├─css
    │  │      bass.less
    │  │
    │  └─img
    │          login-bg.svg
    │          logo.svg
    │
    ├─base-ui
    │  ├─Code
    │  │      Code.vue
    │  │      index.ts
    │  │      type.ts
    │  │
    │  ├─CountUp
    │  │      CountUp.vue
    │  │      index.ts
    │  │      type.ts
    │  │
    │  ├─Descriptions
    │  │      Descriptions.vue
    │  │      index.ts
    │  │      type.ts
    │  │
    │  ├─EChart
    │  │  │  EChart.ts
    │  │  │  EChart.vue
    │  │  │  index.ts
    │  │  │
    │  │  ├─data
    │  │  │      china.json
    │  │  │
    │  │  └─hooks
    │  │          useBaseEchart.ts
    │  │
    │  ├─Editor
    │  │      Editor.vue
    │  │      index.ts
    │  │      type.ts
    │  │
    │  ├─TextLink
    │  │      index.ts
    │  │      TextLink.vue
    │  │      type.ts
    │  │
    │  ├─Toacar
    │  │      index.ts
    │  │      ToCar.vue
    │  │      type.ts
    │  │
    │  ├─ToBreadCrumb
    │  │      index.ts
    │  │      ToBreadCrumb.vue
    │  │      type.ts
    │  │
    │  ├─ToFrom
    │  │      index.ts
    │  │      ToFrom.vue
    │  │      types.ts
    │  │
    │  └─ToTable
    │          index.ts
    │          ToTable.vue
    │          type.ts
    │
    ├─components
    │  ├─nav-header
    │  │      NavHeader.vue
    │  │      NavInfo.vue
    │  │
    │  ├─nav-menu
    │  │      NavMenu.ts
    │  │      NavMenu.vue
    │  │
    │  ├─page-content
    │  │      PageContent.ts
    │  │      PageContent.vue
    │  │
    │  ├─page-echarts
    │  │  │  index.ts
    │  │  │
    │  │  ├─src
    │  │  │      BarEchart.vue
    │  │  │      LineEchart.vue
    │  │  │      MapEchart.vue
    │  │  │      PieEchart.vue
    │  │  │      RoseEchart.vue
    │  │  │
    │  │  ├─type
    │  │  │      index.ts
    │  │  │
    │  │  └─utils
    │  │          convert-data.ts
    │  │          coordinate-data.ts
    │  │
    │  ├─page-modal
    │  │      PageModal.ts
    │  │      PageModal.vue
    │  │
    │  ├─page-search
    │  │      PageSearch.ts
    │  │      PageSearch.vue
    │  │
    │  └─statistical-panel
    │          StatisticalPanel.ts
    │          StatisticalPanel.vue
    │
    ├─globel
    │      index.ts
    │      register-element.ts
    │      register-properties.ts
    │
    ├─hooks
    │      usePageModal.ts
    │      usePageSearch.ts
    │      usePermission.ts
    │
    ├─router
    │  │  index.ts
    │  │  routes.ts
    │  │
    │  └─main
    │      ├─analysis
    │      │  ├─dashboard
    │      │  │      dashboard.ts
    │      │  │
    │      │  └─overview
    │      │          overview.ts
    │      │
    │      ├─product
    │      │  ├─category
    │      │  │      category.ts
    │      │  │
    │      │  └─goods
    │      │          goods.ts
    │      │
    │      ├─story
    │      │  ├─chat
    │      │  │      chat.ts
    │      │  │
    │      │  └─list
    │      │          list.ts
    │      │
    │      └─system
    │          ├─department
    │          │      department.ts
    │          │
    │          ├─menu
    │          │      menu.ts
    │          │
    │          ├─role
    │          │      role.ts
    │          │
    │          └─user
    │                  user.ts
    │
    ├─service
    │  │  index.ts
    │  │  type.ts
    │  │
    │  ├─login
    │  │      login.ts
    │  │
    │  ├─main
    │  │  ├─analysis
    │  │  │      dashboard.ts
    │  │  │      type.ts
    │  │  │
    │  │  └─system
    │  │          system.ts
    │  │
    │  └─request
    │          config.ts
    │          index.ts
    │          type.ts
    │
    ├─store
    │  │  index.ts
    │  │  type.ts
    │  │
    │  ├─login
    │  │      login.ts
    │  │
    │  └─main
    │      ├─analysis
    │      │      dashboard.ts
    │      │      type.ts
    │      │
    │      ├─product
    │      │      product.ts
    │      │
    │      └─system
    │              system.ts
    │              type.ts
    │
    ├─utils
    │      date-format.ts
    │      localStorage.ts
    │      map-menu.ts
    │
    └─views
        ├─Login
        │      account-config.ts
        │      login.ts
        │      Login.vue
        │
        ├─Main
        │  │  Main.vue
        │  │
        │  ├─Analysis
        │  │  ├─Dashboard
        │  │  │      Dashboard.vue
        │  │  │
        │  │  └─Overview
        │  │      │  Overview.vue
        │  │      │
        │  │      └─config
        │  │              dependencies.ts
        │  │              dev-dependencies.ts
        │  │              index.ts
        │  │              project-dir.ts
        │  │              technology-stacks.ts
        │  │
        │  ├─Product
        │  │  ├─Category
        │  │  │  │  Category.vue
        │  │  │  │
        │  │  │  └─config
        │  │  │          content.ts
        │  │  │          modal.ts
        │  │  │          search.ts
        │  │  │
        │  │  └─Goods
        │  │      │  Goods.vue
        │  │      │
        │  │      └─config
        │  │              content.ts
        │  │              modal.ts
        │  │              search.ts
        │  │
        │  ├─Story
        │  │  ├─Chat
        │  │  │      Chat.vue
        │  │  │
        │  │  └─List
        │  │          List.vue
        │  │
        │  └─System
        │      ├─Department
        │      │  │  Department.vue
        │      │  │
        │      │  └─config
        │      │          content.ts
        │      │          modal.ts
        │      │          search.ts
        │      │
        │      ├─Menu
        │      │  │  Menu.vue
        │      │  │
        │      │  └─config
        │      │          content.ts
        │      │
        │      ├─Role
        │      │  │  Role.vue
        │      │  │
        │      │  └─config
        │      │          content.ts
        │      │          modal.ts
        │      │          search.ts
        │      │
        │      └─User
        │          │  User.vue
        │          │
        │          └─config
        │                  content.ts
        │                  modal.ts
        │                  search.ts
        │
        └─NoFind
                NoFind.vue
`

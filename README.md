# component-gallery

搭建一个组件库

## Project setup

### 创建 demo 和 cover-axios 两个组件(可以改动)

cd package && vue create demo && vue create cover-axios

### 安装 lerna 并初始化

yarn global add lerna && npx lerna init

### 配置 package.json & lerna.json

// package.json
"private": true, 私有的，不会被发布，是管理整个项目，与要发布到 npm 的解耦
"workspaces": ["packages/*"] ：模块/软件包所在的位置

// lerna.json
"npmClient": "yarn" 使用 yarn 运行所有命令
"useWorkspaces": true 启用与工作空间的集成

### 将 packages 下的 demo 和 cover-axios 下的 node_module 集成到根目录

yarn install # 等价于 npx lerna bootstrap --npm-client yarn --use-workspaces

### 清理所有 packages 下面子项目的 node_modules

npx lerna clean

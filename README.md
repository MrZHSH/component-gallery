<!--
 * @Descripttion:
 * @version:
 * @Author: zhangsheng
 * @Date: 2022-01-11 15:09:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-19 14:03:51
-->

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

### 给某一个 package 安装依赖

yarn workspace packageB add packageA 将 packageA 作为 packageB 的依赖进行安装

### 给所有的 package 安装依赖

yarn workspaces add lodash

### 给 root 安装依赖：一般的公用的开发工具都是安装在 root 里，如 typescript

yarn add -W -D typescript

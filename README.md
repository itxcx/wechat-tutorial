# wechat-tutorial
微信小程序基础教程，由浅入深，一步一步学习微信小程序！

## 特性

- :rocket: **技术栈**：异步处理终极方案async/await、使用less
- :gem: **优雅美观**：[微信小程序商城](https://github.com/EastWorld/wechat-app-mall)，感谢[@EastWorld](https://github.com/EastWorld)
- :1234: **数据**：[api工厂](https://www.it120.cc/)

## 微信小程序不支持特性

1、不支持css * 选择器选取所有元素。

## 开发者工具与真机差异

1、授权界面允许和拒绝按钮开发者工具和真机上顺序相反

## 获取用户信息方案介绍(解决微信不弹出授权页面)

参考链接：[获取用户信息方案介绍](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1135655580&docid=c45683ebfa39ce8fe71def0631fad26b)

```html
<button open-type="getUserInfo" bindgetuserinfo="userInfoHandler"> Click me </button>
```
和 wx.getUserInfo 不同之处在于：

1、API wx.getUserInfo 只会弹一次框，用户拒绝授权之后，再次调用将不会弹框

2、组件 由于是用户主动触发，不受弹框次数限制，只要用户没有授权，都会再次弹框

## 框架

### 注册程序(App)

[注册程序](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/app-service/app.html)

### 注册页面

[注册页面](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/app-service/page.html)

### 事件

[事件](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/event.html)

## 组件

[视图容器](https://mp.weixin.qq.com/debug/wxadoc/dev/component/view.html)

[图片](https://mp.weixin.qq.com/debug/wxadoc/dev/component/image.html)

## API

### 发起请求

[发起请求](https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-request.html)

### 小程序登录

[小程序登录](https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-login.html)

### 加速统计

[加速度计](https://mp.weixin.qq.com/debug/wxadoc/dev/api/accelerometer.html)

### 数据缓存

[数据缓存](https://mp.weixin.qq.com/debug/wxadoc/dev/api/data.html)

### 生命周期

## 性能

## VsCode 开发微信小程序插件

用 vsCode 开发微信小程序可以配置以下插件，让开发更美好： 

1、vscode weapp api 

2、vscode wxml 

3、小程序助手

4、Easy WXLESS



# MOJOY_FEATURE
魔借精选单页，嵌入 app 内的 webview，VueJS.

## 测试

安装 node ,根目录下执行 `npm start` ,浏览器打开 `http://localhost:3000/index.html`

## 配置

配置文件在 `./static/config/config.json`

`config.json` 内容是一个数组，每一个元素是一个对象。

对象有三种类型：

type | info
--- | ---
full-banner | 所有可以看做宽度100%的图片
left-right | 一左一右的图片
block | 网格状分布图片

对象可以拥有的元素：

元素 | 说明
--- | ---
type | `full-banner`,`left-right`,`block`中的一种，请看上表
style | 为该图片添加 css 样式，默认为 `null`, 这个不懂可以问下我
productionID | 物品id，`type`为`full-banner`时存在， 如无 id 填 null
productionName | 物品name，`type`为`full-banner`时存在， 如无 name 填 null
path | 物品图片路径，`type`为`full-banner`时存在， 如无填 null
prproductions | 物品数组，`type`为`left-right` 或 `block` 时存在，内容为`productionID`,`productionName`,`productionName`

完成配置文件后请按配置图片路径，更换 `./static/images/` 中的相应图片。

建议文件放置方式如下：

```bash
.
|____block
| |____b1.jpg
|
|____full-banner
| |____b8.jpg
| |____b9.jpg
| |____footer.jpg
|
|____left-right
  |____t1.jpg
  |____t2.jpg
```
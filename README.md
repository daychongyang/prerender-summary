# Prerendering Summary

## 一、前端渲染方式

- CSR: 客户端渲染 `->` 在浏览器中渲染应用程序
- Prerendering: 预渲染 `->` 在应用程序构建时,使用静态 HTML 作为其初始状态
- SSR: 服务端渲染 `->` 在服务器上将应用程序渲染为 HTML
- Rehydration: 同构 `->` 在客户端上“启动” JavaScript 视图，复用服务器渲染的 HTML DOM 树和数据

## 二、什么是预渲染?

⁉️

## 三、为什么使用预渲染?

SPA (Single-Page-Application) 首屏渲染慢, 白屏时间过长问题、SEO 等问题

- 更好的 SEO
- 更快的 FCP

## 四、预渲染使用场景及特定场景对比

### 4.1 性能指标

- TTFB: Time to First Byte (首字节时间)
- FP: First Paint (首次绘制 `->` 标记浏览器渲染任何在视觉上不同于导航前屏幕内容之内容的时间点)
- FCP: First Contentful Paint (首次内容绘制 `->` 标记的是浏览器渲染来自 DOM 第一位内容的时间点)
- FMP: First Meaningful Paint(首次有意义绘制 `->`标记应用是否已渲染可以与用户互动的足够内容的时间点)
- TTI: Time To Interactive (可交互时间 `->` 标记应用已进行视觉渲染并能可靠响应用户输入的时间点)

### 4.2 **特定**页面**特定**场景下的对比

1. 不常改动、公开型页面
2. 忽略并发、服务器性能、带宽
3. 服务器渲染 读取本地资源文件、客户端渲染读取 CDN 文件
4. 需请求列表接口
5. ...

|      |  CSR   | Prerendering | SSR  |   Rehydration   |
| :--: | :----: | :----------: | :--: | :-------------: |
| TTFB |   快   |      快      |  慢  | CSR(快)/SSR(慢) |
|  FP  |   快   |      快      |  慢  | CSR(快)/SSR(慢) |
| FCP  |   慢   |      快      |  快  | CSR(慢)/SSR(快) |
| FMP  |   慢   |      快      |  快  | CSR(慢)/SSR(快) |
| TTI  |   /    |      /       |  /   |        /        |
| SEO  | 不友好 |     友好     | 友好 |      友好       |

## 五、如何实现预渲染

## 六、问题

## 七、参考

- [Definitions MDN](https://developer.mozilla.org/en-US/docs/Glossary)
- [Rendering on the Web](https://developers.google.com/web/updates/2019/02/rendering-on-the-web)
- [构建时预渲染：网页首帧优化实践](https://tech.meituan.com/2018/11/15/first-contentful-paint-practice.html)
- [大前端时代，如何做好 C 端业务下的 React SSR？](https://www.infoq.cn/article/GTPDzrtrlrjYlMeW-d0E)
- [性能指标都是些什么鬼?](https://llp0574.github.io/2017/10/19/performance-metrics-whats-this-all-about/)
- [以用户为中心的性能指标](https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics)

## 八、工具

- [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk)

## 九、SEO 方案

- 服务端渲染(SSR)
- 预渲染(Prerender)
- 区分 user-agent

## 十、SEO 常见注意事项

1. 网站结构优化

- 控制首页链接数量适中
- 目录层次尽可能扁平化
- 导航尽可能采用文字, `<img />`标签尽可能加上`alt`和`title`属性
- 网站结构布局(头部{logo、导航、用户信息}、主体{面包屑、正文等}、底部{版权信息、友情链接等})
- 控制页面大小,减少 `http` 请求,提高网站的加载速度

2. 网站代码优化

- 合理设计 `HTML`元信息, `<title />`(特定网页的主题) , `<meta description/>` (总括性描述), `<meta keywords/>` (网站关键字),
- 语义化书写 HTML 代码
  - `<a/>` 标签加上 `title` 属性说明, 使用 `rel="nofllow"`告知爬虫不去爬取外部链接
    ```html
    <!-- <meta name="robots" content="nofollow" /> -->
    <a href="https://www.baidu.com" title="百度搜索">去搜搜</a>
    ```
  - 正文标题使用 `<h1/>` 标签
  - `<img />`标签 使用 `alt`属性进行说明
    ```html
    <img src="cat.jpg" width="300" height="200" alt="猫" />
    ```
  - `<caption />` 标签定义表格标题
    ```html
    <table>
    	<caption>
    		标题
    	</caption>
    	<tbody>
    		<tr>
    			<td>line1</td>
    			<td>line1</td>
    		</tr>
    		<tr>
    			<td>line2</td>
    			<td>line2</td>
    		</tr>
    	</tbody>
    </table>
    ```
  - `<br />`标签只用作文本内容的换行
  - 需要进行内容强调时,使用`<strong />`、`<em/>`标签(`<b />`、`<i />`仅告知浏览器样式变化)
  - 文本缩进不要使用特殊符号 `&nbsp;` 应当使用 CSS 进行设置。版权符号不要使用特殊符号`&copy;` 可以直接使用输入法打出版权符号 ©
  - 重要内容不要用 JS 输出(爬虫不会读取)
  - 尽量少使用 iframe 框架(爬虫不会读取)
  - 谨慎使用 `display：none` (爬虫过滤)

3. 网站性能优化

- 尽可能少的网络请求
  - CSS 精灵
  - 将多个样式文件或脚本文件合并为一个文件
  - 图片懒加载
- 控制资源文件优先级(样式优先)
- 减少 DOM 操作,减少重排(Reflow)
- 使用 CDN, 浏览器缓存, 启用 GZIP 压缩
- 伪静态设置(.html)

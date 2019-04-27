# Prerender-summary

## 预渲染为了什么?

`SEO`, （Search Engine Optimization）搜索引擎优化:利用搜索引擎的规则提高网站在有关搜索引擎内的自然排名。

## SEO 方案
- 服务端渲染(SSR)
- 预渲染(Prerender)

## SEO 常见注意事项

1. 网站结构优化
  - 控制首页链接数量适中
  - 目录层次尽可能扁平化
  - 导航尽可能采用文字, `<img />`标签尽可能加上`alt`和`title`属性
  - 网站结构布局(头部{logo、导航、用户信息}、主体{面包屑、正文等}、底部{版权信息、友情链接等})
  - 控制页面大小,减少 `http` 请求,提高网站的加载速度

2. 网站代码优化
  - 合理设计 `HTML`元信息, `<title />`(特定网页的主题) , `<meta description/>` (总括性描述), `<meta keywords/>` (网站关键字),
  - 语义化书写HTML代码
    - `<a/>` 标签加上 `title` 属性说明, 使用 `el="nofllow"`告知爬虫 不去爬取外部链接 
      ```html
        <a href="https://www.baidu.com" title="百度搜索">去搜搜</a>
      ```
    - 正文标题使用 `<h1/>` 标签
    - `<img />`标签 使用 `alt`属性进行说明
      ```html
        <img src="cat.jpg" width="300" height="200" alt="猫"  />
      ```
    - `<caption />` 标签定义表格标题
      ```html
        <table border='1'>
            <caption>标题</caption>
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
    - 文本缩进不要使用特殊符号 `&nbsp;` 应当使用CSS进行设置。版权符号不要使用特殊符号` &copy;` 可以直接使用输入法打出版权符号©
    - 重要内容不要用JS输出(爬虫不会读取)
    - 尽量少使用iframe框架(爬虫不会读取)
    - 谨慎使用 `display：none` (爬虫过滤)
3. 网站性能优化
  - 尽可能少的网络请求
    - CSS精灵
    - 将多个样式文件或脚本文件合并为一个文件
    - 图片懒加载
  - 控制资源文件优先级(样式优先)
  - 浏览器缓存
  - 减少重排(Reflow)
  - 减少 DOM 操作
  - 使用 CDN
  - 启用GZIP 压缩
  - 伪静态设置(.html)
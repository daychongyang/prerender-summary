'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var puppeteer = _interopDefault(require('puppeteer'));
var http = _interopDefault(require('http'));
var serveStatic = _interopDefault(require('serve-static'));
var finalhandler = _interopDefault(require('finalhandler'));
var path = _interopDefault(require('path'));
var fs = _interopDefault(require('fs'));

class Server {
  constructor(config) {
    this._config = config;
  }

  init() {
    const {
      staticDir,
      port
    } = this._config;
    const serve = serveStatic(staticDir, {
      index: ['index.html', 'index.htm']
    });
    const server = http.createServer((req, res) => {
      serve(req, res, finalhandler(req, res));
    });
    server.listen(port, () => {
      console.log('Static Server Init Success !!!');
    });
  }

}

function writeHtml(path, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, err => {
      if (err) reject(err);
      resolve(`[${path}] has been saved!`);
    });
  });
}

async function render({
  browser,
  route,
  cdn,
  port,
  requestProcess,
  renderTimeout
}) {
  const currentPage = await browser.newPage();
  currentPage.setRequestInterception(true);
  currentPage.on('request', interceptedRequest => {
    const requestUrl = interceptedRequest.url();

    if (cdn && requestUrl.startsWith(cdn) && typeof requestProcess === 'function') {
      interceptedRequest.continue({
        url: requestProcess(requestUrl)
      });
    } else interceptedRequest.continue();
  });
  renderTimeout && (await page.waitFor(renderTimeout));
  await currentPage.on('load', async () => {
    const html = await currentPage.content();
    console.log(path.resolve(process.cwd(), `dist${route}`, 'index.html'));
    writeHtml(path.resolve(path.resolve(process.cwd(), `dist${route}`, 'index.html')), html);
    await currentPage.close();
  });
  await currentPage.goto(`http://localhost:${port}${route}`);
}

/**
 * 插件的基本构成:
 * 1. 一个具名 JavaScript 函数
 * 2. 在它的原型上定义 apply 方法
 * 3. 指定一个触及到 webpack 本身的事件钩子
 * 4. 操作 webpack compilation 特定数据
 * 5. 在实现功能后调用 webpack 提供的 calllback
 * ! https://webpack.docschina.org/contribute/writing-a-plugin/
 */

class Prerendering {
  /**
   * Creates an instance of Prerendering.
   * @param {object} options
   * @memberof Prerendering
   * @property {string} staticDir=dist - webpack 将编译资源写入磁盘的目录
   * @property {string} outputDir=dist - 预渲染插件输出构建资源的目录
   * @property {string} indexPath=dist/index.html - 应用首页路径
   * @property {array} routes=[] - 需进行预渲染的页面路径集合
   * @property {boolean} headless=true - Chromium headeless 模式
   * @property {func} postProcess=()=>{} - 针对构建结果及输出目录进行修正
   * @property {func} port=()=>{} - 预渲染服务端口
   * @property {object} minify={ collapseBooleanAttributes: true,collapseWhitespace: true,decodeEntities: true,keepClosingSlash: true,sortAttributes: true}针对构建产物进行压缩
   * @property {string} cdn='' CDN 字符串
   * @property {number} renderTimeout=0 几秒后渲染
   * @property {func} requestProcess=()=>{} 针对CDN资源做拦截处理
   */
  constructor(options) {
    this.apply = compiler => {
      /** 编译资源 -> 磁盘 */
      compiler.hooks.afterEmit.tapAsync('Prerendering', this.afterEmit);
    };

    this.afterEmit = async (compilation, done) => {
      const {
        cdn,
        port,
        headless = true,
        routes = [],
        requestProcess,
        renderTimeout
      } = this._options;

      try {
        this._server.init();

        const browser = await puppeteer.launch({
          headless
        });
        routes.forEach(async route => {
          await render({
            cdn,
            port,
            route,
            browser,
            requestProcess,
            renderTimeout
          });
        });
      } catch (e) {
        console.error(e);
      }
    };

    // const { isIllegal, errorInfo } = this.checkOptions(options)
    // if (isIllegal) {
    //   throw new Error(errorInfo)
    // }
    const {
      staticDir,
      port: _port = 9527
    } = options;
    this._options = options;
    this._server = new Server({
      staticDir,
      port: _port
    });
  }

}

module.exports = Prerendering;

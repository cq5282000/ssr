const Koa = require('koa');
const app = new Koa();
const path = require('path');
const staticServer = require('koa-static-server');
const dev = require('./dev.js');
const router = require('./routers')(app);

// 解析器
let build = dev();
// 静态资源路径
const distPath = path.join(__dirname, '../dist');
// 静态资源
app.use(staticServer({ rootDir: distPath, rootPath: '/dist' }));

app.use(async (ctx, next) => {
    try {
        if (!build.renderer) {
            return ctx.body = "构筑中……";
        }
        console.log(ctx.request.url);
        let str = await build.renderer.renderToString(
            {
                url: ctx.request.url,
            });
        ctx.body = str;
        ctx.set('Content-Type', 'text/html; charset=utf-8')
    } catch (e) {
        console.error(e);
        ctx.body = "ERROR";
    }
});

app.listen(8080, () => {
    console.log('listen 8080');
});
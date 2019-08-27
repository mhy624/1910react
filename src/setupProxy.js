const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use(proxy("/hub",{
        target:"https://api.ricebook.com",
        changeOrigin:true,
    }))
    app.use(proxy("/server",{
        target:"https://m.228.cn",
        changeOrigin:true,
    }))
}
const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use(proxy("/server",{
        target:"https://m.228.cn",
        changeOrigin:true,
    }))
    app.use(proxy("/theatre",{
        target:"https://api.juooo.com",
        changeOrigin:true,
    }))
}

require("http").createServer(function (req: any, res: any) {
    res.end("Hello from server started by Electron app!");
}).listen(9000);
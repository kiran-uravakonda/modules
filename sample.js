var http=require('http');
var port=2000;
http.createServer((req,res)=>{
    // console.log(req.headers)
    res.setHeader('content-Type','text/html')
    res.write("welcome to nodejs")
    res.end()
}).listen(port,()=>{
    console.log(`server running on ${port}`)
})
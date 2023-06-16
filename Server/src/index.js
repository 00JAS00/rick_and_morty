const http=require("http");
const {getCharById}=require('./controllers/getCharById')


http.createServer((req,res)=>{
const {url}=req
res.setHeader('Access-Control-Allow-Origin', '*');
if(url=="/"){
    return res.writeHead(200,{"Content-type":"text/plane"})
                .end("Estas en barra
                ")
}
if(url.includes("/rickandmorty/character")){
    const id=url.split('/').at(-1);
    getCharById(res,id)}

}).listen(3001,"localhost")
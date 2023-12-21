const { error } = require("console");
const http=require("http");
//Creater server
const server = http.createServer((req,res)=>{
    //gettinf the url
    const url = req.url;
    if(url == "/movie/now_playng"){
        res.end("PLAYINF IN  NOW PALYING");
    } else if (url == "movie/popular"){
        res.end("POPUPLAR PAGE");
    } else if(url == "/api"){
        fs.readFile("./input.txt","utf-8",(err,data) => {
            if(err) throw err;
            res.end(JSON.parse(data));
        })
    }else  {
        res.writeHead(404);
        res.end("NOT FOUND");
    }
}
);
//Listing server
server.listen(8000,"127.0.0.1",() => {
 console.log("Server is listening on port 8000");
})
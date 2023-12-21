const fs=require("fs");
const http=require("http");
const url = require("url");

const data = fs.readFileSync(`${__dirname}/data.json`,"utf-8");
const jsonData=JSON.parse(data);
const htmlData = fs.readFileSync(`${__dirname}/overview.html`,"utf-8");

//Creater server
const server = http.createServer((req,res)=>{

    const {query , pathname}= url.parse(req.url,true);
    
    console.log(pathname);
    //gettinf the url
   
    if(pathname == "/movie/now_playng"){
        res.end("PLAYINF IN  NOW PALYING");
    } else if (pathname == "movie/popular"){
        res.end("POPUPLAR PAGE");
    } else if(pathname == "/api"){
       
        const id=query["id"];
        const myitem = jsonData.filter((farm) =>{
            return farm.id = id;

        } );
        console.log(myitem);
           res.writeHead(200,{
            "content-type": "application/json",
           
        });
        res.end(JSON.stringify(myitem));
    } else if(pathname == "/overview"){
        res.writeHead(200,{
            "content-type": "text-htnl",
            "my-own-header": "hello-world",
        });
        res.end(htmlData);
    }else if(pathname =="/product"){
        res.end("PRODUCT DATA")
    }

    else  {
        res.writeHead(404,{
            "content-type":"text-html"
        });
        res.end("<h1><i>PAGE NOT FOUND <i><h1>");
    } 
}
);
//Listing server
server.listen(8000,"127.0.0.1",() => {
 console.log("Server is listening on port 8000");
})
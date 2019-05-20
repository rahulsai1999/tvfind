var express=require("express");
var http=require("http");
var request=require("request");
var bodyParser=require("body-parser");
var sear,id,page="";
var app=express();

var url="";
var url1="http://www.omdbapi.com/?apikey=thewdb&type=Series&s=";
var url2="https://eztv.ag/api/get-torrents?imdb_id=";
var url3="&page=";
var parsedData={};

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("home");
});

app.post("/search",function(req,res){
    sear=req.body.sear;
    sear=sear.trim();
    var arr=sear.split(" ");
    sear=arr.join("+");
    console.log(sear);
    url=url1+sear;
    
    request(url,function(error,response,body)
    {
        parsedData=JSON.parse(body);
        res.render("resultm",{data:parsedData});
    });
});

app.get("/imdb/:id/:page",function(req,res){
    id=req.params.id;
    page=req.params.page;
    url=url2+id+url3+page;
    
    request(url,function(error,response,body)
    {
        parsedData=JSON.parse(body);
        res.render("resultf",{data:parsedData,count:Number(page),id:id});
    });
});


app.post("*",function(req,res){
    res.render("error");
});

var server = http.createServer(app);

var port = 80; // 2. Using process.env.PORT
  app.set('port', port);

server.listen(port);

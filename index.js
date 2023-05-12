var express = require("express");
var controller = require("./system/controller");


var app = express();
app.use(express.static("public"));

app.get("/", function(request, response)
{
    controller.homePage(response);
});

app.get("/munkaink", function(request, response)
{
    
    controller.ourJobs(response);
});
app.get("/elerhetoseg", function(request, response)
{
    
    controller.contactInfo(response);
});
app.get("/kapcsolat", function(request, response)
{
    
    controller.contactPage(response);
});



app.listen(8080);
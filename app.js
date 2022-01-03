const express = require("express");
const bodyParser = require("body-parser")
var port = process.env.port || 2525
const app = express();
app.use(bodyParser.urlencoded({
	extended:true
}));

app.get("/cal", function(req, res) {
res.sendFile(__dirname + "/app.html");
});

app.post("/", function(req, res) {
var num1 = Number(req.body.num1);
var num2 = Number(req.body.num2);
	
var result = num1 + num2 ;
	
res.send("Addition - " + result);
});
app.listen(port,(res,req)=> {
console.log(`Server ${port}`)
});



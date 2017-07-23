var express = require("express"),
	path = require("path"),
	bodyParser = require("body-parser"),
	routes = require("./routes/routes"),
	mongoose =require("mongoose"),
	app = express();
//I need the body-parser and routes module

app.use("/client", express.static(path.join(__dirname, "exam/client")));
app.use("/templates", express.static(path.join(__dirname, "exam/client/templates")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

routes(app);

//I can't seem to direct to my routes but I am running, can you link me to my routes? Please input the routes in this file.
mongoose.connect(process.env.DB_URL);
app.listen(process.env.PORT || 8080);
console.log("Final is running!");
 //What Port should I listen on? Please put the port in between the parantheses
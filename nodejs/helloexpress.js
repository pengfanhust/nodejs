var express = require("../npm/node_modules/express");
var app = express();

app.get('/hello.txt', function(req, res){
  res.send('Hello World');
});

app.get('/jsonhello', function(req, res){
  res.json({message : "json Hello World"});
});

var app1 = {name:"fb"};
var app2 = {name:"tt"};
var app3 = {name:"gg"};
var app4 = {name:"misc"};

var a = {first:"af",second:"as"};
var b = {first:"bf",second:"bs"};

a.projects = [app1, app2];
b.projects = [app3, app4];

var employees = [a, b];

app.get('/employees', function(req, res){
    res.json(employees);
});

app.get('/employees/:index', function(req, res){
    //var index = req.params["index"];
    var index = req.params.index;
	res.json(employees[index]);
});

app.get('/employees/:index/project', function(req, res){
    //var index = req.params["index"];
    var index = req.params.index;
	res.json(employees[index].projects);
});


app.get('/employees/:index/project/:projectindex', function(req, res){
    //var index = req.params["index"];
    var index = req.params.index;
	var pi = req.params.projectindex
	res.json(employees[index].projects[pi]);
});


var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
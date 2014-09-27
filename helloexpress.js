var express = require('express');
var app = express();

app.get('/hello.txt', function(req, res){
  res.send('Hello World');
});

app.get('/jsonhello', function(req, res){
  res.json({message : "json Hello World"});
});

var app1 = {name:"facebook"};
var app2 = {name:"twitter"};
var app3 = {name:"google"};
var app4 = {name:"whatelse"};

var alice = {first:"alice",second:"alice"};
var bob = {first:"bob",second:"bob"};

alice.projects = [app1, app2];
bob.projects = [app3, app4];

var employees = [alice, bob];

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


var server = app.listen(8080, function() {
    console.log('Listening on port %d', server.address().port);
});
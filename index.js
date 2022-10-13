var express = require('express')
var bodyParser = require('body-parser')
var {gestisciInteruttore, statoInterruttore} = require('./lib/interruttore')

var app = express()
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req,res) {
   // console.log(req)
   res.sendFile("website/index.html", {root: __dirname})
})

app.get('/interruttore',(req,res) => {
   res.send(statoInterruttore())
})


app.post('/interruttore',(req,res) => {
   res.sendStatus(gestisciInteruttore(req.body.stanza))
})

var server = app.listen(5000, function() {
   console.log("Node server is running")
})



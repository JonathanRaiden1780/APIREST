const cliente = require("./models/cliente.js");

var express = require("express"),
    app = express(),
    http = require("http")
    server = http.createServer(app)
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');
    ClienteCtrl = require('./controller/conf.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {
   res.send("Hello World!");
});

 router.route('/cliente')
.get(ClienteCtrl.findCliente)
.post(ClienteCtrl.addCliente)

router.route('/cliente/:id')
.get(ClienteCtrl.findById)
//.put(ClienteCtrl.updatecliente)

app.use('/api', cliente);


mongoose.connect('mongodb://localhost/cliente', function(err, resp){
    if(err){
        console.log("Error:" +  err)
    }
    app.listen(3000, function() {
        console.log("Node server running on http://localhost:3000");
      });
});


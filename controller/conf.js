var mongoose = require('mongoose');
var Client = mongoose.model('Cliente');

exports.findCliente = function (req, res) {
    Client.find(function (err, cliente) {
        if (err) res.send(500, err.message);

        console.log('GET /cliente')
        res.status(200).jsonp(cliente);
    });
};

exports.findById = function (req, res) {
    Client.findById(req.params.id, function (err, cliente) {
        if (err) return res.send(500, err.message);
        console.log('GET /cliente/' + req.params.id);
        res.status(200).jsonp(cliente);
    });
};

exports.addCliente = function (req, res) {
        console.log('POST');
        console.log(req.body);
    
        var cliente = new Client({
                Cliente_ID: req.body.Cliente_ID,
                Nombre_Usuario: req.body.Nombre_Usuario,
                Contrasena: req.body.Contrasena,
                Nombre: req.body.Nombre,
                Apellidos: req.body.Apellidos,
                Correo_Electronico: req.body.Correo_Electronico,
                Edad: req.body.Edad,
                Estatura: req.body.Estatura,
                Peso: req.body.Peso,
                IMC: req.body.IMC,
                GEB: req.body.GEB,
                ETA: req.body.ETA,
                Fecha_Creacion: req.body.Fecha_Creacion,
                Fecha_Actualizacion: req.body.Fecha_Actualizacion,
            });
    
        cliente.save(function (err, cliente) {
            console.log(cliente)
                if (err) return res.status(500).send(err.message);
            res.status(200).jsonp(cliente);
        
    });
    exports.updatecliente = function(req, res) {
            Client.findById(req.params.id, function(err, cliente) {
                cliente.Nombre_Usuario =  req.body.Nombre_Usuario
                cliente.Contrasena =  req.body.Contrasena
                cliente.Nombre =  req.body.Nombre
                cliente.Apellidos =  req.body.Apellidos
                cliente.Correo_Electronico =  req.body.Correo_Electronico
                cliente.Edad =  req.body.Edad
                cliente.Estatura =  req.body.Estatura
                cliente.Peso =  req.body.Peso
                cliente.IMC =  req.body.IMC
                cliente.GEB =  req.body.GEB
                cliente.ETA =  req.body.ETA
                cliente.Fecha_Creacion =  req.body.Fecha_Creacion
                cliente.Fecha_Actualizacion =  req.body.Fecha_Actualizacion
                cliente.save(function(err) {
                    if(err) return res.status(500).send(err.message);
            res.status(200).jsonp(cliente);
                });
            })
        }
    }

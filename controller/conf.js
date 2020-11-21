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
    var date = new Date;

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
        Fecha_Creacion: date,
        Fecha_Actualizacion: date,
        Cve_Error: 0,
        Cve_Mensaje: ''
    });

    cliente.save(function (err, cliente) {
        console.log(cliente, "save")
        if (err != null) {
            cliente.Cve_Error = -1;
            cliente.Cve_Mensaje = err.message
        }

        console.log(err, "error")
        //console.log(res,"respuesta")

        if (err) return res.status(500).send(err.message);
        res.status(200).jsonp(cliente);

    });
    exports.updatecliente = function (req, res) {
        var date = new Date;
        Client.findById(req.params.id, function (err, cliente) {
            console.log(err)
            cliente.Nombre_Usuario = req.body.Nombre_Usuario
            cliente.Contrasena = req.body.Contrasena
            cliente.Nombre = req.body.Nombre
            cliente.Apellidos = req.body.Apellidos
            cliente.Correo_Electronico = req.body.Correo_Electronico
            cliente.Edad = req.body.Edad
            cliente.Estatura = req.body.Estatura
            cliente.Peso = req.body.Peso
            cliente.Fecha_Actualizacion = date
            cliente.save(function (err, cliente) {
                if (err) return res.status(500).send(err.message);
                res.status(200).jsonp(cliente);
            });
        })
    }
}

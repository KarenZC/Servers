var express = require("express");
var app = express();

app.get("/", (req, res) => {
    res.send("Bienvenido a Admin")

    var enfasis = ['Ofimática', 'Informática', 'Estética y Salud Corporal', 'Confección del vestido e Industria Textil',
        'Diseño Arquitectónico', 'Díseño de Circuitos Eléctricos', 'Elecctrónica, Comunicación y Sistemas de Control', 'Díseño Gráfico',
        'Preparación y Conservación de Alimentos', 'Carpintería e industria de la madera', ''
    ];
    res.render("pages/home", { title: "Home", enfasis })
})

module.exports = app;
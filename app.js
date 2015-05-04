
var express = require("express"),
    session = require("express-session"),
    handlebars = require("express-handlebars"),
    i18n = require("i18n");

var country = require("./bin/getCountry");





var app = express();

    app.use("/assets", express.static("public"));

    app.use(session({
        secret: "keyboard cat"
    }));






var hbs = handlebars.create({

        helpers: {
            __: function( text ) { return i18n.__( text ); }
        },

        defaultLayout: "main", 
        extname: ".hbs" 

    });


    i18n.configure({

        locales:["en", "zh_cn"],
        directory: __dirname + "/locales"

    });

    app.engine(".hbs", hbs.engine );
    app.set("view engine", ".hbs");







    app.get("/", function (req, res) {

        var lang = country.getCountry( req );
        console.log( req.session );

        res.render( "home", { lang: lang });

    });


    var server = app.listen(3000, function () {

        var host = server.address().address;
        var port = server.address().port;

        console.log("Example app listening at http://%s:%s", host, port);

    });
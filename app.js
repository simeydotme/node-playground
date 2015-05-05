


/* core modules */
var express =   require("express"),
    cookies =   require("cookie-parser"),
    session =   require("express-session"),
    i18n =      require("i18n");



/* routing definitions */
var routes =    require("./routes/definitions");



/* configuration */
var folder =    "./config/",
    inter =     require( folder + "i18n/setup" ),
    hbs =       require( folder + "handlebars/setup" );






var app = express();

    app.use("/assets", express.static("public"));
    app.use(session({ secret: "keyboard cat" }));
    app.use(cookies());

    for( var route in routes ) {
        app.use( routes[route] );
    }

    app.engine(".hbs", hbs.engine );
    app.set("view engine", ".hbs");









    var server = app.listen(3000, function () {

        var host = server.address().address;
        var port = server.address().port;

        console.log("Lane Crawford E-Store Running at http://%s:%s", host, port);

    });
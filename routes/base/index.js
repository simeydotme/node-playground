

    var express = require("express"),
        router = express.Router();

    var country = require("../../modules/getCountry");



        router.get("/*", function (req, res, next) {

            var lang = country.getCountry( req );
            console.log( "!!! language is: [" + lang + "]" );

            next("route");

        });


        router.get("/", function (req, res) {

            res.render( "home", { lang: req.session.country });

        });


    module.exports = router;

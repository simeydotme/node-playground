

    var express = require("express"),
        router = express.Router();


    var makeTitle = require("../../modules/pdp/makeTitle");




        router.get("/pdp/:product", function (req, res, next) {

            var product;

            try {

                product = require( "../../modules/pdp/products/" + req.params.product + ".json" );

                res.render( "pdp/pdp", { 

                    lang: req.session.country,
                    title: makeTitle( product ),
                    product: product

                });

            } catch( err ) {

                console.log( err );
                next();

            }

        });


        router.get( /pdp(.*)/, function (req, res) {
    
                res.render( "pdp/not-found", { 

                    lang: req.session.country,
                    productUrl: req.url

                });

        });



    module.exports = router;

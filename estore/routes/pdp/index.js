

    var express = require("express"),
        router = express.Router();


    var makeTitle = require("../../modules/pdp/makeTitle"),
        recentlyViewed = require("../../modules/pdp/recentlyViewed");




        router.get("/pdp/:product", function (req, res, next) {

            var product,
                recent;

            try {

                product = require( "../../modules/pdp/products/" + req.params.product + ".json" );
                recentList = recentlyViewed.add( req.session , product ).slice(0, 3);

                res.render( "pdp/pdp", {

                    lang: req.session.country,
                    title: makeTitle( product ),
                    product: product,
                    recent: recentList

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



    var express = require("express"),
        router = express.Router();



        router.get("/pdp", function (req, res) {

            res.render( "pdp", { lang: req.session.country });

        });



    module.exports = router;

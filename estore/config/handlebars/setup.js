    
    var handlebars = require("express-handlebars"),
        i18n = require("i18n");



    module.exports = 

        handlebars.create({

            defaultLayout: "main",
            extname: ".hbs",

            helpers: {

                __: function( text ) { 

                    return i18n.__( text );

                }

            }

        });
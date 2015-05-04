
var express = require("express"),
    session = require("express-session"),
    i18n = require("i18n");

    module.exports = {

        getCountry: function( request ) {

            if( request.query._country ) {
                i18n.setLocale( request.query._country.toLowerCase() );
            }
                
            request.session.country = i18n.getLocale();

            return request.session.country;

        }

    };
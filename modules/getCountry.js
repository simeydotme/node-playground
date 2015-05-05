
var express = require("express"),
    session = require("express-session"),
    cookies = require("cookie-parser"),
    i18n = require("i18n");

    module.exports = {

        getCountry: function( req ) {

            if( req.query.country ) {

                console.log( "!!! Locale taken from Query String");
                i18n.setLocale( req.query.country.toLowerCase() );

            } else if ( req.cookies.country ) {

                console.log( "!!! Locale taken from Cookie");
                i18n.setLocale( req.cookies.country.toLowerCase() );

            }

            if( !req.session.country || req.session.country !== i18n.getLocale() ) {
            
                console.log( "!!! Locale stored to Session");
                req.session.country = i18n.getLocale();

            }

            return req.session.country;

        }

    };
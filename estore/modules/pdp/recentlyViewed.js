
    module.exports = {

        add: function( session, product ) {

            if( Object.prototype.toString.call(session.recent) == "[object Array]" ) {
                    
                var alreadyExists = false;

                for( var item in session.recent ) {
                    if( session.recent[item].essentialInfo.productId === product.essentialInfo.productId ) {
                        alreadyExists = true;
                    }
                }

                if( !alreadyExists ) {

                    session.recent.unshift( product );

                    if ( session.recent.length >= 3 ) {
                        session.recent = session.recent.slice( 0, 4 );
                    }

                }

            } else {

                session.recent = [ product ];

            }

            return session.recent;

        }

    };

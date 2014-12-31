/**
 *  App
 *
 *  Root application file.
 */
define([ "application-dependency" ],
function(application_dependency) {
    "use strict";

    var app = {};

    app.init = function() {
        application_dependency.init();

        return true;
    };

    return app;
});

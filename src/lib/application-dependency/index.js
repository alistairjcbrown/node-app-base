/**
 *  Application Dependency
 *
 *  Example application dependency.
 *  Use as a starting point when developing a new module.
 */
define([
  "config", "pubsub", "check"
], function(
  config, pubsub, check
) {
    "use strict";

    var incomingLookup = function(data) {
        if (check(data).is.not("string") ||
            ! check(config).has(data)) {
            return;
        }

        pubsub.trigger("value", config[data]);
    };

    return {
        init: function() {
            pubsub.on("lookup", incomingLookup);
        },
        destroy: function() {
            pubsub.off("lookup");
        }
    };
});

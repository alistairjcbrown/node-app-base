/**
 *  Application Dependency Tests
 */
define([
    "mocks/pubsub"
], function(
    pubsub_mock
) {
    "use strict";

    suite("Application Dependency", function() {
        var config_mock = { foo: "bar" },
            app_dep;

        suiteSetup(function(done) {
            injector.mock("pubsub", pubsub_mock);
            injector.mock("config", config_mock);
            injector.require(["lib/application-dependency"], function(application_dependency) {
                app_dep = application_dependency;
                done();
            });
        });

        setup(function() {
            app_dep.init();
        });

        teardown(function() {
            app_dep.destroy();
        });

        test("should exist", function() {
            expect(app_dep).to.be.an("object");
        });

        suite("initialize", function() {
            test("should exist", function() {
                expect(app_dep.init).to.be.a("function");
            });

            test("should start listening", function() {
                expect(pubsub_mock.on).to.have.been.calledOnce;
                expect(pubsub_mock.on.getCall(0).args[0]).to.equal("lookup");
            });
        });

        suite("Lookup event received", function() {

            suite("non-string value triggered", function() {
                setup(function() {
                    var value = 123;
                    pubsub_mock.trigger("lookup", value);
                    pubsub_mock.trigger.reset();
                });

                test("should not trigger response", function() {
                    expect(pubsub_mock.trigger).to.not.be.called;
                });
            });

            suite("no corresponding value available", function() {
                setup(function() {
                    var value = "baz";
                    pubsub_mock.trigger("lookup", value);
                    pubsub_mock.trigger.reset();
                });

                test("should not trigger response", function() {
                    expect(pubsub_mock.trigger).to.not.be.called;
                });
            });

            suite("corresponding value available", function() {
                setup(function() {
                    var value = "foo";
                    pubsub_mock.trigger("lookup", value);
                });

                test("should trigger response", function() {
                    expect(pubsub_mock.trigger).to.be.calledTwice;
                    expect(pubsub_mock.trigger.getCall(1).args[0]).to.equal("value");
                    expect(pubsub_mock.trigger.getCall(1).args[1]).to.equal(config_mock.foo);
                });
            });
        });

    });
});

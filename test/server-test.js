var buster  = require("buster");

var Server  = require("./server.js").Server;

// How long to wait for server to start.
// var serverDelay = 1500;

var alpha;

buster.testCase("Standalone server startup", {
  "server start and stop" : function (done) {
      alpha = Server.from_config("alpha");

      alpha
	.on('started', function () {
	    alpha
	      .on('stopped', function () {
		  buster.assert(true);

		  done();
		})
	      .stop();
	  })
	.start();
    }
});

// vim:sw=2:sts=2:ts=8
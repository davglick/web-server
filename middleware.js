var middleware = {

	requireAuthentication : function(req, res, next) {
		console.log('private route hit!');
		next();
	},
	logger: function (req, res, next) {

		console.log(req.method + " " + req.origionalUrl);
		next();
		
	}

};

	module.exports = middleware;


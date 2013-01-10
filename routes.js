var mongoose = require('mongoose');
mongoose.connect('localhost', 'madelinquency');

var schema = mongoose.Schema({
	// Define schema here...
});

var ModelName = mongoose.model('Model', schema);

// INDEX
// Should map to GET /models/
exports.findAll = function(req, res) {
	Model.find(function (err, models) {
		if (err) return errorHandler(err, res); // TODO handle err
		res.send(models);
	});
};

// SHOW
// Should map to GET /models/:id
exports.findById = function(req, res) {
	var id = req.params.id;
	Model.findById(id, function(err, model) {
		if (err) return errorHandler(err, res); // TODO handle err
		res.send(model);				
	});
}

// CREATE
// Should map to POST /models
exports.addModel = function(req, res) {
	var Model = new Model(req.body);
	Model.save(function(err) {
		if (err) return errorHandler(err, res); // TODO handle err
		res.send(model);		
	});
};

// UPDATE
// Should map to PUT /models/:id
exports.updateModel = function(req, res) { 
	var id = req.params.id;
	Model.findById(id, function(err, model) {
		if (err) return errorHandler(err, res); // TODO handle err
		Model.update(req.body, function(err) {
			if (err) {}
			res.send(model);
		});		
	});
};

// DELETE
// Should map to DELETE /models/:id
exports.deleteModel = function(req, res) { 
	var id = req.params.id;
	Model.findById(id, function(err, model) {
		Model.remove(function (err) {
			if (err) return errorHandler(err, res); // TODO handle err
			res.send(model);
		});
	});
};

// ERRORS
function errorHandler(err, res) {
	res.send(err);
}
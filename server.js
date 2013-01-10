var express = require('express'),
    routes = require('./routes');

var app = express();

app.configure(function() {
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
});

app.get('/models', models.findAll);
app.get('/models/:id', models.findById);
app.post('/models', models.addModel);
app.put('/models/:id', models.updateModel);
app.delete('/models/:id', models.deleteModel);

app.listen(3000);
console.log('Listening on port 3000...');

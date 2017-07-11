//requirements: require mongoose
var mongoose = require('mongoose');

//create your donut schema:
var doughnut = mongoose.Schema( {
	name: string
});

//export your donut with module.exports()
module.exports. = functions (doughnut) {
	console.log(doughnut);
};
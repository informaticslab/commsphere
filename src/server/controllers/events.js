var mongo = require('../lib/mongoConnection');

exports.saveEvent = function(req, res) {
	var eventData = req.body;

	var collection = mongo.mongodb.collection('events');

	collection.insert(eventData, function(err, result) {
		if(err) {
			res.send(err);
		} else {
			res.send({success:true});
		}
	})
};
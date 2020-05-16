function validateRequest(req, res, next) {
    if(!req.body.text ) {
        return res.status(400).json({
           message: 'Invalid input'
        })
    }
    return next();
}

function registerPostHandler(req, res, next) {

    var aylien = require("aylien_textapi");
    // set aylien API credentias
    var textapi = new aylien({
        application_id: "db3e6192",
        application_key: "75edeae8c5edda1caba3ce64c9ce0b9a"
    });

    console.log("Making request for article analysis: ", req.body.text);
    // resource: https://docs.aylien.com/textapi/endpoints/#entity-level-sentiment-analysis
    textapi.sentiment({
      'url': req.body.text
    }, function(error, response) {
        res.send(response)
    });

}

exports.validateRequest = validateRequest;
exports.registerPostHandler = registerPostHandler;

var request = require('request');
var config = require('./config');

functions = {
    authorize: function (req, res) {

        var header = config.consumerKey + ':' + config.consumerSecret;
        var encHeader = new Buffer(header).toString('base64');
        var finalHeader = 'Basic ' + encHeader;

        request.post(
            'https://api.twitter.com/oauth2/token',
            {
                form: { 'grant_type': 'client_credentials' },
                headers: { Authorization: finalHeader }
            },
            function (error, response, body) {
                if (error) {
                    console.log(error);
                }
                else {
                    config.bearerToken = JSON.parse(body).access_token;
                    res.json({ success: true, data: config.bearerToken });
                }
            })

    },
    search: function (req, res) {
        console.log(123123);
        var searchQuery = req.body.query;
        var encSearchQuery = encodeURIComponent(searchQuery);

        var bearerHeader = 'Bearer ' + config.bearerToken;

        request.get('https://api.twitter.com/1.1/search/tweets.json?q=' + encSearchQuery + 
        '&result_type=recent',
            {
                headers: { Authorization: bearerHeader }
            },
            function (error, body, response) {
                if (error) console.log(error);
                else {
                    res.json({ success: true, data: JSON.parse(body.body) });
                }
            }
        )

    }
}

module.exports = functions;


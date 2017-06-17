var express = require("express");
var app = express();
var path = require("path");
var port = process.env.PORT | 4000;
var config = require("./config");
var bodyParser = require("body-parser");
var request = require("request");

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));


app.post("/flights", function (req, res) {
    var departure = req.body.departure;
    var destination = req.body.destination;
    var departDate = encodeURIComponent(req.body.departDate);;
    var returnDate = encodeURIComponent(req.body.returnDate);
    var anytime = 'anytime';
    
    console.log(departDate);
    console.log(returnDate);

    request("http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/US/usd/en-US/" + departure + "/" + destination + "/" + departDate + "/" + returnDate + "?apikey=" + config.key, function (err, response, body) {
        if (err) throw err;
        res.send(body);
    });

})



app.listen(port, function () {
    console.log("Server is listening on port " + port);
})

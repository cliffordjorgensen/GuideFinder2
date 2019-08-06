const unirest = require("unirest");

module.exports={
    searchCity: (req, res) => {

        console.log(req.body);

        const incomingReq = unirest("GET", "https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php");
        console.log(req.body.location)
        incomingReq.query({
            "location": req.body.location
        });

        incomingReq.headers({
            "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            "x-rapidapi-key": "a81d696ff0msh9be012b0b7f7f37p1ddc64jsn4a73ad761f23"
        });

        incomingReq.end(function (incomingRes) {
            console.log("Anything");
            if (incomingRes.error) {
                return res.json({error: incomingRes.error})
            }

            res.send(incomingRes.body);
        });
    }
}


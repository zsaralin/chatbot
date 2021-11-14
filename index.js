const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const talkToChatbot = require("./chatbot");
var jsonParser = bodyParser.json();
var urlEncoded = bodyParser.urlencoded({ extended: true });

app.use(cors());
app.use(morgan("dev"));
app.get('/', (req, res, next) => {

    res.status(200).json({
        status: 'success',
        data: {
            name: 'chatbot',
            version: '0.1.0'
        }
    });

});

app.post("/chatbot", jsonParser, urlEncoded, function (req, res, next) {
    const message = req.body.message;
    console.log("message" + message);

    talkToChatbot(message)
        .then((response) => {
            res.send({ message: response });
        })
        .catch((error) => {
            console.log("Something went wrong: " + error);
            res.send({
                error: "Error occured here"
            });
        });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
const express = require("express");
const morgan = require("morgan");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true, limit: "500mb"}));
app.use(bodyParser.json({limit: "500mb"}));
app.use(morgan('combined'));

app.use("/containers", require("./src/routes/containers"));

app.listen(9000, () => console.log('Listening..'));

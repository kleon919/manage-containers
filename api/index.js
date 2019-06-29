const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true, limit: "500mb"}));
app.use(bodyParser.json({limit: "500mb"}));

app.use("/containers", require("./routes/containers"));

app.listen(9000, () => console.log('Listening..'));

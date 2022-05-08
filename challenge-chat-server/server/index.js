const express = require("express");
const data = require("./data.json");
const cors = require("cors");

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());

const welcomeMessage = {
  id: 0,
  from: "Bart",
  text: "Welcome to CYF chat system!",
};

//This array is our "data store".
//We will start with one message in the array.
//Note: messages will be lost when Glitch restarts our server.
const messages = [welcomeMessage];

app.get("/", function (request, response) {
  response.json(data);
});

app.post("/messages", (req, res) => {
  const newUser = req.body;
  res.send(newUser);
});

app.listen(process.env.PORT);

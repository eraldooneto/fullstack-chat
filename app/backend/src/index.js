const express = require("express");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();

const app = express();
const port = 3001;
const apiKey = process.env.PRIVATE_API_KEY;

app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {

    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": apiKey } }
    );

    return res.status(r.status).json(r.data);
    
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }

});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`)
  }
);
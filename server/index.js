const express = require("express");
const cors = require('cors')
const { uuid } = require('uuidv4');
const { JsonDB } = require('node-json-db');
const { Config } = require('node-json-db/dist/lib/JsonDBConfig');
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}
var db = new JsonDB(new Config("commentsDb", true, true, '/'));
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions))

app.get("/v1/characters/:id", (req, res) => {
  const characterId = req.params.id
  try {
    const data = db.getData(`/${characterId}`);
    res.json(data)
  } catch (error) {
    console.error(error);
    res.status(404).send('Not found')
  };

});
app.post("/v1/characters", (req, res) => {
  const { author, post, } = req.body
  const entry = { id: uuid(), author, post, date: new Date().toISOString() }
  db.push(`/${req.body.characterId}`, [entry], false);
  res.status(201).send()
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


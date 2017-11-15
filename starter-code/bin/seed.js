require("../config/mongoose-setup");

const CelebrityModel = require("../models/celebrity-model");


const celebrityInfo = [
  {
    name: "Antonio Banderas",
    occupation: "Actor",
    catchPhrase: "Everything changes as you get older - your mind, your body, the way you view the world."
  },
  {
    name: "Tom Cruise",
    occupation: "Actor",
    catchPhrase: "Show Me the Money!"
  },
  {
    name: "Bugs Bunny",
    occupation: "Cartoon Character",
    catchPhrase: "Eh, what's up, Doc?"
  }
];


CelebrityModel.create(celebrityInfo)
  .then((celebrityResult) => {
    console.log("Inserted ${celebrityResults.length} celebrity");
  })
  .catch((err) => {
    console.log("Celebrity insert ERROR!");
    console.log(err);
  });

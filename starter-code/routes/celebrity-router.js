const express = require("express");

const CelebrityModel = require("../models/celebrity-model");

const router = express.Router();


router.get("/celebrities", (req, res, next) => {
  CelebrityModel
    .find()
    .limit(25)
    .sort({ dateAdded: -1})
    .exec()
    .then((celebrityResults) => {

      res.locals.listOfCelebrities = celebrityResults;

      res.render("celebrity-views/celebrity-list");
    })
    .catch((err) => {

      next(err);
    });
});


router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrity-views/celebrity-form");
});


router.post("/celebrities", (req, res, next) => {
  const theCelebrity = new CelebrityModel({
    name: req.body.CelebrityName,
    occupation: req.body.CelebrityOccupation,
    catchPhrase: req.body.CelebrityCatchPhrase,
  });

  theCelebrity.save()
  .then(() => {

    res.redirect("/celebrities");

  })
  .catch((err) => {

    next(err);
  });
});


router.get("/celebrities/:celebId", (req, res, next) => {

  CelebrityModel.findById(req.params.celebId)
  .then((celebrityFromDb) => {

    res.locals.celebrityDetails = celebrityFromDb;

    res.render("celebrity-views/celebrity-details");
  })
  .catch((err) => {

    next(err);
  });

});

// use this or the GET version of deleting (not both)
router.post("/celebrities/:celebId/delete", (req, res, next) => {
    CelebrityModel.findByIdAndRemove(req.params.celebId)
      .then((celebrityFromDb) => {
          
          res.redirect("/celebrities");

      })
      .catch((err) => {
          next(err);
      });
});

module.exports = router;

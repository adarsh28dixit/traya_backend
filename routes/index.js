var express = require("express");
var Review = require("../model/index.js");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/", async (req, res) => {
  const emp = req.body;
  Review.create(emp, (err, data) => {
    if (err) {
      res.status(400).send({ msg: err.msg });
    } else {
      res.send(data);
    }
  });
});

module.exports = router;

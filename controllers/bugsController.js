var express = require("express");

var router = express.Router();

// Import the model (bug.js) to use its database functions.
var bug = require("../models/bug.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  bug.all(function(data) {
    var hbsObject = {
      bugs: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  bug.create([
    "name", "devoured"
  ], [
    req.body.name, req.body.devoured
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  bug.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  bug.delete(condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;

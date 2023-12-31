var express = require("express");
var router = express.Router();

const skillsCtrl = require("../controllers/skills");

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get("/", skillsCtrl.index);
router.get("/new", skillsCtrl.new);

router.post("/", skillsCtrl.addSkill);

module.exports = router;

var express = require("express");
var router = express.Router();

const createCtrl = require("../controllers/create");

router.get("/", createCtrl.addSkill);

module.exports = router;

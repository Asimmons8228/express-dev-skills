const Skill = require("../models/skill");

const index = (req, res) => {
  res.render("skills/index", {
    skills: Skill.getAll(),
    title: "All Skills",
  });
};

module.exports = { index };

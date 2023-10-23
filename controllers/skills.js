const Skill = require("../models/skill");

const index = (req, res) => {
  res.render("skills/index", {
    skills: Skill.getAll(),
    title: "All Skills",
  });
};
const newSkill = (req, res) => {
  res.render("skills/new", { title: "New Skill" });
};

const addSkill = (req, res) => {
  const { skill, level } = req.body;

  // Create a new skill object
  const newSkill = {
    skill,
    level,
  };

  // Add the new skill using the Skill model
  Skill.addOne(newSkill);

  // Redirect to a success page or send a response
  res.redirect("/skills");
};

module.exports = { index, new: newSkill, addSkill };

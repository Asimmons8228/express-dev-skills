const Skill = require("../models/skill");

const createSkill = (req, res) => {
  res.render("skills/create", {
    title: "New Skill",
  });
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

module.exports = { createSkill, addSkill };

const skills = [
  { id: 125223, skill: "Software", level: "Mastered" },
  { id: 127904, skill: "Analytics", level: "Intermediate" },
  { id: 139608, skill: "Mathematics", level: "Novice" },
];

module.exports = {
  getAll,
  addOne,
};

function getAll() {
  return skills;
}
function addOne(skill) {
  const id = skill.length + 1;
  skill.id = id;
  skills.push(skill);
}

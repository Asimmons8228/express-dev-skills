const skills = [
  { id: 125223, skill: "Software", done: true },
  { id: 127904, skill: "Analytics", done: false },
  { id: 139608, skill: "Mathematics", done: false },
];

module.exports = {
  getAll,
};

function getAll() {
  return skills;
}
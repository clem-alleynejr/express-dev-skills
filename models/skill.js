const skills = [
    {id: 123547, skill: 'HTML', techStack: 'Front End' },
    {id: 373449, skill: 'CSS', techStack: 'Front End' },
    {id: 748950, skill: 'JavaScript', techStack:'Front End/Back End' }
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}


function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.techStack = 'Unknown';
    skills.push(skill);
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id); 
}


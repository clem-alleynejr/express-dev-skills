const skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
}

function deleteSkill(req, res) {
  skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

function create(req, res) {
  skill.create(req.body);
  res.redirect('/skills');
}

function newSkill(req, res) {
  res.render('skills/new', { title: 'New Skill' })
}

function index(req, res) {
    res.render('skills/index', {
      skills: skill.getAll(),
      title: 'All Skills'
    });
  }

function show(req, res) {
    res.render('skills/show', {
        skill: skill.getOne(req.params.id)
    })
}
const BashGit = require('../bashgit');
const config = require('../../config.js');
const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', function (req, res) {

});

router.get('/issues', function(req, res) {
  var git = new BashGit();

  git.github.issues.getForRepo({
    owner: 'springshare',
    repo: 'LibCRM'
  }, function(err, response) {
    res.status(200).json(response);
  });
});

router.get('/tasks', function (req, res) {

});

router.get('/task/new', function(req, res) {

});

router.get('/task/edit/:id', function(req, res) {

});

router.get('/task/delete/:id', function(req, res) {

});


module.exports = router;

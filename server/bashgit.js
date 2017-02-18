const config = require('../config.js');
const GitHubApi = require("github");

function BashGit() {
  this.github = new GitHubApi({
    debug: true,
    protocol: "https",
    host: "api.github.com",
    pathPrefix: "",
    headers: {
      "user-agent": "BashTasksApp"
    },
    Promise: require('bluebird'),
    followRedirects: false,
    timeout: 5000
  });

  this.github.authenticate({
    type: "basic",
    username: config.github.username,
    password: config.github.password
  });
}

module.exports = BashGit;

const axios = require("axios");

const data = {
  "name": "Hello-World-not",
  "description": "This is your first repository",
  "homepage": "https://github.com",
  "private": false,
  "has_issues": true,
  "has_projects": true,
  "has_wiki": true
};

const url = "https://api.github.com/user/repos";

const authToken = process.env.AUTH_TOKEN;

const post = function (data) {
  return axios.post(url, data, {headers: {"Authorization": `token ${authToken}`}})
    .then((response) => console.log(response))
    .catch((error) => console.log(error.message));
}

post(data);
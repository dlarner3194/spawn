const Api = require("./api.js");

const data = {
  "name": "Hello-World",
  "description": "This is your first repository",
  "homepage": "https://github.com",
  "private": false,
  "has_issues": true,
  "has_projects": true,
  "has_wiki": true
};

const createRepo = async data => {
  try {
    const resp = await Api.post(data);
    console.log(resp);
    return resp;
  } catch (e) {
    console.log(e);
  }
};

createRepo(data);
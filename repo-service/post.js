const Api = require("./api.js");

const data = {
  "name": "spawn",
  "description": "Repository generation tool",
  "homepage": "https://github.com",
  "private": false,
  "has_issues": true,
  "has_projects": true,
  "has_wiki": true,
  "license_template": "mit"
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
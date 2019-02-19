const Api = require("./api.js");

const userName = process.env.USER_NAME;

const listUserRepos = async user => {
  try {
    const resp = await Api.get(user);
    console.log(resp.data);
    return resp;
  } catch (e) {
    console.log(e);
  }
};

listUserRepos(userName);
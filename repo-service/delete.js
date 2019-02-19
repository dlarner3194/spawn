const axios = require("axios");

const baseUrl = process.env.GITHUB_BASE_URL;
const authToken = process.env.AUTH_TOKEN;
const userName = process.env.USER_NAME;

const params = {
  method: "DELETE",
  url: `${baseUrl}/repos/${userName}/Hello-World`,
  headers: {
    "Content-Type": "application/json",
    "Authorization": `token ${authToken}`,
  },
};

const deleteRepo = async params => {
  try {
    const resp = await axios(params);
    console.log(params.url);
    console.log(resp.data);
    return resp;
  } catch (e) {
    console.log(e);
  }
};

deleteRepo(params);
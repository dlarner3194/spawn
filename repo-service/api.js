const axios = require("axios");

const UriBuilder = require("./builders/uri-builder");

const baseUrl = process.env.GITHUB_BASE_URL;
const authToken = process.env.AUTH_TOKEN;

async function get(user) {
  const uri = UriBuilder.build(baseUrl, user);

  try {
    const resp = await makeRequest(uri, "GET");
    console.log(resp.data);
    return resp;
  } catch (e) {
    console.log(`Was not able to complete request for ${uri}`);
    throw new Error(e);
  }
}

async function post(data) {
  const uri = UriBuilder.build(baseUrl);

  try {
    const resp = await makeRequest(uri, "POST", data);
    console.log(resp.data);
    return resp;
  } catch (e) {
    console.log(`Was not able to complete request for ${uri} with data: ${JSON.stringify(data)}`);
    throw new Error(e);
  }
}

async function makeRequest(uri, method, data) {
  const params = {
    method: method,
    url: uri,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `token ${authToken}`,
    },
    data: data,
  };
  console.log(JSON.stringify(params, null, 2));
  try {
    const response = await axios(params);
    return response;
  } catch (e) {
    console.log(e.message);
    throw new Error(e);
  }
}

module.exports = { get, post };
const axios = require("axios");

const data = require("./data.json");

const baseUrl = process.env.CODEBUILD_URL;

const params = {
  method: "POST",
  url: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  data: data,
};

const postData = async params => {
  try {
    const resp = await axios(params);
    console.log(params.url);
    console.log(resp.data);
    return resp;
  } catch (e) {
    console.log(e);
  }
};

postData(params);
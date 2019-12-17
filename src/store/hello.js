const axios = require("axios");
const qs = require("qs");
const suggestion = {
  suggest_email: "673598118@qq.com",
  suggest_user: "Flintstone",
  suggest_message: "hello world"
};
async function getSources(obj) {
  const options = {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    data: obj,
    url: "https://www.aigisss.com/api/v1/suggestions/"
  };
  const { data } = await axios(options);
  console.log("Rd: getSources -> data", data);
}
getSources(suggestion);

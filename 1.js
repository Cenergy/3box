const axios = require("axios");
let a;
(async () => {
  const { data, status } = await axios.get("http://127.0.0.1:5501/a.json");
  console.log("Rd: data,status", data, status);

  a = 10086;
  //可以在这里做操作
  console.log("Rd: data", data, a);
})();

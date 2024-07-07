const client = require("./client");

async function getData() {
  client.set("msg:5", "Hi from node server");
  client.expire("msg:5", 10);
  const data = await client.get("msg:5");
  console.log("result >", data);
}

getData();

const client = require("./client");

async function init() {
  await client.lpush("msgs", 1);
  await client.lpush("msgs", 2);
  await client.lpush("msgs", 3);
  const res = await client.lrange("msgs", 0, -1);
  console.log("res >", res);
}

init();

const express = require("express");
const { router } = require("./router");
const app = express();
const PORT = 4001;

app.use(router);

app.listen(PORT, () => {
  console.log("server is started at port", PORT);
});

const client = require("./client");

const router = require("express").Router();

//   res.send("Hi from redis server");
router.get("/", async (req, res) => {
  try {
    const cachedVal = await client.get("todos");
    if (cachedVal) {
      res.status(200).json({ from: "CACHE", data: JSON.parse(cachedVal) });
    } else {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      await client.set("todos", JSON.stringify(data));
      await client.expire("todos", 30);
      res.status(200).json({ from: "API", data });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = { router };

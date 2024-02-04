const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT;
const database_url = process.env.DATABASE_URL;
const app = require("./app");

async function main() {
  try {
    await mongoose.connect(database_url);
    console.log("Connection established!");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

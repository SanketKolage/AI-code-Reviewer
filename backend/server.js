const express = require("express");
const aiRoutes = require("./src/routes/ai.routes");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const dotenv = require("dotenv")
dotenv.config()
app.use("/ai", aiRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

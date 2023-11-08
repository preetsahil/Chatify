const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const app = express();
app.use(express.json());
dotenv.config({ path: "./.env" });

connectDB();

app.get("/", (req, res) => {
  res.send("API is running");
});
app.use("/api/user", userRoutes);
const port = process.env.PORT;
app.listen(5000, console.log(`Server Started on PORT ${port}`.yellow.bold));

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const clientsRouter = require("./routes/clients");

const app = express();

app.use(cors());
app.use(express.json());
app.use(clientsRouter);

app.listen(5000, () => {
  console.log(`Server is running on on port 5000`);
});

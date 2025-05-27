require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const callRoutes = require("./routes/callRoutes");
const swagger = require("./swagger");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MongoDB connected");
});

app.use("/calls", callRoutes);
app.use("/api-docs", swagger.serve, swagger.setup);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

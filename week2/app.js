"use strict";

const express = require("express");
const catRoute = require("./routes/catRoute");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
const cors = require("cors");
const { httpError } = require("./utils/errors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(express.static("uploads"));

app.use("/auth", authRoute);
app.use("/cat", catRoute);
app.use("/user", userRoute);

app.use((req, res, next) => {
  const err = httpError("Not found", 404);
  next(err);
});

app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({message: err.message || "Internal server error"})
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); 
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/auth");
const auctionRoutes = require("./routes/auction");
const bidRoutes = require("./routes/bid");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("views"));

mongoose.connect("mongodb://127.0.0.1:27017/auctionDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/auth", authRoutes);
app.use("/auction", auctionRoutes);
app.use("/bid", bidRoutes);

app.listen(3000, () => {
console.log("Server running on port 3000");
});
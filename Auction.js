const mongoose = require("mongoose");

const auctionSchema = new mongoose.Schema({

itemName: String,
startPrice: Number,
currentPrice: Number,
endTime: String

});

module.exports = mongoose.model("Auction", auctionSchema);
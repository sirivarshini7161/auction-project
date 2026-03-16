const mongoose = require("mongoose");

const bidSchema = new mongoose.Schema({

auctionId: String,
bidAmount: Number

});

module.exports = mongoose.model("Bid", bidSchema);
const express = require("express");
const router = express.Router();
const Bid = require("../models/Bid");
const Auction = require("../models/Auction");
const mongoose = require("mongoose");

router.post("/place", async (req,res)=>{

const {auctionId,bidAmount} = req.body;

if(!mongoose.Types.ObjectId.isValid(auctionId)){
return res.send("Invalid Auction ID");
}

const auction = await Auction.findById(auctionId);

if(!auction){
return res.send("Auction not found");
}

if(bidAmount <= auction.currentPrice){
return res.send("Bid must be higher");
}

auction.currentPrice = bidAmount;
await auction.save();

const bid = new Bid({
auctionId,
bidAmount
});

await bid.save();

res.send("Bid placed successfully");

});

module.exports = router;
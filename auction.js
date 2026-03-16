const express = require("express");
const router = express.Router();
const Auction = require("../models/Auction");

router.get("/all", async (req,res)=>{

const auctions = await Auction.find();

res.json(auctions);

});

router.post("/create", async (req,res)=>{

const {itemName,startPrice,endTime} = req.body;

const auction = new Auction({

itemName,
startPrice,
currentPrice:startPrice,
endTime

});

await auction.save();

res.send("Auction Created");

});

module.exports = router;
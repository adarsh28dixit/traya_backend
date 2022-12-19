const mongoose = require("mongoose");

mongoose.set("debug", true);
mongoose.set("strictQuery", false);
// const options = {
//   strict: "throw",
//   strictQuery: false
// };

const reviewSchema = new mongoose.Schema({
    email: {type: String},
    behaviour: {type: Number},
    maintenance: {type: Number},
    fair: {type: Number},
    safety: {type: Number},
    
}, {
    timestamps: true
})

const Review = mongoose.model("Review", reviewSchema)

module.exports = Review;
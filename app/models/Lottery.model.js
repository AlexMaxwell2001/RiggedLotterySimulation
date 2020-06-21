const mongoose = require('mongoose');

const LotterysSchema = mongoose.Schema({
    Lottery1: String,
    Lottery2: String,
    Lottery3:String,
    Lottery4:String,
    Lottery5:String,
    Lottery6:String
});

module.exports = mongoose.model('Lottery', LotterysSchema);

const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
    coinId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    symbol: { type: String, required: true },
    price: { type: Number, required: true },
    marketCap: { type: Number, required: true },
    percentChange: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now }
});

const historySchema = new mongoose.Schema({
    coinId: { type: String, required: true },
    name: { type: String, required: true },
    symbol: { type: String, required: true },
    price: { type: Number, required: true },
    marketCap: { type: Number, required: true },
    percentChange: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now }
});

const Crypto = mongoose.model('Crypto', cryptoSchema);
const CryptoHistory = mongoose.model('CryptoHistory', historySchema);

module.exports = { Crypto, CryptoHistory };
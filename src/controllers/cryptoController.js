const axios = require('axios');
const Crypto = require('../models/crypto');

// Fetch live cryptocurrency data from CoinGecko
exports.getCoins = async (req, res) => {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
            params: {
                vs_currency: 'usd',
                order: 'market_cap_desc',
                per_page: 10,
                page: 1,
                sparkline: false
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('CoinGecko API error:', error.response ? error.response.data : error.message);
        res.status(500).json({ 
            message: 'Error fetching data from CoinGecko', 
            error: error.response ? error.response.data : error.message 
        });
    }
};

// Store a snapshot of current prices in the database
exports.postHistory = async (req, res) => {
    const { coinId, name, symbol, price, marketCap, percentChange } = req.body;
    const newCrypto = new Crypto({
        coinId,
        name,
        symbol,
        price,
        marketCap,
        percentChange,
        timestamp: new Date()
    });

    try {
        await newCrypto.save();
        res.status(201).json(newCrypto);
    } catch (error) {
        res.status(500).json({ message: 'Error saving data to the database', error });
    }
};

// (Optional) Return historical price data for a specified coin
exports.getHistory = async (req, res) => {
    const { coinId } = req.params;

    try {
        const history = await Crypto.find({ coinId }).sort({ timestamp: -1 });
        res.json(history);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching historical data', error });
    }
};
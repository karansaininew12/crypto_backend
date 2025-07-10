const express = require('express');
const { getCoins, postHistory, getHistory } = require('../controllers/cryptoController');

const router = express.Router();

router.get('/coins', getCoins);
router.post('/history', postHistory);
router.get('/history/:coinId', getHistory);

module.exports = router;
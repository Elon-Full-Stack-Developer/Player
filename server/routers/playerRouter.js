const express = require('express');
const playerBL = require('../BL/playerBL');
const router = express.Router();

/* Get All Players */
router.route('/').get(async (req, res) => {
    try {
        const players  = await playerBL.GetAllPlayers();
        return res.json(players);
    } catch (error) {
        return res.json(error.message); // message of error
    }
});

/* Add Msg */
router.route('/').post(async (req, res) => {
    try {
        const newMsg = req.body;
        const status = await playerBL.AddMsgToTxT(newMsg);
        console.log(status);
        return res.json(status);
    } catch (error) {
        return res.json(error.message); // message of error
    }
});

module.exports = router;
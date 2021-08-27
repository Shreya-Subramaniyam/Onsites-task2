const express = require('express');
const router = express.Router();
const urL = require('../models/schema');

router.get('/:code', async (req, res) => {
  try {
    const url = await urL.findOne({ Ucode: req.params.code });

    if (url) {
      return res.redirect(url.longU);
    } else {
      return res.status(404).json('No Url found');
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server Error');
  }
});

module.exports = router;

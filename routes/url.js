const express = require('express');
const config = require('config');
const router = express.Router();
const validurl = require('valid-url');
const shortid = require('shortid');
const url = require('../models/schema');

router.post('/', async (request, response) => {
  const { longU } = req.body;
  const baseuri = config.get('baseuri');
})

if(validurl.isUri(baseuri)) {
  return res.status(401).json('invalid base url');
}


if(validurl.isUri(longU)) {
  try {
    let url = await url.findOne({ longU });

    if(url) {
      res.json(url);
    }
    else {
      const Ucode = shortid.generate();
      const shortU = baseuri + '/' + Ucode;
      UrL = new url({
        longU,
        shortU,
        Ucode,
        date: new Date()
      })

    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Error');

  }
}

else {
  res.status(401).json('Invalid URL');
}

module.exports = router;

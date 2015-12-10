var express = require('express');
var router = express.Router();
var monChan = require('../models/channels.js');

/* GET channel data. */
router.get('/', function(req, res, next) {

  res.render('channels', {title: 'Channels' });
});

router.get('/channels', function(req, res, next) {
  //var channels = [{name: 'eta', purpose: 'eta purpose'}];
  monChan.getChannels(function(err, channels) {
    if (err) {
      next(err);
    }

    res.json(channels);
  });
});

router.post('/channels', function(req, res, next) {
  console.log('Post Works');
  var data = req.body;
  console.log(data);
  monChan.postChannel(data, function(err, results) {
    res.send(results);
  });
})

module.exports = router;

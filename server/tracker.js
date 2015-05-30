var config = require('../config')

var Tracker = require('bittorrent-tracker/server')

var tracker = new Tracker({
  ws: true, // enable websocket (webtorrent) tracker,
  udp: false // TEMPORARILY DISABLE UDP - it's making server fail to start in production
             // since udp6 support was added
})

tracker.on('listening', function () {
  var ports = {
    http: tracker.http.address().port
    // udp: tracker.udp.address().port
  }
})

tracker.listen(config.ports.tracker, { http: '127.0.0.1', udp: config.host })

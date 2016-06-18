var Tracker = require('bittorrent-tracker/server')

// Create WebTorrent-only tracker. Disable UDP and HTTP.
var tracker = new Tracker({ ws: true, udp: false, http: false })

// Redirect http://tracker.fastcast.nz to website homepage
tracker.http.on('request', function (req, res, opts) {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(301, { 'Location': 'https://fastcast.nz' })
    res.end()
  }
})

tracker.on('listening', function () {})

tracker.listen('9003', '127.0.0.1')

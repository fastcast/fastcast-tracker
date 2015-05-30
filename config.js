exports.isProd = process.env.NODE_ENV === 'production'
exports.host = process.env.NODE_ENV === 'production' && '144.6.227.30'

var PORT_80 = process.env.NODE_ENV === 'production' ? 80 : 9000

exports.ports = {
  tracker: {
    http: 9003,
    udp: PORT_80
  }
}

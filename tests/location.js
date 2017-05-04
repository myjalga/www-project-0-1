

var geoip = require('geoip-lite');

var ip = "112.198.99.218"

var geo = geoip.lookup(ip);

console.log(geo);

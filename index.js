// Generated with
//
// JSON.stringify(map1_markers.map(function(i, e) {
//     var p = $(i.window.content_);
//     return {
//         name: p.find('h3').text(),
//         lat: i.position.lat(),
//         lng: i.position.lng(),
//         url: p.find('a').attr('href'),
//         type: (p.find('p:first').text().split('Sub-Type: ')[1] || "").trim()
//     };
// }));
//

var BOUNDARIES = {
  CA: {
    lng: [-125.3486958, -114.5905886],
    lat: [31.7395863, 41.8956688]
  }
};
var fs = require("fs");
var contents = fs.readFileSync("startups.json");
var startups = JSON.parse(contents);

var caliStartups = startups.filter(function(el) {
    return (el.lat >= BOUNDARIES.CA.lat[0] && el.lat <= BOUNDARIES.CA.lat[1] && el.lng >= BOUNDARIES.CA.lng[0] && el.lng <= BOUNDARIES.CA.lng[1]);
});


console.log(JSON.stringify(caliStartups, null, '  '));

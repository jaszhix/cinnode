const GeocodeGlib = require('GeocodeGlib');

const location = new GeocodeGlib.Location(
  // {latitude, longitude, accuracy}
);

// London
location.setFromUri('geo:51.507222,-0.1275');

const reverse = new GeocodeGlib.Reverse(location);

// nope, this always throws errors
console.log(reverse.resolve());

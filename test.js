function tileZXYToLatLonBBox(zoom, x, y) {
  let lon1 = (x / Math.pow(2, zoom)) * 360.0 - 180.0;

  let n1 = Math.PI - (2.0 * Math.PI * y) / Math.pow(2, zoom);
  let lat1 = (180.0 / Math.PI) * Math.atan(0.5 * (Math.exp(n1) - Math.exp(-n1)));

  let lon2 = ((x + 1) / Math.pow(2, zoom)) * 360.0 - 180.0;

  let n2 = Math.PI - (2.0 * Math.PI * (y + 1)) / Math.pow(2, zoom);
  let lat2 = (180.0 / Math.PI) * Math.atan(0.5 * (Math.exp(n2) - Math.exp(-n2)));

  return {
    lat1: lat1.toString(),
    lon1: lon1.toString(),
    lat2: lat2.toString(),
    lon2: lon2.toString(),
  };
}

console.log(tileZXYToLatLonBBox(16, 35613, 23171));

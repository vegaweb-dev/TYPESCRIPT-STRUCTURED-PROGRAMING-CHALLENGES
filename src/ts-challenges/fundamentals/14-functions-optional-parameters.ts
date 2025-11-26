/*
Create a TypeScript function formatCoordinates that receives:
lat: number (required)
lng?: number (optional)
The function must return:
"Lat: X, Lng: Y" → if lng is provided
"Lat: X" → if lng is NOT provided
*/

const formatCoordinates = (lat: string, lng?: string): string =>
  lng ? `Lat: ${lat}, Lng: ${lng}` : `Lat: ${lat}`;

module.exports = { formatCoordinates };

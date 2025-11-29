/*
Create a typed TypeScript function named formatAddress that receives:
street: string
city?: string (optional, default "Unknown City")
country?: string (optional, default "Unknown Country")
The function must return a single string in the exact format:
"street, city, country"
*/

const formatAddress = (
  street: string,
  city: string = "Unknown City",
  country: string = "Unknown Country",
): string => `${street}, ${city}, ${country}`;

module.exports = { formatAddress };

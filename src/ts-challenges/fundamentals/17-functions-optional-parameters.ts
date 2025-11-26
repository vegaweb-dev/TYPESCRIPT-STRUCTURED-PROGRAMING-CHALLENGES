/*
Exercise 11 — Optional Parameters Practice
Create a function formatNotification that receives:
message: string (required)
type?: string (optional)
Return:
"type: message" → if type is provided
"message" → if type is NOT provided
*/

const formatNotification = (message: string, type?: string): string =>
  type ? `${type}: ${message}` : `${message}`;

module.exports = { formatNotification };

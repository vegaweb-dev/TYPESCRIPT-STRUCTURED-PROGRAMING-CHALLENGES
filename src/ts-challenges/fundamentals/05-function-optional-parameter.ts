/*
Create a function named formatMessage with:
Parameter msg: string (required)
Parameter prefix?: string (optional)
Return type: string
"prefix: msg" → if prefix exists
"msg" → if prefix is not provided
Finally, print:
formatMessage("System ready")
formatMessage("Connection lost", "ERROR")
*/

const formatMessage = (msg: string, prefix?: string): string => {
  return prefix ? `${prefix}:${msg}` : `${msg}`;
};

module.exports = { formatMessage };

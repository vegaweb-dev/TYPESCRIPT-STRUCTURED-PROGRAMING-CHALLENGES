/*
Implement a function named formatEmail that receives username: string and an optional domain?: string.
If domain is provided, return ${username}@${domain}.
If domain is not provided, return ${username}@example.com.
Ensure proper TypeScript types and that the function returns a string.
*/

const formatEmail = (username: string, domain?: string): string =>
  domain ? `${username}@${domain}` : `${username}`;

module.exports = { formatEmail };

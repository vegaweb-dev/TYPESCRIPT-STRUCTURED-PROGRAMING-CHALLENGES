/*
Create a TypeScript function named formatUser that receives:
a required parameter username: string
an optional parameter role?: string
The function must return:
"username (role)" if role is provided
"username" if no role is provided
*/

const formatUser = (username: string, role?: string): string =>
  role ? `${username} (${role})` : `${username}`;

module.exports = { formatUser };

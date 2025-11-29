/*
Write a TypeScript function formatTitle that:
Receives a required title: string
Receives an optional category: string
Returns:
"TITLE - CATEGORY" when category exists
"TITLE" when category is not provided
Expected behavior example (DO NOT CODE THIS, JUST FOR CLARITY):
formatTitle("Introduction") → "Introduction"
formatTitle("Testing", "QA") → "Testing - QA"
*/

const formatTitle = (title: string, category?: string): string =>
  category ? `${title}-${category}` : `${title}`;

module.exports = { formatTitle };

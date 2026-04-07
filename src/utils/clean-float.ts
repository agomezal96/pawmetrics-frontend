function cleanFloat(input: string | number): number {
  // 1. Convert input to a float (parseFloat handles both strings and numbers in JS)
  // If it's already a number, it just returns it.
  const num = typeof input === 'string' ? parseFloat(input) : input;

  // 2. Check if the result is a valid number (handles empty strings or garbage text)
  if (isNaN(num)) {
    return 0; // Or handle error as you prefer
  }

  // 3. Apply the "Pure Float" logic
  // If it's an integer (10.00), return it whole.
  // If it has decimals (10.01), return it as-is.
  return Number.isInteger(num) ? Math.trunc(num) : num;
}

export { cleanFloat };

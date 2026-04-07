function cleanFloat(val: number): number {
  // Check if the number is already an integer (e.g., 10.00)
  if (Number.isInteger(val)) {
    return Math.trunc(val); // This stays a 'number' type
  }

  // If it's 10.01, it returns the original float
  return val;
}

export { cleanFloat };

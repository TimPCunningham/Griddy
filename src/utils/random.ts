/**
 * Generates a random base64 string of specified length
 * @param length The length of the string to generate (default: 12)
 * @returns A random base64 string
 */
export function randomBase64(length: number = 12): string {
  const bytes = new Uint8Array(Math.ceil(length * 0.75)); // 3 bytes needed for 4 base64 chars
  crypto.getRandomValues(bytes);
  const base64 = btoa(String.fromCharCode(...bytes));
  return base64.slice(0, length).replace(/[+/]/g, '_'); // Make URL safe
} 
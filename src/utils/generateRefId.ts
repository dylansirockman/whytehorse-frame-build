/**
 * Generates a short reference ID for quote requests
 * Format: WHT-XXXX (e.g., WHT-7F3C)
 */
export const generateRefId = (): string => {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = 'WHT-';
  
  for (let i = 0; i < 4; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  return result;
};
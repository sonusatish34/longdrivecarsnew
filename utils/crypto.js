import fernet from 'fernet';

/**
 * Decrypts a Fernet-encoded string and parses it as JSON.
 * @param {string} encryptedData - The raw string from the API.
 * @param {string} secretKey - The base64-encoded Fernet secret.
 * @returns {any|null} - The parsed JSON data or null if decryption fails.
 */
export function decryptFernetData(encryptedData, secretKey) {
  try {
    if (!encryptedData) return null;
    
    // 1. Clean up the string (remove extra quotes and whitespace)
    const cleanedToken = encryptedData.replace(/['"]+/g, '').trim();

    // 2. Initialize Fernet
    const secret = new fernet.Secret(secretKey);
    const token = new fernet.Token({
      secret: secret,
      token: cleanedToken,
      ttl: 0 // Set to 0 to ignore time-based expiration checks
    });

    // 3. Decode and Parse
    const decryptedString = token.decode();
    return JSON.parse(decryptedString);
    
  } catch (error) {
    console.error("Decryption failed:", error.message);
    return null;
  }
}
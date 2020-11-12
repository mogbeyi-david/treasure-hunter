import crypto from 'crypto';

export const generateRandomString = (length = 4): string => {
  return crypto.randomBytes(16).toString('hex');
};

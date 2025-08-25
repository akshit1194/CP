import jwt from 'jsonwebtoken';

export function generateToken(payload, expiresIn = '7d') {
  const secret = process.env.JWT_SECRET || 'dev_secret_change_me';
  return jwt.sign(payload, secret, { expiresIn });
}

export function verifyToken(token) {
  const secret = process.env.JWT_SECRET || 'dev_secret_change_me';
  return jwt.verify(token, secret);
}

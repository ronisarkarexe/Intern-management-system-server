import jwt from 'jsonwebtoken';

const createToken = (payload, secret, expireTime) => {
  return jwt.sign(payload, secret, { expiresIn: expireTime });
};

const verifyToken = (token, secret) => {
  return jwt.verify(token, secret);
};

export const JwtHalers = {
  createToken,
  verifyToken,
};

import bcrypt from 'bcrypt';
import { Admin } from '../admin/admin.model.mjs';
import ApiError from '../../../errors/ApiError.mjs';
import httpStatus from 'http-status';
import { Intern } from '../intern/intern.module.mjs';
import { JwtHalers } from '../../../utils/jwtHelper.mjs';
import config from '../../../config/index.mjs';

const login = async (payload) => {
  let isExistUser = null;
  if (payload.role === 'ADMIN') {
    isExistUser = await Admin.findOne({ email: payload.email }).select(
      '+password',
    );
  }
  if (payload.role === 'INTERN') {
    isExistUser = await Intern.findOne({ email: payload.email });
  }
  if (!isExistUser) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Please enter valid email!');
  }
  const matchPassword = await bcrypt.compare(
    payload.password,
    isExistUser.password,
  );
  if (!matchPassword) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Password does not match!');
  }
  const { role, email } = isExistUser;
  const accessToken = JwtHalers.createToken(
    { role, email },
    config.jwt.secret,
    config.jwt.expires_in,
  );

  const refreshToken = JwtHalers.createToken(
    { role, email },
    config.jwt.refresh_secret,
    config.jwt.refresh_expires_in,
  );

  return {
    accessToken,
    refreshToken,
  };
};

const refreshToken = async (token) => {
  const verifyToken = JwtHalers.verifyToken(token, config.jwt.refresh_secret);
  if (!verifyToken) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Unauthorized.!');
  }
  const { role, email } = verifyToken;
  const accessToken = JwtHalers.createToken(
    { role, email },
    config.jwt.secret,
    config.jwt.expires_in,
  );
  return {
    accessToken,
  };
};

export const AuthService = {
  login,
  refreshToken,
};

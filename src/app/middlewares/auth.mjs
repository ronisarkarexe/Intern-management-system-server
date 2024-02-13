import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError.mjs';
import { JwtHalers } from '../../utils/jwtHelper.mjs';
import config from '../../config/index.mjs';

const auth =
  (...requiredRole) =>
  async (req, res, next) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        throw new ApiError(
          httpStatus.UNAUTHORIZED,
          'You are not authorized to access.',
        );
      }
      const verifyUser = JwtHalers.verifyToken(token, config.jwt.secret);
      if (requiredRole.length && !requiredRole.includes(verifyUser.role)) {
        throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden.');
      }
      req.user = verifyUser;
      next();
    } catch (error) {
      next(error);
    }
  };

export default auth;

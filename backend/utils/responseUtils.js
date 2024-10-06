// responseUtils.js

export const sendErrorResponse = (res, statusCode, message) => {
  return res.status(statusCode).json({
    message: message,
    success: false,
  });
};

/**
 * @description All the Error messages that needed to be sent to user
 * @type {Object}
 */
export const ErrorCode = Object.freeze({
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  SOMETHING_WRONG: 501,
  INTERNAL_ERROR: 500,
  INVALID_CREDENTIAL: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  VALIDATION_FAILED: 422,
  EXPECTATION_FAILED: 417,
  ALREADY_EXIST: 409,
  ALREADY_USED: 410, //MKN - Added New subscription logic - 19-05-2021
  EXPIRED: 411, //MKN - Added New subscription logic - 19-05-2021
});

/**
 * @description All the Success messages that needed to be sent to user
 * @type {Object}
 */
export const SuccessCode = Object.freeze({
  SUCCESS: 200,
  OTP_SEND: 201,
});

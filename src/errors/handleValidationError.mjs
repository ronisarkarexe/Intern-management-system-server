const handleValidationError = (err) => {
  const errors = Object.values(err.errors).map((el) => {
    return {
      path: el.path,
      message: el.message,
    };
  });
  const statusCode = 500;
  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: errors,
  };
};

export default handleValidationError;

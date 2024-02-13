const sendResponse = (res, data) => {
  const responseData = {
    success: data.success,
    statusCode: data.statusCode,
    message: data.message || null,
    meta: data.meta,
    data: data.data,
  };
  res.status(data.statusCode).json(responseData);
};

export default sendResponse;

import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync.mjs';
import sendResponse from '../../../shared/sendResponse.mjs';
import { CertificateService } from './certificate.service.mjs';

const createCertificate = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await CertificateService.createCertificate(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Certificate added successfully!',
    data: result,
  });
});

export const CertificateController = {
  createCertificate,
};

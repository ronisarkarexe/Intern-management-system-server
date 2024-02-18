import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync.mjs';
import sendResponse from '../../../shared/sendResponse.mjs';
import { CertificateService } from './certificate.service.mjs';
import pick from '../../../shared/pick.mjs';
import { paginationFields } from '../../../utils/pagination.mjs';

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


const getAllCertificate = catchAsync(async (req, res) => {
  const options = pick(req.query, paginationFields);
  const result = await CertificateService.getAllCertificate(options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Certificate retried successfully',
    data: result,
  });
});

const getSingleCertificate = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await CertificateService.getSingleCertificate(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Certificate retied successfully',
    data: result,
  });
});

const updateCertificate = catchAsync(async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const result = await CertificateService.updateCertificate(id, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Certificate updated successfully',
    data: result,
  });
});

const deleteCertificate = catchAsync(async (req, res) => {
  const id = req.params.id;
  await CertificateService.deleteCertificate(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Certificate deleted successfully',
  });
});

export const CertificateController = {
  createCertificate,
  getAllCertificate,
  getSingleCertificate,
  updateCertificate,
  deleteCertificate
};

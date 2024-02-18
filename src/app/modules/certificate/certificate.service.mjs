import paginationHelper from '../../../utils/paginationHelper.mjs';
import { Certificate } from './Certificate.module.mjs';

const createCertificate = async (payload) => {
  const result = await Certificate.create(payload);
  return result;
};

const getAllCertificate = async (options) => {
  const { page, limit, skip, sortBy, sortOrder } = paginationHelper(options);
  const sortCondition = {};
  if (sortBy && sortOrder) {
    sortCondition[sortBy] = sortOrder;
  }
  const result = await Certificate.find({})
    .sort(sortCondition)
    .skip(skip)
    .limit(limit);
  const total = await Certificate.countDocuments({});
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleCertificate = async (id) => {
  const result = await Certificate.findOne({ _id: id });
  return result;
};

const updateCertificate = async (id, payload) => {
  const result = await Certificate.updateOne({ _id: id }, payload);
  return result;
};

const deleteCertificate = async (id) => {
  await Certificate.deleteOne({ _id: id });
};

export const CertificateService = {
  createCertificate,
  getAllCertificate,
  getSingleCertificate,
  updateCertificate,
  deleteCertificate,
};

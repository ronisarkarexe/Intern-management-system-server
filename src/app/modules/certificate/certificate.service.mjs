import { Certificate } from './Certificate.module.mjs';

const createCertificate = async (payload) => {
  const result = await Certificate.create(payload);
  return result;
};

export const CertificateService = {
  createCertificate,
};

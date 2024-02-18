import express from 'express';
import { CertificateController } from './certificate.controller.mjs';

const router = express.Router();

router.post('/', CertificateController.createCertificate);

export const CertificateRouters = router;

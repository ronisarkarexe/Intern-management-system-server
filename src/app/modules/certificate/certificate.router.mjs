import express from 'express';
import { CertificateController } from './certificate.controller.mjs';

const router = express.Router();

router.post('/', CertificateController.createCertificate);
router.get('/', CertificateController.getAllCertificate);
router.get('/:id', CertificateController.getSingleCertificate);
router.patch('/:id', CertificateController.updateCertificate);
router.delete('/:id', CertificateController.deleteCertificate);


export const CertificateRouters = router;

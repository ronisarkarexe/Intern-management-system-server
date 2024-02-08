import { InternService } from './intern.service.mjs';

const createIntern = async (req, res) => {
  const data = req.body;
  const result = await InternService.createIntern(data);
  res.status(200).json({
    message: 'Intern created successfully',
    data: result,
  });
};

const getAllIntern = async (req, res) => {
  const result = await InternService.getAllIntern();
  res.status(200).json({
    message: 'Intern retried successfully',
    data: result,
  });
};

const getSingleIntern = async (req, res) => {
  const id = req.params.id;
  const result = await InternService.getSingleIntern(id);
  res.status(200).json({
    message: 'Intern retied successfully',
    data: result,
  });
};

const updateIntern = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const result = await InternService.updateIntern(id, data);
  res.status(200).json({
    message: 'Intern updated successfully',
    data: result,
  });
};

const deleteIntern = async (req, res) => {
  const id = req.params.id;
  await InternService.deleteIntern(id);
  res.status(200).json({
    message: 'Intern deleted successfully',
  });
};

export const InternController = {
  createIntern,
  getAllIntern,
  deleteIntern,
  getSingleIntern,
  updateIntern,
};

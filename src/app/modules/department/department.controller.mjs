import { DepartmentService } from "./department.service.mjs";

const createDepartment = async (req, res) => {
  const data = req.body;
  const result = await DepartmentService.createDepartmentDb(data);
  res.status(200).json({
    message: "Department created successfully",
    data: result,
  });
};

const getAllData = async (req, res) => {
  const result = await DepartmentService.getAllDataDb();
  res.status(200).json({
    message: "Department retried successfully",
    data: result,
  });
};

const deleteDepartment = async (req, res) => {
  const { id } = req.params;
  await DepartmentService.deleteDepartment(id);
  res.status(200).json({
    message: "Department deleted successfully"
  });
};

export const DepartmentController = {
  createDepartment,
  getAllData,
  deleteDepartment,
};

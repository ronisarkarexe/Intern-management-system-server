import mongoose from "mongoose";
import { Department } from "../department/department.model.mjs";
import { Intern } from "./intern.module.mjs";

const createIntern = async (payload) => {
  let result = null;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const department = await Department.findOne({ _id: payload.departmentId });
    result = await Intern.create(payload);
    department.internDetails.push({ internId: result._id });

    await department.save();
    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.commitTransaction();
    await session.endSession();
  }
  if (!result) {
    throw new Error("Intern is not created!");
  }
  return result;
};

const getAllIntern = async () => {
  const result = await Intern.find().populate("departmentId");
  return result;
};

const getSingleIntern = async (id) => {
  const result = await Intern.findOne({ _id: id }).populate("departmentId");
  return result;
};

const updateIntern = async (id, payload) => {
  const result = await Intern.updateOne({ _id: id }, payload);
  return result;
};

const deleteIntern = async (id) => {
  await Intern.deleteOne({ _id: id });
};

export const InternService = {
  createIntern,
  getAllIntern,
  getSingleIntern,
  updateIntern,
  deleteIntern,
};

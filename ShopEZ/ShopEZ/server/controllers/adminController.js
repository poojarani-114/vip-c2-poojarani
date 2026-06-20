import { Admin } from "../models/Schema.js";

export const getAdminData = async (_req, res) => {
  let data = await Admin.findOne();
  if (!data) data = await Admin.create({});
  res.json(data);
};

export const updateAdminData = async (req, res) => {
  let data = await Admin.findOne();
  if (!data) data = await Admin.create(req.body);
  else {
    Object.assign(data, req.body);
    await data.save();
  }
  res.json(data);
};

const UserModel = require("./users.model");

const CreateUserIntoDB = async (body) => {
  const result = await UserModel.create(body);
  return result;
};

const GetAllUserFromDB = async () => {
  const result = await UserModel.find();
  return result;
};

const GetSingleUserFromDB = async (id) => {
  const result = await UserModel.findById(id);
  return result;
};

const UpdateUserIntoDB = async (id, data) => {
  const result = await UserModel.findByIdAndUpdate(id, data, { new: true });
  return result;
};

const DeleteUserFromDB = async (id) => {
  const result = await UserModel.findByIdAndDelete(id);
  return result;
};

const UserService = {
  CreateUserIntoDB,
  GetAllUserFromDB,
  GetSingleUserFromDB,
  UpdateUserIntoDB,
  DeleteUserFromDB,
};

module.exports = UserService;

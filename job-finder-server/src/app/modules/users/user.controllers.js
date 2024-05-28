const catchAsync = require("../../utils/catchAsync");
const {
  CreateUserIntoDB,
  GetAllUserFromDB,
  GetSingleUserFromDB,
  UpdateUserIntoDB,
  DeleteUserFromDB,
} = require("./user.service");

const CreateUser = catchAsync(async (req, res) => {
  const result = await CreateUserIntoDB(req.body);

  SendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "User created successfully",
    data: result,
  });
});

const GetAllUser = catchAsync(async (req, res) => {
  const result = await GetAllUserFromDB();

  SendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "User fetched successfully",
    data: result,
  });
});

const GetSingleUser = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await GetSingleUserFromDB(id);

  SendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "User fetched successfully",
    data: result,
  });
});

const UpdateUser = catchAsync(async (req, res) => {
  const id = req.params.id;
  const updatedContent = req.body;

  const result = await UpdateUserIntoDB(id, updatedContent);

  SendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "User updated successfully",
    data: result,
  });
});

const DeleteUser = catchAsync(async (req, res) => {
  const id = req.params.id;

  await DeleteUserFromDB(id);

  SendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "User Deleted successfully",
    data: null,
  });
});

const UserControllers = {
  CreateUser,
  GetAllUser,
  GetSingleUser,
  UpdateUser,
  DeleteUser,
};

module.exports = UserControllers;

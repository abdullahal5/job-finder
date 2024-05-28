const { StatusCodes } = require("http-status-codes");
const catchAsync = require("../../utils/catchAsync");
const SendResponse = require("../../utils/sendResponse");
const {
  createJobPostIntoDB,
  GetAllDataFromDB,
  GetSingleDataFromDB,
  UpdateDataFromDB,
  DeleteDataFromDB,
} = require("./jobs.service");

const CreateJobPost = catchAsync(async (req, res) => {
  const result = await createJobPostIntoDB(req.body);

  SendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Job post created successfully",
    data: result,
  });
});

const GetAllJobPost = catchAsync(async (req, res) => {
  let result;
  const query = req.query.search;

  if (query) {
    result = await GetAllDataFromDB(query);
  } else {
    result = await GetAllDataFromDB();
  }

  if (result.length <= 0) {
    return SendResponse(res, {
      success: false,
      statusCode: StatusCodes.NOT_FOUND,
      message: "No result Found",
      data: null,
    });
  }

  SendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Job post fetched successfully",
    data: result,
  });
});

const GetSingleJobPost = catchAsync(async (req, res) => {
  const result = await GetSingleDataFromDB(req.params.id);

  SendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Single job post fetched successfully",
    data: result,
  });
});

const UpdateJobPost = catchAsync(async (req, res) => {
  const id = req.params.id;
  const updatedContent = req.body;

  const result = await UpdateDataFromDB(id, updatedContent);

  SendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Single job post updated successfully",
    data: result,
  });
});

const DeleteJobPost = catchAsync(async (req, res) => {
  const id = req.params.id;

  await DeleteDataFromDB(id);
  SendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Job post deleted successfully",
    data: null,
  });
});

const JobControllers = {
  CreateJobPost,
  GetAllJobPost,
  GetSingleJobPost,
  UpdateJobPost,
  DeleteJobPost,
};

module.exports = JobControllers;

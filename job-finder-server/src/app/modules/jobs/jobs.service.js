const JobModel = require("./jobs.model");

const createJobPostIntoDB = async (body) => {
  const result = await JobModel.create(body);
  return result;
};

const GetAllDataFromDB = async (query) => {
  let search = {};

  if (query) {
    const regex = new RegExp(query, "i");

    search = {
      $or: [
        { jobPostName: { $regex: regex } },
        { location: { $regex: regex } },
        { jobSector: { $regex: regex } },
        { jobType: { $regex: regex } },
        { companyName: { $regex: regex } },
        { experienceLevel: { $regex: regex } },
        { salary: { $regex: regex } },
        { area: { $regex: regex } },
      ],
    };

    const result = await JobModel.find(search);
    return result;
  } else {
    const result = await JobModel.find();
    return result;
  }
};

const GetSingleDataFromDB = async (id) => {
  const result = await JobModel.findOne({ _id: id });
  return result;
};

const UpdateDataFromDB = async (id, data) => {
  const result = await JobModel.findByIdAndUpdate(id, data, { new: true });
  return result;
};

const DeleteDataFromDB = async (id) => {
  const result = await JobModel.findOneAndDelete(id);
  return result;
};

const JobService = {
  createJobPostIntoDB,
  GetAllDataFromDB,
  GetSingleDataFromDB,
  DeleteDataFromDB,
  UpdateDataFromDB,
};

module.exports = JobService;

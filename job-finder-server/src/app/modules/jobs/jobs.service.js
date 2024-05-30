const JobModel = require("./jobs.model");

const createJobPostIntoDB = async (body) => {
  const result = await JobModel.create(body);
  return result;
};

const GetAllDataFromDB = async (query) => {
  let search = {};

  if (query) {
    const words = query.trim().split(/\s+/);
    const regexes = words.map((word) => new RegExp(word, "i"));

    search = {
      $or: [
        ...regexes.map((regex) => ({ jobPostName: { $regex: regex } })),
        ...regexes.map((regex) => ({ location: { $regex: regex } })),
        ...regexes.map((regex) => ({ jobSector: { $regex: regex } })),
        ...regexes.map((regex) => ({ jobType: { $regex: regex } })),
        ...regexes.map((regex) => ({ companyName: { $regex: regex } })),
        ...regexes.map((regex) => ({ experienceLevel: { $regex: regex } })),
        ...regexes.map((regex) => ({ salary: { $regex: regex } })),
        ...regexes.map((regex) => ({ area: { $regex: regex } })),
      ],
    };
    const results = await JobModel.find(search);
    return results;
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

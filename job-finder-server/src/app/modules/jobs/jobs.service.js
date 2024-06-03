const JobModel = require("./jobs.model");

const createJobPostIntoDB = async (body) => {
  const result = await JobModel.create(body);
  return result;
};

const GetAllDataFromDB = async (query) => {
  if (query?.search || query?.jobSector || query?.jobType) {
    let search = [];

    if (query?.search) {
      const words = query.search.trim().split(/\s+/);
      const regexes = words.map((word) => new RegExp(word, "i"));

      search.push(
        ...regexes.map((regex) => ({ jobPostName: { $regex: regex } })),
        ...regexes.map((regex) => ({ location: { $regex: regex } })),
        ...regexes.map((regex) => ({ jobSector: { $regex: regex } })),
        ...regexes.map((regex) => ({ jobType: { $regex: regex } })),
        ...regexes.map((regex) => ({ companyName: { $regex: regex } })),
        ...regexes.map((regex) => ({ experienceLevel: { $regex: regex } })),
        ...regexes.map((regex) => ({ salary: { $regex: regex } })),
        ...regexes.map((regex) => ({ area: { $regex: regex } }))
      );
    }

    if (query?.jobSector) {
      const sectors = query.jobSector.split(",");
      const sectorRegexes = sectors.map((sector) => new RegExp(sector, "i"));
      search.push({ jobSector: { $in: sectorRegexes } });
    }

    if (query?.jobType) {
      const types = query.jobType.split(",");
      const typeRegexes = types.map((type) => new RegExp(type, "i"));
      search.push({ jobType: { $in: typeRegexes } });
    }

    const results = await JobModel.find({ $or: search });
    return results;
  } else {
    const results = await JobModel.find();
    return results;
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

const JobModel = require("./jobs.model");

const createJobPostIntoDB = async (body) => {
  const result = await JobModel.create(body);
  return result;
};

const GetAllDataFromDB = async (query) => {
  if (query.search || query.jobSector || query.jobType || query.stipend) {
    let search = [];
    console.log(query.search)

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
        ...regexes.map((regex) => ({ stipend: { $regex: regex } })),
        ...regexes.map((regex) => ({ area: { $regex: regex } }))
      );
    }

    if (query?.jobSector) {
      const sectors = query.jobSector.split(",");
      search.push({ jobSector: { $in: sectors } });
    }

    if (query?.jobType) {
      const types = query.jobType.split(",");
      search.push({ jobType: { $in: types } });
    }

    // if (query?.stipend) {
    //   const stipend = parseInt(query?.stipend);
    //   console.log(stipend);
    //   search.push({ stipend: { $lte: 2000 } })
    // }

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

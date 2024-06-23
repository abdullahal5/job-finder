const { Schema, model } = require("mongoose");

const JobSchema = new Schema(
  {
    jobPostName: {
      type: String,
      required: [true, "JobPostName is required"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    area: {
      type: String,
      enum: ["Asia", "Europe", "Anywhere"],
      required: true,
    },
    experienceLevel: {
      type: String,
      enum: [
        "entry level",
        "mid level",
        "senior level",
        "executive",
        "senior-mid",
      ],
    },
    deadline: {
      type: Date,
      required: true,
    },
    jobSector: {
      type: String,
      enum: [
        "web development",
        "software development",
        "hardware engineering",
        "web design",
        "graphic design",
        "e-commerce",
        "music",
        "sports",
        "travel",
        "marketing",
        "teaching",
        "blog",
      ],
    },
    jobType: {
      type: String,
      enum: [
        "internship",
        "remote",
        "hybrid",
        "onsite",
        "part time",
        "full time",
      ],
    },
    stipend: {
      type: String,
      required: true,
      
    },
    companyName: {
      type: String,
      required: true,
    },
    companyLogo: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const JobModel = model("Job", JobSchema);
module.exports = JobModel;

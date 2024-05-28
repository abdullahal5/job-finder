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
        "Entry Level",
        "Mid Level",
        "Senior Level",
        "Executive",
        "Senior-Mid",
      ],
    },
    deadline: {
      type: Date,
      required: true,
    },
    jobSector: {
      type: String,
      enum: [
        "Web Development",
        "Software Development",
        "Hardware Engineering",
        "Web Design",
        "Graphic Design",
        "E-commerce",
        "Music",
        "Sports",
        "Travel",
        "Marketing",
        "Teaching",
        "Blog",
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
        "full time"
      ],
    },
    salary: {
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

const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [6, "Password must be at least 6 characters"],
    },
    profileImage: {
      type: String,
      default: "https://i.ibb.co/4pDNDk1/avatar.png",
    },
    membership: {
      type: {
        type: String,
        enum: ["free", "Standard", "Premium"],
      },
      status: {
        type: String,
        enum: ["active", "expired"],
        default: "active",
      },
    },
    expiresAt: {
      type: Date,
    },
    location: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    skills: [
      {
        type: String,
      },
    ],
    resumeLink: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", function (next) {
  if (this.isModified("membership.type")) {
    const now = Date.now();
    switch (this.membership.type) {
      case "free":
        this.expiresAt = new Date(now + 10000);
        break;
      case "Standard":
        this.expiresAt = new Date(now + 20000);
        break;
      case "Premium":
        this.expiresAt = new Date(now + 30000);
        break;
      default:
        this.expiresAt = undefined;
    }
    this.membership.status = "active";
  }
  next();
});

const UserModel = model("User", UserSchema);
module.exports = UserModel;

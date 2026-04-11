// load the mongoose library
import mongoose from "mongoose";

// create the schema
const userSchema = new mongoose.Schema(
  {
    // primary key name is _id of type String
    _id: String,
    // String field that is required and unique
    username: { type: String, required: true, unique: true },
    // String field that is required but not unique
    password: { type: String, required: true },
    // String fields with no additional configurations
    firstName: String,
    email: String,
    lastName: String,
    // Date field with no configurations
    dob: Date,
    role: {
      // String field with allowed string values
      type: String,
      enum: ["STUDENT", "FACULTY", "ADMIN", "USER"],
      // default value if not provided
      default: "USER",
    },
    // String fields with no additional configurations
    loginId: String,
    section: String,
    lastActivity: Date,
    totalActivity: String,
  },
  // store data in "users" collection
  { collection: "users" },
);
export default userSchema;

import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    description: String,
    course: { type: String, ref: "CourseModel" },
    points: Number,
    dueDate: String,
    availableDate: String,
    availableUntilDate: String,
  },
  { collection: "assignments" },
);
export default assignmentSchema;

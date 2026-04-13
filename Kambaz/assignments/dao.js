import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export default function AssignmentsDao(db) {
  function findAssignmentsForCourse(courseId) {
    return model.find({ course: courseId });
  }

  function findAssignmentById(assignmentId) {
    return model.findById(assignmentId);
  }

  function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: uuidv4() };
    return model.create(newAssignment);
  }

  function deleteAssignment(assignmentId) {
    return model.deleteOne({ _id: assignmentId });
  }

  async function updateAssignment(assignmentId, assignmentUpdates) {
    await model.updateOne({ _id: assignmentId }, { $set: assignmentUpdates });
    return model.findById(assignmentId);
  }

  return {
    findAssignmentsForCourse,
    findAssignmentById,
    createAssignment,
    deleteAssignment,
    updateAssignment,
  };
}

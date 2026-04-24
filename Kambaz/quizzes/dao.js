import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export default function QuizzesDao() {
  function findQuizzesForCourse(courseId) {
    return model.find({ course: courseId });
  }

  function findQuizById(quizId) {
    return model.findById(quizId);
  }

  function createQuiz(quiz) {
    const newQuiz = { ...quiz, _id: uuidv4() };
    return model.create(newQuiz);
  }

  function deleteQuiz(quizId) {
    return model.deleteOne({ _id: quizId });
  }

  async function updateQuiz(quizId, updates) {
    await model.updateOne({ _id: quizId }, { $set: updates });
    return model.findById(quizId);
  }

  return {
    findQuizzesForCourse,
    findQuizById,
    createQuiz,
    deleteQuiz,
    updateQuiz,
  };
}

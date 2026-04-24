import QuizzesDao from "./dao.js";

export default function QuizzesRoutes(app, db) {
  const dao = QuizzesDao(db);

  const findQuizzesForCourse = async (req, res) => {
    const { courseId } = req.params;
    const quizzes = await dao.findQuizzesForCourse(courseId);
    res.json(quizzes);
  };

  const findQuizById = async (req, res) => {
    const { quizId } = req.params;
    const quiz = await dao.findQuizById(quizId);
    if (!quiz) {
      res.sendStatus(404);
      return;
    }
    res.json(quiz);
  };

  const createQuizForCourse = async (req, res) => {
    const { courseId } = req.params;
    const quiz = { ...req.body, course: courseId };
    const newQuiz = await dao.createQuiz(quiz);
    res.json(newQuiz);
  };

  const updateQuiz = async (req, res) => {
    const { quizId } = req.params;
    const quiz = await dao.updateQuiz(quizId, req.body);
    res.json(quiz);
  };

  const deleteQuiz = async (req, res) => {
    const { quizId } = req.params;
    const status = await dao.deleteQuiz(quizId);
    res.json(status);
  };

  app.get("/api/courses/:courseId/quizzes", findQuizzesForCourse);
  app.post("/api/courses/:courseId/quizzes", createQuizForCourse);
  app.get("/api/quizzes/:quizId", findQuizById);
  app.put("/api/quizzes/:quizId", updateQuiz);
  app.delete("/api/quizzes/:quizId", deleteQuiz);
}

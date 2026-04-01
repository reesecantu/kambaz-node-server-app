import EnrollmentsDao from "./dao.js";
export default function EnrollmentsRoutes(app, db) {
  const dao = EnrollmentsDao(db);

  const getEnrollmentsForCurrentUser = (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }
    const enrollments = dao.findUserEnrollments(currentUser._id);
    res.json(enrollments);
  };

  const enrollCurrentUserInCourse = (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }
    const { courseId } = req.params;
    dao.enrollUserInCourse(currentUser._id, courseId);
    res.sendStatus(200);
  };

  const unenrollCurrentUserFromCourse = (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }
    const { courseId } = req.params;
    dao.unenrollUserFromCourse(currentUser._id, courseId);
    res.sendStatus(200);
  };

  app.get("/api/users/current/enrollments", getEnrollmentsForCurrentUser);
  app.put("/api/users/current/courses/:courseId", enrollCurrentUserInCourse);
  app.delete("/api/users/current/courses/:courseId", unenrollCurrentUserFromCourse);
}

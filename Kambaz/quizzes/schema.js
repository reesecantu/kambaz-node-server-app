import mongoose from "mongoose";

const choiceSchema = new mongoose.Schema(
  { text: String, isCorrect: Boolean },
  { _id: false }
);

// All three question types share one schema; type-specific fields are
// only populated for the matching type (choices, correctAnswer, correctAnswers)
const questionSchema = new mongoose.Schema({
  _id: String,
  type: {
    type: String,
    enum: ["MULTIPLE_CHOICE", "TRUE_FALSE", "FILL_IN_THE_BLANK"],
  },
  title: String,
  points: Number,
  questionText: String,
  choices: [choiceSchema],       // MULTIPLE_CHOICE
  correctAnswer: Boolean,        // TRUE_FALSE
  correctAnswers: [String],      // FILL_IN_THE_BLANK
});

const attemptSchema = new mongoose.Schema(
  {
    userId: { type: String, ref: "UserModel" },
    date: String,
    answers: { type: mongoose.Schema.Types.Mixed },
    score: Number,
    totalPoints: Number,
  },
  { _id: false }
);

const quizSchema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    description: String,
    course: { type: String, ref: "CourseModel" },
    quizType: {
      type: String,
      enum: ["GRADED_QUIZ", "PRACTICE_QUIZ", "GRADED_SURVEY", "UNGRADED_SURVEY"],
    },
    assignmentGroup: {
      type: String,
      enum: ["QUIZZES", "EXAMS", "ASSIGNMENTS", "PROJECTS"],
    },
    shuffleAnswers: Boolean,
    timeLimit: Number,
    hasTimeLimit: Boolean,
    multipleAttempts: Boolean,
    howManyAttempts: Number,
    showCorrectAnswers: String,
    accessCode: String,
    oneQuestionAtATime: Boolean,
    webcamRequired: Boolean,
    lockQuestionsAfterAnswering: Boolean,
    dueDate: String,
    availableDate: String,
    untilDate: String,
    published: Boolean,
    questions: [questionSchema],
    attempts: [attemptSchema],
  },
  { collection: "quizzes" }
);

export default quizSchema;
